import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company.js';
import { SERVICES } from '../data/services.js';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services', hasDropdown: true },
    { label: 'Our Projects', path: '/projects' },
    { label: 'Packages', path: '/packages' },
    { label: 'Contact', path: '/contact' },
  ];

  // Sleek Dark Obsidian Glass Navbar
  const navBackground = isScrolled
    ? 'bg-[#0D0E11]/95 backdrop-blur-md shadow-2xl border-b border-[#C89D56]/25 text-white'
    : isHome
    ? 'bg-gradient-to-b from-black/85 via-black/45 to-transparent text-white'
    : 'bg-[#0D0E11] border-b border-[#C89D56]/20 text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between h-22 sm:h-24 gap-8">
          
          {/* Zone 1: Visible, Large, High-Impact Brand Logo & Wordmark */}
          <Link to="/" className="flex items-center gap-3.5 shrink-0 group">
            <div className="relative p-1 rounded-sm bg-[#14151A] border border-[#C89D56]/30 group-hover:border-[#C89D56] transition-all shadow-md">
              <img
                src="/assets/aistudio/logo_dark_trimmed.png"
                alt="Chethana Ventures Logo"
                className="h-12 sm:h-14 md:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.16em] font-bold uppercase text-[#C89D56] leading-none">
                CHETHANA
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.38em] font-sans font-semibold uppercase text-white/90 mt-1">
                VENTURES
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Single-Line) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                        isActive ? 'text-[#C89D56]' : 'text-[#FAF8F5]/85 hover:text-[#C89D56]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#C89D56] transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Services Dropdown */}
                    <div
                      className={`absolute top-full -left-6 w-80 bg-[#14151A] shadow-2xl border border-[#C89D56]/30 py-3 transition-all duration-200 transform ${
                        servicesDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="px-5 py-2 border-b border-white/10 mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#C89D56]">
                          Architectural Capabilities
                        </span>
                      </div>
                      {SERVICES.slice(0, 6).map((service) => (
                        <Link
                          key={service.id}
                          to={`/services#${service.id}`}
                          className="block px-5 py-2.5 text-xs text-[#FAF8F5]/85 hover:bg-[#1C1D24] hover:text-[#C89D56] transition-colors"
                        >
                          <div className="font-semibold">{service.title}</div>
                          <div className="text-[11px] text-[#FAF8F5]/50 normal-case line-clamp-1">{service.subtitle}</div>
                        </Link>
                      ))}
                      <div className="mt-2 pt-2 border-t border-white/10 px-5">
                        <Link
                          to="/services"
                          className="text-xs font-semibold text-[#C89D56] hover:text-[#DFBC7E] flex items-center justify-between py-1"
                        >
                          <span>Explore All Practices</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`py-2 whitespace-nowrap transition-colors relative ${
                    isActive ? 'text-[#C89D56]' : 'text-[#FAF8F5]/85 hover:text-[#C89D56]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C89D56] shadow-[0_0_8px_#C89D56]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-widest uppercase text-[#0D0E11] bg-[#C89D56] hover:bg-[#DFBC7E] transition-all shadow-md hover:shadow-[#C89D56]/30 whitespace-nowrap"
            >
              <span>Free Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#0D0E11]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#C89D56] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0E11] border-b border-[#C89D56]/30 px-6 py-8 text-white shadow-2xl">
          <div className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1 text-base font-serif font-bold ${
                    location.pathname === item.path ? 'text-[#C89D56]' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-4 mt-2 border-l border-[#C89D56]/40 flex flex-col gap-2 text-xs text-white/60">
                    {SERVICES.slice(0, 4).map((s) => (
                      <Link
                        key={s.id}
                        to={`/services#${s.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#C89D56] py-0.5"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-5 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/get-quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 bg-[#C89D56] text-[#0D0E11] text-xs font-bold uppercase tracking-widest hover:bg-[#DFBC7E] transition-colors"
              >
                Get a Free Consultation
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#C89D56] border border-[#C89D56]/30"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89D56]" />
                <span>Call Directly: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
