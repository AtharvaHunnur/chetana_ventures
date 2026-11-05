import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  Building 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Residential Construction',
    location: '',
    budget: '',
    plotArea: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid contact number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.location.trim()) errs.location = 'Please state your project city or plot location';
    if (!formData.message.trim()) errs.message = 'Please share a brief note on your requirements';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-[#F8F6F0] pt-24 min-h-screen">
      
      {/* Banner */}
      <section className="bg-[#0D0E11] text-white py-16 md:py-24 border-b border-[#C89D56]/20 relative overflow-hidden w-full min-w-full">
        <div className="absolute inset-0 z-0 opacity-20 w-full min-w-full h-full min-h-full overflow-hidden">
          <img
            src="/assets/projects/project_5.webp"
            alt="Chethana Ventures Studio"
            referrerPolicy="no-referrer"
            className="w-full min-w-full h-full min-h-full max-w-none object-cover object-center"
            style={{ width: '100%', minWidth: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#C89D56]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#C89D56]">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Begin Your Architectural Journey.
            </h1>
            <p className="text-sm sm:text-base text-[#F8F6F0]/80 leading-relaxed font-light">
              Connect with our structural engineers and architectural leads for an in-depth project evaluation, preliminary cost assessment, or site inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Contact Info & Address */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#C89D56] block mb-1">
                CORPORATE HEADQUARTERS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E11] font-bold">
                Visit Our Studio &amp; Design Office
              </h2>
              <p className="text-xs text-[#4F535B] mt-2 leading-relaxed">
                Review material samples, examine structural 3D models, and discuss floor plans directly with our team in our Bengaluru office.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 text-xs text-[#1A1B22]">
              <div className="p-4 bg-white border border-[#1A1B22]/10 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C89D56] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D0E11] block font-sans">Office Address:</strong>
                  <span className="text-[#4F535B] leading-relaxed">{COMPANY_INFO.officeAddress}</span>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#1A1B22]/10 flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C89D56] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D0E11] block font-sans">Telephone Consultation:</strong>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#4F535B] hover:text-[#0D0E11]">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#1A1B22]/10 flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C89D56] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D0E11] block font-sans">Email Enquiries:</strong>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#4F535B] hover:text-[#0D0E11]">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#1A1B22]/10 flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C89D56] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D0E11] block font-sans">Office Hours:</strong>
                  <span className="text-[#4F535B]">{COMPANY_INFO.workingHours}</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Action */}
            <div className="p-6 bg-[#0D0E11] text-white border-l-4 border-[#C89D56] space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#C89D56] font-mono block">
                PREFER INSTANT CHAT?
              </span>
              <h4 className="font-serif text-lg font-bold">
                Connect Directly via WhatsApp
              </h4>
              <p className="text-xs text-[#F8F6F0]/80 leading-relaxed">
                Send us your plot dimensions, rough sketches, or project queries directly to our project coordination desk.
              </p>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="bg-[#EFECE4] border border-[#1A1B22]/15 p-6 text-center space-y-2">
              <Compass className="w-6 h-6 text-[#0D0E11] mx-auto" />
              <span className="text-xs font-bold text-[#0D0E11] block">Interactive Map Location</span>
              <p className="text-[11px] text-[#4F535B]">Koramangala 4th Block, 80 Feet Road, Bengaluru</p>
              <a
                href="https://maps.google.com/?q=Koramangala+Bengaluru"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-xs text-[#C89D56] underline underline-offset-4 hover:text-[#0D0E11]"
              >
                Open in Google Maps
              </a>
            </div>

          </div>

          {/* Right: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#1A1B22]/10 p-8 md:p-10 shadow-sm">
              
              <div className="border-b border-[#1A1B22]/10 pb-6 mb-6">
                <span className="text-xs uppercase tracking-widest text-[#C89D56] font-semibold block">
                  PROJECT ENQUIRY
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0D0E11] mt-1">
                  Send Us Your Requirements
                </h3>
                <p className="text-xs text-[#4F535B] mt-1">
                  Fill in your details below and an engineer will review your brief within 24 working hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#0D0E11]/10 text-[#0D0E11] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#0D0E11]" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#0D0E11]">
                    Thank You, {formData.fullName}.
                  </h4>
                  <p className="text-xs text-[#4F535B] max-w-md mx-auto leading-relaxed">
                    Your enquiry for <strong>{formData.projectType}</strong> at <strong>{formData.location}</strong> has been received by our technical desk. We will reach out via phone or email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        projectType: 'Residential Construction',
                        location: '',
                        budget: '',
                        plotArea: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-[#0D0E11] text-white text-xs uppercase tracking-wider font-semibold"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Anand K. Murthy"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs bg-[#F8F6F0]/40 border ${errors.fullName ? 'border-red-500' : 'border-[#1A1B22]/20'} focus:outline-none focus:border-[#0D0E11]`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98450 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs bg-[#F8F6F0]/40 border ${errors.phone ? 'border-red-500' : 'border-[#1A1B22]/20'} focus:outline-none focus:border-[#0D0E11]`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. anand@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs bg-[#F8F6F0]/40 border ${errors.email ? 'border-red-500' : 'border-[#1A1B22]/20'} focus:outline-none focus:border-[#0D0E11]`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F8F6F0]/40 border border-[#1A1B22]/20 focus:outline-none focus:border-[#0D0E11]"
                      >
                        <option value="Residential Construction">Residential Construction (Villa / Independent House)</option>
                        <option value="Commercial Construction">Commercial Construction (Office / Retail)</option>
                        <option value="Industrial Construction">Industrial Construction (Warehouse / PEB)</option>
                        <option value="Architecture & Structural Design">Architecture &amp; Structural Design</option>
                        <option value="Interior Design">Interior Design &amp; Styling</option>
                        <option value="Turnkey Solutions">Complete Turnkey Solutions</option>
                        <option value="Renovation & Remodeling">Renovation &amp; Remodeling</option>
                      </select>
                    </div>
                  </div>

                  {/* Location & Approximate Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                        Preferred Location / City *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Whitefield, Bengaluru"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs bg-[#F8F6F0]/40 border ${errors.location ? 'border-red-500' : 'border-[#1A1B22]/20'} focus:outline-none focus:border-[#0D0E11]`}
                      />
                      {errors.location && <p className="text-[11px] text-red-600 mt-1">{errors.location}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                        Approximate Budget (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹75 Lakhs - ₹1.5 Crore"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F8F6F0]/40 border border-[#1A1B22]/20 focus:outline-none focus:border-[#0D0E11]"
                      />
                    </div>
                  </div>

                  {/* Plot Area / Built-up Area */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                      Plot Area or Proposed Built-up Area (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 30x40 site (1,200 sq.ft) or 3,500 sq.ft built-up"
                      value={formData.plotArea}
                      onChange={(e) => setFormData({ ...formData, plotArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F8F6F0]/40 border border-[#1A1B22]/20 focus:outline-none focus:border-[#0D0E11]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D0E11] mb-1.5">
                      Project Notes &amp; Specific Requirements *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details regarding number of floors, timeline, architectural style, or specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#F8F6F0]/40 border ${errors.message ? 'border-red-500' : 'border-[#1A1B22]/20'} focus:outline-none focus:border-[#0D0E11]`}
                    />
                    {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#0D0E11] hover:bg-[#DFBC7E] text-white text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Processing Brief...</span>
                      ) : (
                        <>
                          <span>Submit Project Enquiry</span>
                          <Send className="w-3.5 h-3.5 text-[#C89D56]" />
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-[#4F535B]/70 text-center mt-2">
                      *By submitting, you agree to technical follow-up by Chethana Ventures engineers. Zero spam policy.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
