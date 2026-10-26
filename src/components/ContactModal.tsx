import React, { useState } from 'react';
import { X, Copy, Check, Mail, Phone, ExternalLink, Send } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';
import { BlueFolderIcon, ScriptStickerBadge } from './BehanceMotifs';

interface InquiryMessage {
  id: string;
  senderName: string;
  organization: string;
  contact: string;
  message: string;
  createdAt: string;
}

interface ContactModalProps {
  isOpen: boolean;
  profile: ProfileData;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, profile, onClose }) => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [senderName, setSenderName] = useState('');
  const [organization, setOrganization] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [inquiries, setInquiries] = useState<InquiryMessage[]>([]);

  if (!isOpen) return null;

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !contact.trim() || !message.trim()) {
      setFormError('성함, 연락처(이메일 또는 전화번호), 문의 내용을 모두 입력해 주세요.');
      return;
    }

    setFormError(null);
    const newEntry: InquiryMessage = {
      id: `inq-${Date.now()}`,
      senderName: senderName.trim(),
      organization: organization.trim() || '개인/일반 문의',
      contact: contact.trim(),
      message: message.trim(),
      createdAt: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setInquiries((prev) => [newEntry, ...prev]);
    setSenderName('');
    setOrganization('');
    setContact('');
    setMessage('');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2D1614]/75 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#F3EDE2] border-3 border-[#2D1614] rounded-[28px] max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-[12px_12px_0px_#2D1614]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#FAF6EE] border-b-2 border-[#2D1614]">
          <div className="flex items-center gap-3">
            <BlueFolderIcon className="w-7 h-6 shrink-0" />
            <div>
              <h2 id="contact-modal-title" className="text-lg font-black text-[#2D1614]">
                연락처 및 포트폴리오 요약 ({profile.nameKo})
              </h2>
              <p className="text-xs font-medium text-[#6E5650]">
                문화예술 기획 · 공연 조연출 · 공공 지원사업 및 축제 기획 협업 문의
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="연락처 창 닫기"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold text-[#F3EDE2] bg-[#2D1614] rounded-full hover:bg-[#4A86B5] transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
            <span>닫기</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Direct Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-4 flex items-center justify-between gap-3 shadow-[4px_4px_0px_#2D1614]">
              <div className="flex items-center gap-3 min-w-0">
                <Mail className="w-4 h-4 text-[#4A86B5] shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#6E5650]">이메일 (E-Mail)</p>
                  <p className="text-sm font-mono-tabular font-black text-[#2D1614] truncate">
                    {profile.email}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(profile.email, 'email')}
                aria-label="이메일 주소 복사"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-[#2D1614] bg-[#F3EDE2] hover:bg-[#E5DEC9] border border-[#2D1614]/30 rounded-lg transition-colors shrink-0 cursor-pointer"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>복사</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-4 flex items-center justify-between gap-3 shadow-[4px_4px_0px_#2D1614]">
              <div className="flex items-center gap-3 min-w-0">
                <Phone className="w-4 h-4 text-[#4A86B5] shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#6E5650]">연락처 (H.P)</p>
                  <p className="text-sm font-mono-tabular font-black text-[#2D1614] truncate">
                    {profile.phone}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(profile.phone, 'phone')}
                aria-label="전화번호 복사"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-[#2D1614] bg-[#F3EDE2] hover:bg-[#E5DEC9] border border-[#2D1614]/30 rounded-lg transition-colors shrink-0 cursor-pointer"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>복사</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Notion Original Link */}
          <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-4 flex items-center justify-between gap-4 shadow-[4px_4px_0px_#2D1614]">
            <div>
              <p className="text-xs font-bold text-[#4A86B5]">원본 데이터베이스</p>
              <p className="text-sm font-black text-[#2D1614]">
                Gaeun Park&apos;s Notion Portfolio Database
              </p>
            </div>
            <a
              href={profile.notionPublicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#F3EDE2] bg-[#2D1614] hover:bg-[#4A86B5] rounded-full transition-colors shrink-0"
            >
              <span>Notion 열기</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Collaboration / Interview Memo Form */}
          <form
            onSubmit={handleSubmitInquiry}
            noValidate
            className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-5 space-y-4 shadow-[4px_4px_0px_#2D1614]"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-[#2D1614]">
                채용 · 공연기획 협업 메시지 남기기
              </h3>
              <ScriptStickerBadge text="contact me" rotateClass="rotate-2" className="scale-75 origin-right" />
            </div>

            {formError && (
              <p
                role="alert"
                className="text-xs font-bold text-red-800 bg-red-100 border border-red-300 px-3 py-2 rounded-lg"
              >
                {formError}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="inq-name" className="block text-xs font-bold text-[#4A3531] mb-1">
                  담당자 성함 *
                </label>
                <input
                  id="inq-name"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="홍길동"
                  className="w-full px-3 py-2 text-xs bg-[#F3EDE2] border-2 border-[#2D1614]/30 rounded-xl text-[#2D1614] focus:outline-none focus:border-[#2D1614]"
                />
              </div>

              <div>
                <label htmlFor="inq-org" className="block text-xs font-bold text-[#4A3531] mb-1">
                  소속 기관 / 단체명
                </label>
                <input
                  id="inq-org"
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="문화재단 / 공연기획사"
                  className="w-full px-3 py-2 text-xs bg-[#F3EDE2] border-2 border-[#2D1614]/30 rounded-xl text-[#2D1614] focus:outline-none focus:border-[#2D1614]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="inq-contact" className="block text-xs font-bold text-[#4A3531] mb-1">
                회신 받을 연락처 (이메일 또는 전화번호) *
              </label>
              <input
                id="inq-contact"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="contact@organization.kr / 010-0000-0000"
                className="w-full px-3 py-2 text-xs bg-[#F3EDE2] border-2 border-[#2D1614]/30 rounded-xl text-[#2D1614] focus:outline-none focus:border-[#2D1614]"
              />
            </div>

            <div>
              <label htmlFor="inq-message" className="block text-xs font-bold text-[#4A3531] mb-1">
                제안 및 문의 내용 *
              </label>
              <textarea
                id="inq-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="공연기획 채용, 프로젝트 조연출 협업, 인터뷰 일정 등 문의하실 내용을 입력해 주세요."
                className="w-full px-3 py-2 text-xs bg-[#F3EDE2] border-2 border-[#2D1614]/30 rounded-xl text-[#2D1614] focus:outline-none focus:border-[#2D1614]"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-[#F3EDE2] bg-[#2D1614] hover:bg-[#4A86B5] rounded-full transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>메시지 등록</span>
              </button>
            </div>
          </form>

          {/* Submitted Inquiries List */}
          {inquiries.length > 0 && (
            <div className="bg-[#FAF6EE] border-2 border-[#2D1614] rounded-2xl p-4 space-y-3">
              <h4 className="text-xs font-black text-[#2D1614]">
                접수된 협업 메시지 ({inquiries.length}건)
              </h4>
              <div className="divide-y divide-[#2D1614]/15">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="py-2.5 first:pt-0 last:pb-0 text-xs">
                    <div className="flex items-center justify-between text-[#6E5650] mb-1">
                      <span className="font-bold text-[#2D1614]">
                        {inq.senderName} ({inq.organization})
                      </span>
                      <span className="font-mono-tabular">{inq.createdAt}</span>
                    </div>
                    <p className="text-[#3E2723]">{inq.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
