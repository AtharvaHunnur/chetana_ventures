import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  HelpCircle, 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Info 
} from 'lucide-react';
import { PACKAGES, PACKAGE_DISCLAIMER } from '../data/packages.js';

export default function Packages() {
  const [activeTab, setActiveTab] = useState('premium');
  const [calcArea, setCalcArea] = useState(2500);
  const [calcTier, setCalcTier] = useState('premium');

  const selectedTierData = PACKAGES.find(p => p.id === calcTier) || PACKAGES[1];
  const estimatedTotal = calcArea * selectedTierData.pricePerSqFt;

  return (
    <div className="w-full bg-[#F8F6F0] pt-24 min-h-screen">
      
      {/* Banner */}
      <section className="bg-[#0D0E11] text-white py-16 md:py-24 border-b border-[#C89D56]/30 relative overflow-hidden w-full min-w-full">
        <div className="absolute inset-0 z-0 opacity-20 w-full min-w-full h-full min-h-full overflow-hidden">
          <img
            src="/assets/projects/project_3.webp"
            alt="Chethana Ventures Packages"
            referrerPolicy="no-referrer"
            className="w-full min-w-full h-full min-h-full max-w-none object-cover object-center"
            style={{ width: '100%', minWidth: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#C89D56]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#DFBC7E]">
                TRANSPARENT PRICING &amp; SCOPE
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Construction Packages Engineered for Quality.
            </h1>
            <p className="text-sm sm:text-base text-[#F8F6F0]/80 leading-relaxed font-light">
              Clear specifications, branded material allocations, and uncompromised structural integrity across four refined tiers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Packages Grid */}
      <section className="py-20 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className={`bg-white border flex flex-col justify-between transition-all scroll-mt-32 ${
                pkg.isPopular
                  ? 'border-[#0D0E11] shadow-2xl relative lg:-translate-y-2'
                  : 'border-[#0D0E11]/15 hover:border-[#C89D56]'
              }`}
            >
              {pkg.isPopular && (
                <div className="bg-[#0D0E11] text-[#DFBC7E] text-[10px] font-mono uppercase tracking-widest text-center py-1 font-semibold">
                  {pkg.badge}
                </div>
              )}

              <div className="p-6 space-y-5">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#C89D56] font-semibold block">
                    {pkg.badge}
                  </span>
                  <h2 className="font-serif text-xl font-bold text-[#0D0E11] mt-0.5">
                    {pkg.name}
                  </h2>
                  <p className="text-xs text-[#4F535B] mt-1">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="border-y border-[#0D0E11]/10 py-3 bg-[#F8F6F0]/50 px-3">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-bold text-[#0D0E11]">
                      {pkg.priceDisplay}
                    </span>
                    <span className="text-xs text-[#4F535B] font-mono">
                      / sq.ft
                    </span>
                  </div>
                  <span className="text-[10px] text-[#4F535B]/80 block mt-1">
                    *Sample demonstration rate
                  </span>
                </div>

                {/* Ideal For */}
                <div className="text-xs text-[#4F535B] leading-relaxed">
                  <strong className="text-[#0D0E11] block mb-1">Recommended For:</strong>
                  {pkg.idealFor}
                </div>

                {/* Inclusions */}
                <div className="space-y-2 pt-2 border-t border-[#0D0E11]/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D0E11] block">
                    Key Deliverables:
                  </span>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#0D0E11]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D56] shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight text-[#4F535B]">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <Link
                  to={`/get-quote?package=${pkg.id}`}
                  className={`block w-full text-center py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    pkg.isPopular
                      ? 'bg-[#0D0E11] hover:bg-[#C89D56] hover:text-[#0D0E11] text-white shadow-md'
                      : 'border border-[#0D0E11] text-[#0D0E11] hover:bg-[#0D0E11] hover:text-white'
                  }`}
                >
                  Select &amp; Estimate Cost
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Disclaimer Box */}
        <div className="mt-10 p-5 bg-[#EFECE4] border border-[#0D0E11]/10 text-xs text-[#4F535B] leading-relaxed flex items-start gap-3">
          <Info className="w-4 h-4 text-[#C89D56] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#0D0E11] font-semibold">Important Notice: </strong>
            {PACKAGE_DISCLAIMER}
          </div>
        </div>

      </section>

      {/* ========================================================
          INTERACTIVE BUILT-UP AREA COST ESTIMATOR
          ======================================================== */}
      <section className="py-16 bg-[#EFECE4] border-y border-[#0D0E11]/10">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <div className="max-w-5xl mx-auto bg-white border border-[#0D0E11]/10 shadow-xl overflow-hidden">
            
            <div className="bg-[#0D0E11] text-white p-6 md:p-8 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#DFBC7E] font-mono block">
                  INTERACTIVE ESTIMATOR
                </span>
                <h3 className="font-serif text-2xl font-bold">
                  Quick Construction Budget Calculator
                </h3>
              </div>
              <Calculator className="w-8 h-8 text-[#DFBC7E] hidden sm:block" />
            </div>

            <div className="p-6 md:p-8 space-y-8">
              
              {/* Slider / Input */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0D0E11]">
                    Estimated Built-Up Area (Square Feet):
                  </label>
                  <div className="flex items-center gap-1 font-mono font-bold text-lg text-[#0D0E11]">
                    <span>{calcArea.toLocaleString()}</span>
                    <span className="text-xs text-[#4F535B]">sq.ft</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="1000"
                  max="12000"
                  step="100"
                  value={calcArea}
                  onChange={(e) => setCalcArea(Number(e.target.value))}
                  className="w-full h-2 bg-[#EFECE4] accent-[#0D0E11] cursor-pointer"
                />

                <div className="flex justify-between text-[11px] text-[#4F535B] font-mono">
                  <span>1,000 sq.ft (Duplex)</span>
                  <span>4,000 sq.ft (Villa)</span>
                  <span>8,000 sq.ft (Mansion)</span>
                  <span>12,000 sq.ft+</span>
                </div>
              </div>

              {/* Package selector for calculator */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0D0E11] block">
                  Select Architectural Package Tier:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {PACKAGES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setCalcTier(p.id)}
                      className={`p-3 text-left border transition-all cursor-pointer ${
                        calcTier === p.id
                          ? 'border-[#0D0E11] bg-[#0D0E11] text-white shadow-sm'
                          : 'border-[#0D0E11]/15 bg-white text-[#0D0E11] hover:border-[#C89D56]'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-mono block opacity-80">
                        {p.priceDisplay}/sq.ft
                      </span>
                      <span className="font-serif text-xs font-bold block mt-1">
                        {p.name.split(' ')[0]} {p.name.split(' ')[1]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculation Summary Result */}
              <div className="bg-[#F8F6F0] p-6 border border-[#0D0E11]/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C89D56] font-semibold block">
                    Estimated Baseline Investment
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0D0E11] mt-1">
                    ₹{(estimatedTotal / 100000).toFixed(2)} Lakhs
                  </div>
                  <span className="text-xs text-[#4F535B] block mt-1">
                    (Approx. ₹{estimatedTotal.toLocaleString()} for {calcArea.toLocaleString()} sq.ft at {selectedTierData.priceDisplay}/sq.ft)
                  </span>
                </div>

                <Link
                  to={`/get-quote?area=${calcArea}&package=${calcTier}`}
                  className="px-6 py-3.5 bg-[#0D0E11] hover:bg-[#C89D56] hover:text-[#0D0E11] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2 shadow-md"
                >
                  <span>Request Formal Bill of Quantities</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFBC7E]" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          COMPREHENSIVE SPECIFICATION COMPARISON MATRIX TABLE
          ======================================================== */}
      <section className="py-20 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        <div className="max-w-2xl mb-10 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#C89D56] block">
            DETAILED TECHNICAL MATRIX
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E11] font-bold">
            Side-by-Side Material &amp; Engineering Comparison
          </h2>
          <p className="text-xs text-[#4F535B]">
            Examine the exact material grades, brands, and architectural inclusions across each tier.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto bg-white border border-[#0D0E11]/15 shadow-sm">
          <table className="w-full text-left text-xs text-[#4F535B] border-collapse">
            <thead>
              <tr className="bg-[#0D0E11] text-white border-b border-[#0D0E11]/20">
                <th className="p-4 font-serif font-bold text-sm w-1/5 min-w-[180px]">
                  Material / Scope
                </th>
                {PACKAGES.map((p) => (
                  <th key={p.id} className="p-4 font-serif font-bold text-sm min-w-[220px]">
                    <div>{p.name}</div>
                    <div className="text-[11px] font-mono text-[#DFBC7E] font-normal">{p.priceDisplay} / sq.ft</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0D0E11]/10">
              
              {/* Structure */}
              <tr className="hover:bg-[#F8F6F0]/50">
                <td className="p-4 font-semibold text-[#0D0E11] bg-[#EFECE4]/30">
                  RCC &amp; Superstructure
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.structure}
                  </td>
                ))}
              </tr>

              {/* Flooring */}
              <tr className="hover:bg-[#F8F6F0]/50">
                <td className="p-4 font-semibold text-[#0D0E11] bg-[#EFECE4]/30">
                  Flooring &amp; Staircases
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.flooring}
                  </td>
                ))}
              </tr>

              {/* Doors & Windows */}
              <tr className="hover:bg-[#F8F6F0]/50">
                <td className="p-4 font-semibold text-[#0D0E11] bg-[#EFECE4]/30">
                  Doors &amp; Windows
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.doorsWindows}
                  </td>
                ))}
              </tr>

              {/* Electrical */}
              <tr className="hover:bg-[#F8F6F0]/50">
                <td className="p-4 font-semibold text-[#0D0E11] bg-[#EFECE4]/30">
                  Electrical &amp; Smart Conduits
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.electrical}
                  </td>
                ))}
              </tr>

              {/* Plumbing & Sanitary */}
              <tr className="hover:bg-[#F8F6F0]/50">
                <td className="p-4 font-semibold text-[#0D0E11] bg-[#EFECE4]/30">
                  Plumbing &amp; Sanitaryware
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.plumbingSanitary}
                  </td>
                ))}
              </tr>

              {/* Kitchen */}
              <tr className="hover:bg-[#F8F6F0]/50">
                <td className="p-4 font-semibold text-[#0D0E11] bg-[#EFECE4]/30">
                  Kitchen Counter &amp; Dado
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.kitchen}
                  </td>
                ))}
              </tr>

              {/* Painting */}
              <tr className="hover:bg-[#F8F6F0]/50">
                <td className="p-4 font-semibold text-[#0D0E11] bg-[#EFECE4]/30">
                  Internal &amp; External Painting
                </td>
                {PACKAGES.map((p) => (
                  <td key={p.id} className="p-4 leading-relaxed">
                    {p.specs.painting}
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

      </section>

    </div>
  );
}
