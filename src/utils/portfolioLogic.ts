import { PortfolioItem } from '../data/portfolioData';

export type CategoryFilter = 'all' | 'career' | 'activity';
export type SortMode = 'newest' | 'oldest' | 'featured' | 'title';
export type ViewMode = 'gallery' | 'table' | 'timeline';

export interface FilterCriteria {
  category: CategoryFilter;
  role: string; // 'all' or specific role name
  year: number | 'all';
  searchQuery: string;
  sortBy: SortMode;
}

export interface PortfolioStats {
  totalCount: number;
  careerCount: number;
  activityCount: number;
  uniqueRolesCount: number;
  yearsCovered: number[];
  roleCounts: Array<{ role: string; count: number; category: 'career' | 'activity' | 'both' }>;
}

export function filterAndSortPortfolio(
  items: PortfolioItem[],
  criteria: FilterCriteria
): PortfolioItem[] {
  const normalizedQuery = criteria.searchQuery.trim().toLowerCase();

  const filtered = items.filter((item) => {
    if (criteria.category !== 'all' && item.category !== criteria.category) {
      return false;
    }

    if (criteria.role !== 'all' && !item.roles.includes(criteria.role)) {
      return false;
    }

    if (criteria.year !== 'all' && item.year !== criteria.year) {
      return false;
    }

    if (normalizedQuery.length > 0) {
      const searchableText = [
        item.title,
        item.subtitle,
        item.organization,
        item.summary,
        item.venueOrRegion || '',
        ...item.roles,
        ...item.tasks,
        ...item.achievements,
      ]
        .join(' ')
        .toLowerCase();

      if (!searchableText.includes(normalizedQuery)) {
        return false;
      }
    }

    return true;
  });

  return [...filtered].sort((a, b) => {
    if (criteria.sortBy === 'oldest') {
      if (a.year !== b.year) return a.year - b.year;
      return a.title.localeCompare(b.title, 'ko');
    }

    if (criteria.sortBy === 'title') {
      return a.title.localeCompare(b.title, 'ko');
    }

    if (criteria.sortBy === 'featured') {
      const aFeat = a.featured ? 1 : 0;
      const bFeat = b.featured ? 1 : 0;
      if (bFeat !== aFeat) return bFeat - aFeat;
      return b.year - a.year;
    }

    // Default: 'newest'
    if (b.year !== a.year) return b.year - a.year;
    return 0;
  });
}

export function computePortfolioStats(items: PortfolioItem[]): PortfolioStats {
  const careerCount = items.filter((i) => i.category === 'career').length;
  const activityCount = items.filter((i) => i.category === 'activity').length;

  const yearsSet = new Set<number>();
  const roleMap = new Map<string, { count: number; categories: Set<'career' | 'activity'> }>();

  for (const item of items) {
    yearsSet.add(item.year);
    for (const role of item.roles) {
      const existing = roleMap.get(role) || { count: 0, categories: new Set() };
      existing.count += 1;
      existing.categories.add(item.category);
      roleMap.set(role, existing);
    }
  }

  const yearsCovered = Array.from(yearsSet).sort((a, b) => b - a);
  const roleCounts = Array.from(roleMap.entries())
    .map(([role, info]) => {
      const cats = Array.from(info.categories);
      const category: 'career' | 'activity' | 'both' =
        cats.length > 1 ? 'both' : cats[0] || 'career';
      return {
        role,
        count: info.count,
        category,
      };
    })
    .sort((a, b) => b.count - a.count || a.role.localeCompare(b.role, 'ko'));

  return {
    totalCount: items.length,
    careerCount,
    activityCount,
    uniqueRolesCount: roleCounts.length,
    yearsCovered,
    roleCounts,
  };
}

export function groupItemsByYear(items: PortfolioItem[]): Array<{ year: number; items: PortfolioItem[] }> {
  const map = new Map<number, PortfolioItem[]>();
  for (const item of items) {
    const group = map.get(item.year) || [];
    group.push(item);
    map.set(item.year, group);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, groupItems]) => ({ year, items: groupItems }));
}

export function extractPlainTextFromNotionProp(prop: unknown): string {
  if (!Array.isArray(prop)) return '';
  return prop
    .map((segment) => (Array.isArray(segment) && typeof segment[0] === 'string' ? segment[0] : ''))
    .join('')
    .trim();
}
