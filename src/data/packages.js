export const PACKAGES = [
  {
    id: "basic",
    name: "Basic Architectural Package",
    tagline: "Essential Structural Integrity & Quality Finishes",
    pricePerSqFt: 1850,
    priceDisplay: "₹1,850",
    unit: "per sq.ft built-up area",
    isPopular: false,
    badge: "Core Engineering",
    idealFor: "Quality-conscious homeowners seeking durable construction with standard branded finishes.",
    specs: {
      structure: "Seismic Zone II compliant RCC framed structure using Fe550 TMT Steel (Kamdhenu / Meenakshi) and 43/53 Grade OPC/PPC Cement (Ultratech / ACC). Standard red brick / 6\" solid concrete block masonry.",
      flooring: "Vitrified tiles (2x2 ft / 4x2 ft) up to ₹65/sq.ft in living, dining, and bedrooms. Anti-skid ceramic tiles in bathrooms and balconies.",
      doorsWindows: "Main door in engineered teak frame with polished veneer shutter. Internal doors with salwood frames and flush shutters. Powder-coated 2-track aluminum sliding windows.",
      electrical: "Fire-retardant concealed copper wiring (Anchor / Finolex). Modular switches (Anchor Roma / GM). Provision for inverter backup, TV, and telephone points.",
      plumbingSanitary: "CPVC & PVC piping (Supreme / Astral). Branded sanitaryware and CP fittings (Cera / Parryware) up to ₹18,000 per bathroom.",
      kitchen: "20mm polished Black Galaxy granite platform with SS sink (Nirali / Franke). Wall dado tiles up to 2 ft above platform.",
      painting: "Internal: 2 coats of Asian Paints Tractor Emulsion with putty. External: 2 coats of Asian Paints Apex weather-proof exterior paint."
    },
    inclusions: [
      "Soil geotechnical testing & basic structural analysis",
      "Architectural 2D floor plans & 3D exterior elevation view",
      "Complete site supervision by qualified site engineers",
      "Standard 1,000L overhead PVC tank & 6,000L underground sump"
    ]
  },
  {
    id: "premium",
    name: "Premium Living Package",
    tagline: "Elevated Aesthetics & Superior Branded Materials",
    pricePerSqFt: 2350,
    priceDisplay: "₹2,350",
    unit: "per sq.ft built-up area",
    isPopular: true,
    badge: "Most Selected",
    idealFor: "Modern urban residences requiring high thermal comfort, large format tiles, and refined architectural accents.",
    specs: {
      structure: "Heavy-duty RCC frame using Fe550D TMT Steel (Tata Tiscon / JSW Neosteel) and Grade 53 Ultratech / Birla Super Cement. High-density wire-cut red bricks or autoclaved aerated concrete (AAC) blocks.",
      flooring: "Large format glazed vitrified tiles (4x2 ft / 4x4 ft) up to ₹110/sq.ft (Kajaria / Somany / Simpolo). Wooden-finish tiles for master bedroom.",
      doorsWindows: "Main door in solid Ghana Teak wood frame & 38mm teak wood shutter. High-grade UPVC 2.5-track sliding windows with mosquito mesh (Kommerling / Fenesta).",
      electrical: "Concealed wiring (Finolex / Havells). Premium designer modular switches (Legrand Arteor / Schneider Opale). AC points in all bedrooms and living hall.",
      plumbingSanitary: "Diverter units, wall-hung EWC with concealed flush tank (Kohler / Jaquar Artize) up to ₹32,000 per bathroom. Astral Silencio sound-insulated drain pipes.",
      kitchen: "Quartz or 20mm premium granite counter. Double-bowl SS sink with pull-out mixer faucet. Designer tile dado up to 2.5 ft.",
      painting: "Internal: 2 coats Asian Paints Royale Luxury Emulsion with birla putty. External: Asian Paints Ultima Protek with 5-year anti-fungal shield."
    },
    inclusions: [
      "Comprehensive structural & MEP 3D BIM coordination",
      "2 revisions of customized 3D photorealistic elevations",
      "Dedicated full-time site supervisor & digital weekly reporting",
      "8,000L RCC underground sump with anti-fungal waterproofing"
    ]
  },
  {
    id: "luxury",
    name: "Luxury Estate Package",
    tagline: "Uncompromised Craftsmanship & Italian Stone",
    pricePerSqFt: 2950,
    priceDisplay: "₹2,950",
    unit: "per sq.ft built-up area",
    isPopular: false,
    badge: "Architectural Signature",
    idealFor: "Discerning clients desiring imported marble, slim-profile thermal windows, and bespoke architectural detailing.",
    specs: {
      structure: "Engineered RCC with higher concrete grades (M25/M30) and Tata Tiscon Super-Ductile TMT. High-performance acoustic clay hollow blocks (Wienerberger Porotherm).",
      flooring: "Imported Italian Marble (Bottochino / Dyna / Travertine) up to ₹350/sq.ft in foyer, living, dining, and internal staircases. Engineered natural hardwood in master suite.",
      doorsWindows: "8-ft grand entrance pivot door in Burma Teak. Premium thermal-break powder-coated aluminum slim-profile or high-end Fenesta UPVC systems with double glazing.",
      electrical: "Smart home ready conduit infrastructure. Legrand Myrius / Schneider AvatarOn switches. Multi-zone automation wiring for lighting and curtain motors.",
      plumbingSanitary: "Thermostatic shower mixers, countertop basins, wall-hung rimless commodes (Grohe / Hansgrohe / Duravit) up to ₹65,000 per bathroom.",
      kitchen: "Exotic quartzite or sintered stone slab platform with Franke undermount granite sink and touchless sensor mixer tap.",
      painting: "Internal: Asian Paints Royale Aspire / PU finishes with fine acrylic skim coats. External: Silicon-based texture paint with stone veneer accents."
    },
    inclusions: [
      "Full interior architectural detailing & false ceiling plans",
      "Continuous on-site digital QC camera monitoring for owners",
      "Pressure-pump plumbing system & solar water heater piping",
      "12,000L RCC sump with crystalline waterproofing treatment"
    ]
  },
  {
    id: "ultra-luxury",
    name: "Ultra Luxury Bespoke",
    tagline: "Museum-Grade Architecture & Bespoke Engineering",
    pricePerSqFt: 3850,
    priceDisplay: "₹3,850+",
    unit: "starting rate / price on request",
    isPopular: false,
    badge: "Custom Commission",
    idealFor: "Ultra-prime bespoke mansions, private estates, and landmark residences designed with zero compromise.",
    specs: {
      structure: "Custom post-tensioned slabs for 10m+ column-free spans, exposed architectural fair-faced concrete walls, and marine-grade epoxy coated rebar where applicable.",
      flooring: "Rare book-matched Italian Statuario / Calacatta gold marble, custom terrazzo in-situ, and certified solid European Oak parquet.",
      doorsWindows: "Custom 9.5-ft motorized pivot entrances with biometrics. Reynaers / Schüco minimalist sliding glass systems with low-E acoustic laminated glass.",
      electrical: "Full KNX / Lutron architectural lighting integration, motorized shading, centralized smart distribution panel, and whole-house surge suppression.",
      plumbingSanitary: "Gessi / Villeroy & Boch / Axor Hansgrohe fixtures, freestanding designer bathtubs, steam shower enclosures, and hot-water recirculating ring loops.",
      kitchen: "Custom German Poggenpohl/Bulthaup integration ready specs, Dekton ultracompact heat-proof countertops, and sub-zero appliance layouts.",
      painting: "Custom Italian stucco veniziano, breathable lime plasters, artisanal micro-cement, and imported protective mineral coatings."
    },
    inclusions: [
      "Principal Architect site visits & daily progress governance",
      "Full turnkey MEP, acoustic design, and landscape integration",
      "10-Year Comprehensive Structural Handover Guarantee",
      "Private White-Glove project concierge & lifetime maintenance manual"
    ]
  }
];

export const PACKAGE_DISCLAIMER = "Notice: The figures above represent indicative baseline specifications for demonstration and estimation purposes. Final project costs are determined following bespoke architectural schematics, soil conditions, site topography, bespoke material selections, and specific client requirements.";
