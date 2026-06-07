"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Collections");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Card hover tilt effect
    const cards = document.querySelectorAll('.group-card');
    cards.forEach(card => {
      const el = card as HTMLElement;
      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const dx = x - xc;
        const dy = y - yc;
        el.style.transform = `perspective(1000px) rotateY(${dx / 30}deg) rotateX(${-dy / 30}deg)`;
      };

      const handleMouseLeave = () => {
        el.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
      };

      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filters = [
    "All Collections",
    "Digital Archives",
    "Limited Editions",
    "Media Licensing",
    "Institutional Assets"
  ];

  const products = [
    {
      id: "legacy-voice-pack",
      category: "Digital Archives",
      title: "Legacy Voice Pack",
      description: "The complete vocal synthesis profile of the primary orator. Certified for institutional broadcast.",
      price: "$12,500",
      label: "Limited Release",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIAS73r5oHNVG-zaIKXQYZakAEnuRIw0wQ1yprHLatV0Lc76gfjSvDsN4VcOn9taVQm6P5G9R-PV07OW32ovodRzlfc9q3EQf1uljxlAhNNKnRrfhKIWz2Wk9fcYmnfmYRQNxnkeA01YVM9Dz9cmrY38_Gc7WnGQAkUptudsh7uWe7jlOU6UTMZlDEuzpUeHDyxbJSVKXmjMw7EpQUYw0Q-PgIn-lDEAcriFRVljBVk97brCj3W2t-ayHdpkhER6_6zrcxSJn5Foc",
      href: "/marketplace/legacy-voice-pack"
    },
    {
      id: "sovereign-agbada",
      category: "Limited Editions",
      title: "Limited Edition Agbada Series",
      description: "Hand-woven ceremonial attire featuring bespoke gold-thread embroidery. Signed by the artisan.",
      price: "$4,200",
      label: "1 of 10",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb52fV9hMaQuaY4vFp7_c7lHmBV2vip38n6voAJ_Gac2e4DCViX6EbfAlV2ClMHvtkc2WbXQhXGp9bY-8e-iUdLZezwEKD-V967sftBtALIPhHABG_1RbRCc6fw76THB1AbJE_AY2o4vTI_xh-bDh-rqbcMWj87hqoGkTGSYP8RUMu6sQGU1PrCgelbQpaXLkKiBbzSILtb_LmWBay3DFyapAMcnMOwUx5jSKNkPVuN65eBvC9PezgqoP-8f59FPT5ZFUdQ9JQ4S4",
      href: "/marketplace/sovereign-agbada"
    },
    {
      id: "documentary-licensing",
      category: "Media Licensing",
      title: "Documentary Licensing Rights",
      description: "Global distribution rights for the 'Empire Rising' documentary series. High-fidelity master copies.",
      price: "Contact for Price",
      label: "Institutional",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuADoQr8aA3HuZ9QbV2N3-JtRtuCX59japQIyN-OaGvll64hERFRDyDoJz5XfbuetXLmLjoEC8VJiCwMPdQPywu4bN5ypYbO1nGSmFutRYe1LkvnFj-HBWIIgY1mqryrIEnk8yf2NEWEsgJ-RgZLaRoQw5kDGQCm_kRMfOcP-qyKLpgzNJrLmU5jQJTYjuYm0aS2XTrC9l9e7CvXnZQMr-UDGEYlPWaGQd5W3fwiJJVDVrfC9hGmixFNQfgJWilYb3fiw71Juo3Ku2Y",
      href: "#",
      isMail: true
    },
    {
      id: "signed-prints",
      category: "Limited Editions",
      title: "Signed Photographic Prints",
      description: "A set of three museum-grade prints capturing the inner sanctuary of the Bruva headquarters.",
      price: "$1,850",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwTl7VMYpFXiQoxAmhWiSF8RYetli7Sw2pIdCbDAgAl2M-RqgP0TPczoqn7dI7U1krv8Mc0AHG_S0IkJBJlVfHWSC8dMBaqy-u280RreCS149NEfxggGaTNX8aPLj50ZcMzYgSn5zhygiBA3omKhHfuEqcp5itlGg24U-1ehM82TkBmGEzDU05XV6egjrvNOAqvgLMRZbfRwvEvTdTppWKKaRVWxkwKPtQgfA8X8CRjR1CqP-gNP2YnpEd4QnRqjGO9hDtYsk_a1s",
      href: "#"
    }
  ];

  const filteredProducts = selectedFilter === "All Collections"
    ? products
    : products.filter(p => p.category === selectedFilter);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        body {
            background-color: #121413;
            color: #e2e3e1;
            overflow-x: hidden;
            font-family: 'Inter', sans-serif;
        }
        .font-serif {
            font-family: 'Libre Caslon Text', serif;
        }
        .glass-panel {
            background: rgba(18, 20, 19, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(233, 195, 73, 0.1);
        }
        .hero-gradient {
            background: linear-gradient(to top, #121413 0%, rgba(18, 20, 19, 0.4) 50%, rgba(18, 20, 19, 0) 100%);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .group-card {
            transition: all 0.5s ease;
        }
      `}} />

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-end pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_h1mPW9svPqfwsOX0sYgbICAdnzIORdrJJ8Yg_jdm1zyoGGgFY3oUMahNIX9O38o55HNw9Mw9bGlS41T-cBIFz9Hr90Fe4G_6W7AUeGN4NkdaSOe7WJMXHcwlyGMBTPyYcIG1HNEI5eYdD8BGMfu78_RPkkVn9PksglrjMEUfCpjZn1rZ15fL2I9BkaxFhBuKuoT31FPqOYJln76DwOfdfpZgeA0Fd4R0QoneGa1Y_K2rJas2_kdvHk5iT3yusp2H7wdpHCY7n9k"/>
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="max-w-2xl">
              <span className="text-secondary text-label-md font-label-md tracking-widest mb-4 block">EXCLUSIVELY CURATED</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight uppercase font-serif">The Sovereign Collection</h1>
              <p className="text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                Access an elite archive of cultural artifacts and institutional assets. Curated with precision for the discerning global citizen.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-secondary text-on-secondary px-8 py-4 text-label-md font-label-md font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer">
                  Explore Archive <span className="material-symbols-outlined flex items-center">arrow_forward</span>
                </button>
                <button className="glass-panel text-on-surface px-8 py-4 text-label-md font-label-md font-bold uppercase tracking-wider border border-secondary/20 cursor-pointer">
                  Request Dossier
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Navigation & Filters */}
        <section className="bg-surface-container-low py-8 border-b border-on-surface/5 sticky top-[73px] z-40">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex gap-8 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`text-label-md font-label-md whitespace-nowrap cursor-pointer transition-colors ${
                    selectedFilter === filter
                      ? "border-b-2 border-secondary text-secondary pb-1"
                      : "text-on-surface-variant hover:text-secondary"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant cursor-pointer">
                <span className="material-symbols-outlined text-[18px] flex items-center">filter_list</span>
                <span>Price</span>
                <span className="material-symbols-outlined text-[14px] flex items-center">expand_more</span>
              </div>
              <div className="w-[1px] h-4 bg-outline-variant"></div>
              <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant cursor-pointer">
                <span className="material-symbols-outlined text-[18px] flex items-center">workspace_premium</span>
                <span>Exclusivity</span>
                <span className="material-symbols-outlined text-[14px] flex items-center">expand_more</span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {filteredProducts.map((p) => (
              <div key={p.id} className="group-card relative flex flex-col h-full bg-surface-container border border-on-surface/5 transition-all duration-500 hover:border-secondary/30">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src={p.imgSrc} />
                  {p.label && (
                    <div className="absolute top-4 right-4 bg-secondary/90 text-on-secondary text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">{p.label}</div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-2">{p.category}</span>
                  <h3 className="font-headline-md text-headline-md mb-2 hover:text-secondary transition-colors font-serif">{p.title}</h3>
                  <p className="text-body-md text-on-surface-variant text-sm mb-6 line-clamp-2">{p.description}</p>
                  <div className="mt-auto flex justify-between items-center pt-6 border-t border-on-surface/5">
                    <span className="font-bold text-secondary text-lg">{p.price}</span>
                    <Link href={p.href} className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-all duration-300">
                      <span className="material-symbols-outlined flex items-center justify-center">{p.isMail ? 'mail' : 'shopping_bag'}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <button className="border border-outline-variant px-12 py-4 text-label-md font-label-md uppercase tracking-widest hover:border-secondary hover:text-secondary transition-all duration-300 cursor-pointer">
              Load More Acquisitions
            </button>
          </div>
        </section>

        {/* Newsletter / Institutional Access */}
        <section className="bg-surface-container-highest py-24 px-margin-mobile md:px-margin-desktop text-center overflow-hidden relative">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-headline-lg text-headline-lg mb-6 font-serif">Request Private Access</h2>
            <p className="text-on-surface-variant text-body-lg mb-10">Institutional partners and verified patrons may request access to the Vault—a restricted collection of tier-one historical data and primary artifacts.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-grow bg-background border-0 border-b-2 border-on-surface/20 px-4 py-4 focus:ring-0 focus:border-secondary transition-colors text-on-surface" placeholder="Institutional Email Address" type="email"/>
              <button className="bg-secondary text-on-secondary px-8 py-4 font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer">Apply for Clearance</button>
            </form>
          </div>
        </section>
      </main>    </>
  );
}
