import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight, 
  MessageCircle, 
  Compass, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company.js';
import { SERVICES } from '../data/services.js';

export default function Footer() {
  return (
    <footer className="bg-[#0D0E11] text-[#FAF8F5] pt-20 pb-12 border-t border-[#C89D56]/20 w-full min-w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="p-1.5 rounded-sm bg-[#14151A] border border-[#C89D56]/40 shadow-xl group-hover:border-[#C89D56] transition-all">
                <img
                  src="/assets/aistudio/logo_dark_trimmed.png"
                  alt="Chethana Ventures"
                  className="h-16 w-16 sm:h-18 sm:w-18 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.16em] font-bold uppercase text-[#C89D56] leading-tight">
                  CHETHANA
                </span>
                <span className="text-[11px] tracking-[0.38em] font-sans font-semibold uppercase text-white/90 mt-0.5">
                  VENTURES
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed font-sans max-w-sm">
              Chethana Ventures is a premier contemporary architecture, structural engineering, and turnkey construction practice. We create monolithic, enduring residential and commercial spaces defined by uncompromising quality.
            </p>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-[#C89D56] font-semibold mb-1">
                Our Creed
              </p>
              <p className="font-serif italic text-lg text-white">
                "{COMPANY_INFO.tagline}"
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white/15 bg-[#14151A] flex items-center justify-center text-[#FAF8F5]/80 hover:text-[#C89D56] hover:border-[#C89D56] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white/15 bg-[#14151A] flex items-center justify-center text-[#FAF8F5]/80 hover:text-[#C89D56] hover:border-[#C89D56] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white/15 bg-[#14151A] flex items-center justify-center text-[#FAF8F5]/80 hover:text-[#C89D56] hover:border-[#C89D56] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white/15 bg-[#14151A] flex items-center justify-center text-[#FAF8F5]/80 hover:text-[#C89D56] hover:border-[#C89D56] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold text-[#C89D56] uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-[#FAF8F5]/70">
              <li>
                <Link to="/" className="hover:text-[#C89D56] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C89D56] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#C89D56] transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#C89D56] transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-[#C89D56] transition-colors">Packages</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#C89D56] transition-colors">Executive Team</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C89D56] transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/get-quote" className="text-[#C89D56] font-bold hover:text-white transition-colors">
                  Instant Quote &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-[#C89D56] uppercase tracking-widest mb-6">
              Capabilities
            </h4>
            <ul className="space-y-3 text-xs text-[#FAF8F5]/70">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    className="hover:text-[#C89D56] transition-colors block leading-relaxed"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-sm font-bold text-[#C89D56] uppercase tracking-widest">
                Direct Contact
              </h4>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#C89D56] border border-[#C89D56]/30 px-1.5 py-0.5">
                Official
              </span>
            </div>

            <div className="space-y-3 text-xs text-[#FAF8F5]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C89D56] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.officeAddress}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C89D56] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#C89D56] transition-colors font-mono font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C89D56] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#C89D56] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C89D56] shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-[#14151A] hover:bg-[#C89D56] hover:text-[#0D0E11] text-white text-xs font-bold tracking-wider uppercase transition-all border border-[#C89D56]/30 shadow-md group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-[#0D0E11] transition-colors" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Google Maps link */}
            <div className="pt-1">
              <a
                href="https://maps.google.com/?q=Koramangala+Bengaluru"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-[#FAF8F5]/60 hover:text-[#C89D56] flex items-center gap-1.5 transition-colors underline underline-offset-4"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Locate on Google Maps</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#FAF8F5]/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Chethana Ventures. All rights reserved. Crafting Spaces. Building Trust.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[#C89D56] transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-[#C89D56] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
