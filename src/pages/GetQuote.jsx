import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Calculator, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  Home, 
  Briefcase, 
  Palette, 
  RefreshCw 
} from 'lucide-react';
import { PACKAGES } from '../data/packages.js';

export default function GetQuote() {
  const [searchParams] = useSearchParams();
  
  // URL params prefill
  const prefillArea = Number(searchParams.get('area')) || 2400;
  const prefillPackage = searchParams.get('package') || 'premium';
  const prefillService = searchParams.get('service') || 'Residential Villa';
  const prefillProjectRef = searchParams.get('projectRef') || '';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: prefillService,
    location: '',
    area: prefillArea,
    packageTier: prefillPackage,
    fullName: '',
    phone: '',
    email: '',
    notes: prefillProjectRef ? `Inquiring about similar specifications as: ${prefillProjectRef}` : '',
    timeline: 'Within 3 months'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const selectedTier = PACKAGES.find(p => p.id === formData.packageTier) || PACKAGES[1];
  const calculatedEstimate = formData.area * selectedTier.pricePerSqFt;

  const projectTypes = [
    { id: 'Residential Villa', label: 'Residential Villa / Bungalow', icon: Home, desc: 'Individual luxury home or triplex villa' },
    { id: 'Commercial Complex', label: 'Commercial Building / Office', icon: Briefcase, desc: 'Corporate floorplate or retail showroom' },
    { id: 'Industrial Shed', label: 'Industrial Warehouse / PEB', icon: Building2, desc: 'High-clearance warehouse or industrial facility' },
    { id: 'Turnkey Interiors', label: 'Luxury Interior Design', icon: Palette, desc: 'Full-home or commercial interior joinery' },
    { id: 'Renovation', label: 'Structural Renovation', icon: RefreshCw, desc: 'Retrofitting and space transformation' }
  ];

  const handleNextStep = () => {
    const errs = {};
    if (step === 1 && !formData.category) {
      errs.category = 'Please select a project category';
    } else if (step === 2) {
      if (!formData.location.trim()) errs.location = 'Please state project city or site location';
      if (!formData.area || formData.area < 500) errs.area = 'Please enter a realistic area (minimum 500 sq.ft)';
    } else if (step === 3) {
      if (!formData.packageTier) errs.packageTier = 'Please select a package tier';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStep(prev => prev + 1);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name';
    if (!formData.phone.trim()) errs.phone = 'Please provide contact phone';
    if (!formData.email.trim()) errs.email = 'Please provide contact email';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#F8F6F0] pt-24 min-h-screen">
      
      {/* Header */}
      <section className="bg-[#0D0E11] text-white py-12 md:py-16 border-b border-[#C89D56]/30 text-center w-full min-w-full">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#DFBC7E] block">
            PROJECT COST ESTIMATOR &amp; CONSULTATION
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">
            Get a Tailored Construction Quote
          </h1>
          <p className="text-xs sm:text-sm text-[#F8F6F0]/80 max-w-xl mx-auto">
            Calculate preliminary baseline costs and receive a formal architectural bill of quantities from Chethana Ventures.
          </p>
        </div>
      </section>

      {/* Stepper Wizard Container */}
      <section className="py-12 md:py-20 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-5xl mx-auto">
        
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-xs font-mono font-medium text-[#4F535B] mb-2">
            <span className={step >= 1 ? 'text-[#0D0E11] font-bold' : ''}>01. Project Type</span>
            <span className={step >= 2 ? 'text-[#0D0E11] font-bold' : ''}>02. Area &amp; Location</span>
            <span className={step >= 3 ? 'text-[#0D0E11] font-bold' : ''}>03. Specification Tier</span>
            <span className={step >= 4 ? 'text-[#0D0E11] font-bold' : ''}>04. Review &amp; Contact</span>
          </div>
          <div className="w-full h-1 bg-[#0D0E11]/10 overflow-hidden">
            <div
              className="h-full bg-[#C89D56] transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Wizard Form Card */}
        <div className="bg-white border border-[#0D0E11]/10 shadow-lg p-6 sm:p-10">
          
          {isSubmitted ? (
            <div className="text-center py-12 space-y-5">
              <div className="w-16 h-16 bg-[#0D0E11]/10 text-[#0D0E11] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#0D0E11]" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#0D0E11]">
                Quote Request Received
              </h3>
              <p className="text-xs text-[#4F535B] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your estimate request for a <strong>{formData.area.toLocaleString()} sq.ft {formData.category}</strong> under the <strong>{selectedTier.name}</strong> has been logged.
              </p>

              {/* Estimate Summary Box */}
              <div className="bg-[#F8F6F0] p-6 max-w-lg mx-auto border border-[#0D0E11]/10 text-left space-y-3">
                <div className="flex justify-between items-center border-b border-[#0D0E11]/10 pb-2">
                  <span className="text-xs font-semibold text-[#0D0E11]">Preliminary Baseline Budget:</span>
                  <span className="font-serif text-xl font-bold text-[#0D0E11]">
                    ₹{(calculatedEstimate / 100000).toFixed(2)} Lakhs
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#4F535B]">
                  <div><span className="text-[#0D0E11] font-medium">Location:</span> {formData.location}</div>
                  <div><span className="text-[#0D0E11] font-medium">Timeline:</span> {formData.timeline}</div>
                  <div><span className="text-[#0D0E11] font-medium">Rate:</span> {selectedTier.priceDisplay} / sq.ft</div>
                  <div><span className="text-[#0D0E11] font-medium">QC Audit:</span> 450+ Points</div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <Link
                  to="/"
                  className="px-6 py-2.5 bg-[#0D0E11] text-[#DFBC7E] text-xs uppercase tracking-wider font-semibold cursor-pointer"
                >
                  Return to Home
                </Link>
                <Link
                  to="/packages"
                  className="px-6 py-2.5 border border-[#0D0E11] text-[#0D0E11] text-xs uppercase tracking-wider font-semibold cursor-pointer"
                >
                  View Full Package Matrix
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1: CATEGORY */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C89D56] font-semibold block">
                      STEP 1 OF 4
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#0D0E11] mt-1">
                      What type of space are you planning to build?
                    </h2>
                    <p className="text-xs text-[#4F535B] mt-1">
                      Select your primary project classification to tailor the structural and material baseline.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projectTypes.map((type) => {
                      const IconComponent = type.icon;
                      const isSelected = formData.category === type.id;

                      return (
                        <div
                          key={type.id}
                          onClick={() => setFormData({ ...formData, category: type.id })}
                          className={`p-5 border cursor-pointer transition-all flex items-start gap-4 ${
                            isSelected
                              ? 'border-[#0D0E11] bg-[#F8F6F0] shadow-md ring-1 ring-[#0D0E11]'
                              : 'border-[#0D0E11]/15 hover:border-[#C89D56] bg-white'
                          }`}
                        >
                          <div className={`p-2.5 rounded-none ${isSelected ? 'bg-[#0D0E11] text-[#DFBC7E]' : 'bg-[#EFECE4] text-[#0D0E11]'}`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-serif text-sm font-bold text-[#0D0E11]">
                              {type.label}
                            </h3>
                            <p className="text-xs text-[#4F535B] mt-0.5">
                              {type.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {errors.category && <p className="text-xs text-red-600">{errors.category}</p>}

                  <div className="pt-6 border-t border-[#0D0E11]/10 flex justify-end">
                    <button
                      onClick={handleNextStep}
                      className="px-7 py-3 bg-[#0D0E11] hover:bg-[#C89D56] hover:text-[#0D0E11] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Continue to Area &amp; Location</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#DFBC7E]" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: AREA & LOCATION */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C89D56] font-semibold block">
                      STEP 2 OF 4
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#0D0E11] mt-1">
                      Where is your project, and what is the target area?
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                        Project Location / City *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Indiranagar, Bengaluru or Mysore Road"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className={`w-full p-3 text-xs bg-[#F8F6F0]/50 border ${errors.location ? 'border-red-500' : 'border-[#0D0E11]/20'} focus:outline-none focus:border-[#0D0E11]`}
                      />
                      {errors.location && <p className="text-[11px] text-red-600 mt-1">{errors.location}</p>}
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#0D0E11]">
                          Target Built-Up Area (in sq.ft) *
                        </label>
                        <span className="font-mono text-sm font-bold text-[#0D0E11]">
                          {formData.area.toLocaleString()} sq.ft
                        </span>
                      </div>
                      <input
                        type="number"
                        min="500"
                        max="50000"
                        step="100"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: Number(e.target.value) })}
                        className="w-full p-3 text-xs bg-[#F8F6F0]/50 border border-[#0D0E11]/20 focus:outline-none focus:border-[#0D0E11]"
                      />
                      {errors.area && <p className="text-[11px] text-red-600 mt-1">{errors.area}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                        Intended Project Start Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full p-3 text-xs bg-[#F8F6F0]/50 border border-[#0D0E11]/20 focus:outline-none focus:border-[#0D0E11]"
                      >
                        <option value="Immediately (Within 30 days)">Immediately (Within 30 days)</option>
                        <option value="Within 3 months">Within 3 months</option>
                        <option value="3 to 6 months">3 to 6 months</option>
                        <option value="Planning / Exploratory Phase">Planning / Exploratory Phase</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#0D0E11]/10 flex justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="px-5 py-3 border border-[#0D0E11]/20 text-[#0D0E11] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="px-7 py-3 bg-[#0D0E11] hover:bg-[#C89D56] hover:text-[#0D0E11] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Continue to Package Tiers</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#DFBC7E]" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: PACKAGE SELECTION & ESTIMATE PREVIEW */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C89D56] font-semibold block">
                      STEP 3 OF 4
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#0D0E11] mt-1">
                      Select Preferred Construction Package
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PACKAGES.map((pkg) => {
                      const isSelected = formData.packageTier === pkg.id;

                      return (
                        <div
                          key={pkg.id}
                          onClick={() => setFormData({ ...formData, packageTier: pkg.id })}
                          className={`p-4 border cursor-pointer transition-all flex flex-col justify-between ${
                            isSelected
                              ? 'border-[#0D0E11] bg-[#F8F6F0] shadow-md ring-1 ring-[#0D0E11]'
                              : 'border-[#0D0E11]/15 bg-white hover:border-[#C89D56]'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-serif font-bold text-sm text-[#0D0E11]">
                                {pkg.name}
                              </span>
                              <span className="text-xs font-mono font-bold text-[#C89D56]">
                                {pkg.priceDisplay}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#4F535B] leading-tight">
                              {pkg.tagline}
                            </p>
                          </div>
                          <div className="mt-3 pt-2 border-t border-[#0D0E11]/10 text-[10px] text-[#4F535B]">
                            Estimated: ₹{((formData.area * pkg.pricePerSqFt) / 100000).toFixed(2)} Lakhs
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Calculated Highlight */}
                  <div className="bg-[#0D0E11] text-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#DFBC7E] block">
                        Estimated Preliminary Investment
                      </span>
                      <div className="font-serif text-2xl font-bold">
                        ₹{(calculatedEstimate / 100000).toFixed(2)} Lakhs
                      </div>
                      <span className="text-[11px] text-[#F8F6F0]/75">
                        ({formData.area.toLocaleString()} sq.ft at {selectedTier.priceDisplay}/sq.ft)
                      </span>
                    </div>
                    <span className="text-xs text-[#F8F6F0]/80 italic max-w-xs text-right hidden sm:block">
                      *Subject to architectural customization and soil conditions.
                    </span>
                  </div>

                  <div className="pt-6 border-t border-[#0D0E11]/10 flex justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="px-5 py-3 border border-[#0D0E11]/20 text-[#0D0E11] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="px-7 py-3 bg-[#0D0E11] hover:bg-[#C89D56] hover:text-[#0D0E11] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Continue to Final Step</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#DFBC7E]" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & SUBMIT */}
              {step === 4 && (
                <form onSubmit={handleFinalSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C89D56] font-semibold block">
                      STEP 4 OF 4
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#0D0E11] mt-1">
                      Where Should We Send Your Detailed BOQ?
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Iyer"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full p-3 text-xs bg-[#F8F6F0]/50 border ${errors.fullName ? 'border-red-500' : 'border-[#0D0E11]/20'} focus:outline-none focus:border-[#0D0E11]`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98450 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full p-3 text-xs bg-[#F8F6F0]/50 border ${errors.phone ? 'border-red-500' : 'border-[#0D0E11]/20'} focus:outline-none focus:border-[#0D0E11]`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full p-3 text-xs bg-[#F8F6F0]/50 border ${errors.email ? 'border-red-500' : 'border-[#0D0E11]/20'} focus:outline-none focus:border-[#0D0E11]`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need basement parking, Italian marble in living room, elevator shaft..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3 text-xs bg-[#F8F6F0]/50 border border-[#0D0E11]/20 focus:outline-none focus:border-[#0D0E11]"
                    />
                  </div>

                  {/* Summary Review */}
                  <div className="bg-[#EFECE4] p-4 text-xs text-[#4F535B] space-y-1">
                    <strong className="text-[#0D0E11] block">Summary of Selection:</strong>
                    <div>{formData.category} &middot; {formData.area.toLocaleString()} sq.ft &middot; {formData.location || 'Location Pending'} &middot; {selectedTier.name}</div>
                    <div className="text-[#0D0E11] font-semibold">Estimated Baseline: ₹{(calculatedEstimate / 100000).toFixed(2)} Lakhs</div>
                  </div>

                  <div className="pt-6 border-t border-[#0D0E11]/10 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-5 py-3 border border-[#0D0E11]/20 text-[#0D0E11] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#0D0E11] hover:bg-[#C89D56] hover:text-[#0D0E11] text-white text-xs font-semibold uppercase tracking-wider shadow-md cursor-pointer"
                    >
                      Submit Quote Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          </div>
        </div>
      </section>

    </div>
  );
}
