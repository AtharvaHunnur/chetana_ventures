import React, { useState, useEffect } from 'react';
import { X, MapPin, Maximize2, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(project?.image);

  useEffect(() => {
    if (project?.image) {
      setSelectedImage(project.image);
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-8" onClick={onClose}>
      <div 
        className="bg-[#FFFFFF] w-full max-w-5xl max-h-[94vh] overflow-y-auto shadow-2xl border border-[#1A1B22]/15 relative text-[#1A1B22] rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#0D0E11] text-white hover:bg-[#C89D56] hover:text-[#0D0E11] flex items-center justify-center transition-colors shadow-lg cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image in Modal */}
        <div className="relative w-full bg-[#0D0E11] overflow-hidden flex items-center justify-center min-h-[300px] max-h-[550px]">
          <img
            src={selectedImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full max-h-[550px] object-contain transition-all duration-300"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          <div className="absolute bottom-4 left-4 bg-[#0D0E11]/90 backdrop-blur-md text-white px-3.5 py-1.5 text-xs font-mono tracking-wider flex items-center gap-2 border border-[#C89D56]/30">
            <span className="text-[#C89D56] font-semibold">{project.category}</span>
            <span>&middot;</span>
            <span>{project.builtUpArea}</span>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {project.gallery && project.gallery.length > 1 && (
          <div className="flex gap-2.5 p-4 bg-[#F8F6F0] border-b border-[#1A1B22]/10 overflow-x-auto">
            {project.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-16 shrink-0 overflow-hidden border-2 transition-all cursor-pointer bg-[#EFECE4] ${
                  selectedImage === img ? 'border-[#C89D56] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${project.title} ${idx + 1}`} 
                  className="w-full h-full object-cover" 
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </button>
            ))}
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="border-b border-[#1A1B22]/10 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest text-[#C89D56] font-bold">
                {project.category} Architecture &middot; Execution
              </span>
              <span className="text-xs font-mono text-[#4F535B] border border-[#1A1B22]/15 px-2.5 py-0.5 bg-[#F8F6F0]">
                {project.clientNote || 'Chethana Ventures Project'}
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-[#0D0E11] font-bold">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#4F535B] mt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89D56]" />
                {project.location}
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-[#C89D56]" />
                Built-Up: {project.builtUpArea}
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C89D56]" />
                Completed / Status: {project.completionYear || project.status}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0D0E11] mb-2">
              Architectural Concept &amp; Execution
            </h3>
            <p className="text-sm text-[#4F535B] leading-relaxed">
              {project.fullDesc || project.shortDesc}
            </p>
          </div>

          {/* Engineering Highlights */}
          {project.highlights && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0D0E11] mb-3">
                Key Engineering &amp; Architectural Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#1A1B22] bg-[#F8F6F0] p-3 border border-[#1A1B22]/5">
                    <CheckCircle2 className="w-4 h-4 text-[#C89D56] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Footer */}
          <div className="pt-4 border-t border-[#1A1B22]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#4F535B]">
              Planning a residential or commercial development? Consult with Chethana Ventures engineers.
            </p>
            <Link
              to={`/get-quote?projectRef=${encodeURIComponent(project.title)}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D0E11] hover:bg-[#DFBC7E] hover:text-[#0D0E11] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md"
            >
              <span>Enquire About This Project</span>
              <ArrowRight className="w-4 h-4 text-[#C89D56]" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
