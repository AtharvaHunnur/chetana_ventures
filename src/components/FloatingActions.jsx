import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/company.js';

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 bg-[#14151A] hover:bg-[#C89D56] text-[#C89D56] hover:text-[#0D0E11] flex items-center justify-center shadow-2xl border border-[#C89D56]/30 transition-all transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Quick Connect */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto flex items-center gap-3 px-4 py-3 bg-[#0D0E11] hover:bg-[#14151A] text-white shadow-2xl border border-[#C89D56]/40 transition-all transform hover:-translate-y-1 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-md">
          <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
        </div>
        <div className="flex flex-col text-left pr-1">
          <span className="text-[10px] uppercase tracking-wider text-[#C89D56] font-bold leading-none">
            Direct Line
          </span>
          <span className="text-xs font-semibold text-[#FAF8F5] group-hover:text-[#C89D56] transition-colors">
            WhatsApp Desk
          </span>
        </div>
      </a>
    </div>
  );
}
