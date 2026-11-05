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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
      <div 
        className="bg-[#FFFFFF] w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl border border-[#1A1B22]/10 relative text-[#1A1B22]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#1A1B22] text-white hover:bg-[#0D0E11] flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image in Modal */}
        <div className="relative aspect-video w-full bg-[#EFECE4] overflow-hidden">
          <img
            src={selectedImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute bottom-4 left-4 bg-[#0D0E11]/90 backdrop-blur-md text-white px-3 py-1.5 text-xs font-mono tracking-wider flex items-center gap-2">
            <span>{project.category}</span>
            <span>&middot;</span>
            <span>{project.builtUpArea}</span>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {project.gallery && project.gallery.length > 1 && (
          <div className="flex gap-2 p-4 bg-[#F8F6F0] border-b border-[#1A1B22]/10 overflow-x-auto">
            {project.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-14 shrink-0 overflow-hidden border-2 transition-all ${
                  selectedImage === img ? 'border-[#C89D56] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${project.title} ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="border-b border-[#1A1B22]/10 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest text-[#C89D56] font-semibold">
                {project.category} Architecture
              </span>
              <span className="text-xs font-mono text-[#4F535B] border border-[#1A1B22]/15 px-2 py-0.5">
                {project.clientNote || 'Demonstration Project'}
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-[#0D0E11] font-bold">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#4F535B] mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C89D56]" />
                {project.location}
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#C89D56]" />
                Built-Up: {project.builtUpArea}
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C89D56]" />
                Completed {project.completionYear}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0D0E11] mb-2">
              Architectural Concept & Execution
            </h3>
            <p className="text-sm text-[#4F535B] leading-relaxed">
              {project.fullDesc || project.shortDesc}
            </p>
          </div>

          {/* Engineering Highlights */}
          {project.highlights && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0D0E11] mb-3">
                Key Engineering & Architectural Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#1A1B22] bg-[#F8F6F0] p-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C89D56] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Footer */}
          <div className="pt-4 border-t border-[#1A1B22]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#4F535B]">
              Planning a similar development? Let our engineering team consult on your land.
            </p>
            <Link
              to={`/get-quote?projectRef=${encodeURIComponent(project.title)}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D0E11] hover:bg-[#DFBC7E] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Enquire About Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C89D56]" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
