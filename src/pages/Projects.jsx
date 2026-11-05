import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Maximize2, 
  Calendar, 
  ArrowRight, 
  SlidersHorizontal,
  LayoutGrid,
  Columns,
  Building2,
  HardHat
} from 'lucide-react';
import { PROJECTS, SITE_PHOTOS } from '../data/projects.js';
import ProjectModal from '../components/ProjectModal.jsx';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'masonry'

  const categories = ['All', 'Residential', 'Commercial', 'Elevations'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      let matchesCategory = false;
      if (selectedCategory === 'All') {
        matchesCategory = true;
      } else {
        matchesCategory = p.category.toLowerCase() === selectedCategory.toLowerCase();
      }

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.shortDesc.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.status && p.status.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-[#F8F6F0] pt-24 min-h-screen">
      
      {/* Banner */}
      <section className="bg-[#0D0E11] text-white py-16 md:py-20 border-b border-[#C89D56]/30 relative overflow-hidden w-full min-w-full">
        <div className="absolute inset-0 z-0 opacity-20 w-full min-w-full h-full min-h-full overflow-hidden">
          <img
            src="/assets/projects/project_1.webp"
            alt="Chethana Ventures Portfolio"
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
                ARCHITECTURAL &amp; CIVIL PORTFOLIO
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Spaces That Speak for Themselves.
            </h1>
            <p className="text-sm sm:text-base text-[#F8F6F0]/80 leading-relaxed font-light">
              Explore our completed residential villas, active construction sites, commercial studios, and structural engineering showcases.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="bg-[#EFECE4] border-b border-[#0D0E11]/10 py-6 sticky top-20 z-30 backdrop-blur-md bg-opacity-95">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0D0E11] text-[#DFBC7E] shadow-sm font-semibold'
                      : 'bg-white/80 hover:bg-white text-[#4F535B] hover:text-[#0D0E11]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input & View Toggle */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-[#4F535B] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search projects, sites, status..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#0D0E11]/15 text-[#0D0E11] placeholder-[#4F535B]/60 focus:outline-none focus:border-[#0D0E11]"
                />
              </div>

              {/* View Toggle */}
              <div className="hidden sm:flex items-center border border-[#0D0E11]/15 bg-white">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 cursor-pointer ${viewMode === 'grid' ? 'bg-[#0D0E11] text-[#DFBC7E]' : 'text-[#4F535B] hover:text-[#0D0E11]'}`}
                  aria-label="Grid layout"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-1.5 cursor-pointer ${viewMode === 'masonry' ? 'bg-[#0D0E11] text-[#DFBC7E]' : 'text-[#4F535B] hover:text-[#0D0E11]'}`}
                  aria-label="Masonry layout"
                >
                  <Columns className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#0D0E11]/10 p-8 space-y-4">
            <p className="font-serif text-xl text-[#0D0E11]">No matching projects found.</p>
            <p className="text-xs text-[#4F535B]">Try clearing your search query or selecting a different category filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#0D0E11] text-[#DFBC7E] text-xs uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group cursor-pointer bg-white border border-[#0D0E11]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className={`relative w-full overflow-hidden bg-[#EFECE4] ${viewMode === 'masonry' ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity"></div>
                  
                  {/* Category Pill & Live Site Tag */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                    <span className="bg-[#0D0E11]/90 backdrop-blur-md text-white text-[10px] uppercase font-mono px-2.5 py-1 tracking-wider border border-[#C89D56]/30">
                      {project.category}
                    </span>
                    {project.status && (
                      <span className={`text-[10px] uppercase font-mono px-2 py-0.5 font-bold ${
                        project.status.includes('Progress') || project.status.includes('Stage')
                          ? 'bg-[#C89D56] text-[#0D0E11]'
                          : 'bg-white/90 text-[#0D0E11]'
                      }`}>
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Expand icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-[#DFBC7E]" />
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] text-[#DFBC7E] font-mono block">
                      {project.location}
                    </span>
                    <h3 className="font-serif text-xl font-bold group-hover:text-[#F8F6F0] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#4F535B] line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#4F535B] bg-[#F8F6F0] p-3 border border-[#0D0E11]/5">
                    <div>
                      <span className="text-[#0D0E11] font-semibold block">BUILT AREA:</span>
                      <span>{project.builtUpArea}</span>
                    </div>
                    <div>
                      <span className="text-[#0D0E11] font-semibold block">TIMELINE:</span>
                      <span>{project.completionYear || project.status}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#0D0E11]/10 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-[#4F535B] uppercase font-mono">
                      {project.clientNote}
                    </span>
                    <span className="text-[#0D0E11] font-semibold flex items-center gap-1 group-hover:text-[#C89D56] transition-colors">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}

    </div>
  );
}
