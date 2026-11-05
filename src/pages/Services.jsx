import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Hammer, 
  Maximize, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES } from '../data/services.js';
import { PROJECTS } from '../data/projects.js';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="w-full bg-[#F8F6F0] pt-24">
      
      {/* Header Banner */}
      <section className="bg-[#0D0E11] text-white py-16 md:py-24 border-b border-[#C89D56]/20 relative overflow-hidden w-full min-w-full">
        <div className="absolute inset-0 z-0 opacity-25 w-full min-w-full h-full min-h-full overflow-hidden">
          <img
            src="/assets/projects/project_1.webp"
            alt="Chethana Ventures Capabilities"
            referrerPolicy="no-referrer"
            className="w-full min-w-full h-full min-h-full max-w-none object-cover object-center"
            style={{ width: '100%', minWidth: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#C89D56]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#C89D56]">
                OUR CAPABILITIES
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Integrated Architectural &amp; Construction Services.
            </h1>
            <p className="text-sm sm:text-base text-[#F8F6F0]/80 leading-relaxed font-light">
              From architectural masterplanning and seismic structural design to turnkey execution and bespoke interiors, Chethana Ventures offers unified responsibility for every stage of your project.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Breakdown */}
      <section className="py-20 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 space-y-24">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 border-b border-[#1A1B22]/15 pb-20 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Image Col */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden shadow-xl border border-[#1A1B22]/10 bg-[#EFECE4] group">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-[#0D0E11]/90 backdrop-blur-md text-white px-3 py-1 text-xs font-mono">
                      0{index + 1} &middot; {service.title}
                    </div>
                  </div>
                </div>

                {/* Content Col */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#C89D56] block mb-1">
                      {service.subtitle}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E11] font-bold">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-[#4F535B] leading-relaxed">
                    {service.longDesc}
                  </p>

                  {/* Scope of Work */}
                  <div className="space-y-3">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#0D0E11]">
                      Scope of Services &amp; Inclusions:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1A1B22]">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 bg-white p-2.5 border border-[#1A1B22]/10">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D56] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Deliverables */}
                  <div className="bg-[#EFECE4] p-4 border border-[#1A1B22]/10 space-y-2">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#0D0E11] flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#C89D56]" />
                      <span>Formal Deliverables &amp; Documentation:</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#4F535B]">
                      {service.deliverables.map((del, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-[#0D0E11]"></span>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/get-quote?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D0E11] hover:bg-[#DFBC7E] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>Enquire for {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C89D56]" />
                    </Link>

                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#1A1B22]/20 text-[#0D0E11] hover:bg-[#0D0E11] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>View Sample Projects</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Turnkey Callout */}
      <section className="py-20 bg-[#1A1B22] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#C89D56] block">
            NEED A COMPREHENSIVE TURNKEY PACKAGE?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Explore Our 4 Standardized Construction Tiers.
          </h2>
          <p className="text-sm text-[#F8F6F0]/80 leading-relaxed font-light">
            Compare material specifications, steel grades, Italian stone allocations, and square-foot estimations side-by-side.
          </p>
          <div className="pt-2">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C89D56] hover:bg-[#DFBC7E] text-[#0D0E11] font-bold text-xs font-semibold uppercase tracking-widest transition-colors shadow-lg"
            >
              <span>Explore Construction Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
