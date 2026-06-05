"use client";

import Image from 'next/image';
import React from 'react';
import useReveal from '@/hooks/useReveal';
import useParallax from '@/hooks/useParallax';
import Link from 'next/link';

export default function Page() {
  useReveal();
  useParallax();
  

  return (
    <>
      


<main>

<section className="relative h-[80vh] w-full overflow-hidden">
<div className="absolute inset-0 z-0">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgutN5UBXvALzyXPLAL0frqgjpZq5TNcQXSI8m2SjzkyYEYPLfOKeniRcYmqWcktO9S-ihGgzOXJ711GJnTtXqSYa9uLGHhZt_I-9MecAc2RKiIARB8W7y_vmNbvR76lW0u0T8Tzrk0xSI80L1O9c39o-Ym7leMCNrNU0SzIUX0uDQlPn9UEAYkAoLZMQhBPqQHMyQs7n41tnMvnNhNzS6NhAEbzeCIO-aoSYtwR-UYiAGWJIw3dJbKZ1Gc42Ci79ptY2goUskhPw" alt="Ejike Ebidilo Portrait" className="w-full h-full object-cover object-top brightness-50" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="hero-gradient absolute inset-0"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end px-margin-mobile md:px-margin-desktop pb-20 max-w-5xl">
<div className="flex items-center gap-3 text-secondary font-label-md mb-4 uppercase tracking-[0.2em]">
<span className="w-12 h-[1px] bg-secondary"></span>
<span>Exclusive Premiere</span>
</div>
<h1 className="font-display-lg text-4xl md:text-display-lg text-on-background leading-tight mb-6">The Legacy <br/>Series: Ejike</h1>
<p className="font-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed opacity-90">
                    Explore an intimate journey through the life and institutional impact of Ejike Ebidilo. A cinematic archive detailing the intersection of culture, leadership, and media legacy.
                </p>
<div className="flex flex-wrap gap-4">
<button className="flex items-center gap-3 px-8 py-4 bg-secondary text-on-secondary rounded font-bold hover:brightness-110 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="play_arrow" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                        Watch Feature
                    </button>
<button className="flex items-center gap-3 px-8 py-4 bg-surface-container/60 backdrop-blur-md text-on-background premium-border rounded font-bold hover:bg-surface-container transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="info">info</span>
                        Details
                    </button>
</div>
</div>
</section>

<div className="space-y-24 pb-32 -mt-10 relative z-20">

<section className="pl-margin-mobile md:pl-margin-desktop">
<div className="flex justify-between items-end mb-8 pr-margin-mobile md:pr-margin-desktop">
<h2 className="font-headline-md text-secondary tracking-tight">Interviews</h2>
<a className="text-on-surface-variant font-label-sm hover:text-secondary transition-colors tracking-widest uppercase" href="/">View All</a>
</div>
<div className="flex overflow-x-auto gap-gutter pr-margin-mobile md:pr-margin-desktop hide-scrollbar">

<div className="flex-none w-[300px] md:w-[400px] group cursor-pointer">
<div className="relative aspect-video overflow-hidden rounded mb-4 premium-border bg-surface-container">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZNI5fXcn9EedJrjCT35LrTBSjyHR8Qdu9R9E4GZim5-NSFmpQcW_cN_DOQN5b_zOZm4kkZeHgTqoc9PNJAN9vub4jrJKPMAnM6k1Vkq3rUTFcymHchAhL0dsb3ir_wpQGJ0sRYSdUnyZ3bsGKm0hQy6DNIzkriCYuz3FOZnNL3QAaSz5Dyyy0Ce6RCcqz4Ek5EIIpRrmCTjSBJRtVGt2U-KprS0TnGIu4SmaqlxQbrNc9N4rjLZaDPIGxjzwFvAY8SwmBtJRW_qQ" alt="Interview with Arise TV" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-5xl" data-icon="play_circle">play_circle</span>
</div>
</div>
<h3 className="font-headline-md text-lg text-on-background group-hover:text-secondary transition-colors">Arise TV: The Visionary Statement</h3>
<p className="text-on-surface-variant font-body-md text-sm mt-1">24 mins • Global Politics</p>
</div>

<div className="flex-none w-[300px] md:w-[400px] group cursor-pointer">
<div className="relative aspect-video overflow-hidden rounded mb-4 premium-border bg-surface-container">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLLDB-WjtuarAfB2wYMz2NiQ0CA_gigdLq5utzkiHboizu_IrvDW2AZ0aAXei1WTDhFJQXSQjHoCn-IvYbtpSzLaT6A_giqAoZiwyeWjFJqDQQ2oUnSOeXp5XXg15qx19hAarzZpcdmTZdRhhiwFcKhhuei1GyDUuHj4y7ehipXCyKH_G0foU5y08VjVYTs-77MfCjPH40YXT2DTTwWtdBQ5x7w9acgpdzAj6pJybnZidnAiVwnD85rX1M6HdDBC1K3WknFXp0CEo" alt="BBC Interview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-5xl" data-icon="play_circle">play_circle</span>
</div>
</div>
<h3 className="font-headline-md text-lg text-on-background group-hover:text-secondary transition-colors">BBC World Service: Institutional Legacy</h3>
<p className="text-on-surface-variant font-body-md text-sm mt-1">18 mins • Heritage</p>
</div>

<div className="flex-none w-[300px] md:w-[400px] group cursor-pointer">
<div className="relative aspect-video overflow-hidden rounded mb-4 premium-border bg-surface-container">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-1edZgPCbzeClfQ3thp7MAiBbhzV1o-8HNzqkDyL0rgJrTl-pLvCC3Oi6JmBRt2Lnm4Ej6SGIh9-lA8ibc7mT2M9KgpF1al9m9MrG3wq51LT1O9bVP55NKrcwcndDZRYHSD6RRatW2p69GDRjMvGrug1mINszZ85ZEsek4CBoSEVYdLOIJHwaU1Px4qpd8JMQW6FNFXvFGoK4fy5L2Ou6tGqpAeOh1E9Vieaaa4zsQ2S566HHlnOCrY_SaaIK8IFEdxhzk4OvxSg" alt="Digital Frontiers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-5xl" data-icon="play_circle">play_circle</span>
</div>
</div>
<h3 className="font-headline-md text-lg text-on-background group-hover:text-secondary transition-colors">Digital Frontiers with Ejike</h3>
<p className="text-on-surface-variant font-body-md text-sm mt-1">45 mins • Technology</p>
</div>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop">
<h2 className="font-headline-md text-secondary mb-10">Featured Editorials</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 min-h-[500px]">

<div className="md:col-span-7 group relative overflow-hidden rounded premium-border cursor-pointer">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHS5dI30MbAMyazxJXru2_46iJ6NIZbCjOGpzi_Cn922yrGG3p0CKdWQ_sC_rXa4PbDuvjTVwGeNYjdqMZZ9qixMS2V_LqRFex8k--1Q_qBVRWvRaqNlvhI9KWP0w-gARj34FHwNVlr3oENAUN5hdEEpFljdpODAYJu7S6qiuEPRe3Zw8WxEZ59kRGIfqDcSSFfUJ5ROd8wHAjPFwFj9Oqu61wubdDXEAXm51P0sH19IvqXqnh1svXCFOh15u0bFdnLpvm_W1Il5g" alt="Library Feature" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12">
<span className="px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold rounded mb-4 inline-block tracking-wider uppercase">Cover Story</span>
<h3 className="font-display-lg text-3xl md:text-headline-lg text-on-background mb-4">The Architect of Change</h3>
<p className="font-body-md text-on-surface-variant max-w-lg opacity-80">A deep dive into the strategic shifts led by Ejike Ebidilo over the last decade.</p>
</div>
</div>

<div className="md:col-span-5 flex flex-col gap-8">
<div className="flex-1 group relative overflow-hidden rounded premium-border cursor-pointer min-h-[220px]">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRckkwjcH3LuBXIvMhhF7OArNOyPoQQRggcYRQE9zXh5geRqaUbyHz8gE7wEMdD4n7GO6HasUoa48O5GLGJefgfcS_o_Spyxrm1tHjwtcmW3qRunDtB5a94m0VvM15JGCgQurxUcCo1lZH9Lnx1q3oCuAWeFZz9zxVZNyz6EHbgMM78qosLqaP9PyfvtJkqA1GMGOr63VFBVU9sWbz8HwmUrMmgbrToyxzDU2KPOyD7WzYPTXlNl7o7xBeHhqXGM3RRja1mrB10s0" alt="Media Ethics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<h4 className="font-headline-md text-xl text-on-background">Modern Media Ethics</h4>
</div>
</div>
<div className="flex-1 group relative overflow-hidden rounded premium-border cursor-pointer min-h-[220px]">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ1xdb2L4AHmIboJlZSfawQ1o_ONCrFqXPIlJNgyyd1gPpK1Gc5X3YaeFPyfZwPe1Dib9pAEq0T14YJN70ayoaM_roZ5FMN6JjZX9TE79lfo3Z5EeXN6rZuE9zEkYUA8bScqjt9Y1rQzqCUvZNRx6KLR3N6KuaoDrPQ1O7RGZ6_kRmiF9kFFwehkPBw0serSSxVBX8tnORE9x98k6duMoi_SbppTngYTAgFNK7kV7tmM-y2Hz-Rvl4YyyDeDA7ZrznUjLBp0VjTMM" alt="Global Impact" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<h4 className="font-headline-md text-xl text-on-background">Global Impact Report</h4>
</div>
</div>
</div>
</div>
</section>

<section className="pl-margin-mobile md:pl-margin-desktop">
<h2 className="font-headline-md text-secondary mb-10">Television Appearances</h2>
<div className="flex overflow-x-auto gap-6 pr-margin-mobile md:pr-margin-desktop hide-scrollbar">

<div className="flex-none w-[200px] md:w-[240px] group cursor-pointer">
<div className="relative aspect-[2/3] overflow-hidden rounded mb-4 premium-border bg-surface-container">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCq-oCgOMF2VnxpEzWJaizmhuGBU6g__7da4Q0OoTwzgT3p7nmcs70kZUCVX0UXSTw1R6osEIecDASMP5aA2fZBvb0daHU-uk0T520K3MiWHZFs5aA2ONTMPuSJJ5Tk8YnX7TPgwL9XAb8Ev2YoWxbOMODVmfXriDnQBnEhxkRidZiiX9BoWD1nNAdIx1pDQpteR7AvaZnGX_cFvirbJfnlZkGz_i1-cA1OoZfZdPoWo51mqd5xLYi35sMbdguVfgTVYG3EZ5m73U" alt="TV Show Poster" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute top-3 right-3 bg-secondary text-on-secondary px-2 py-0.5 text-[9px] font-bold rounded tracking-tight">SERIES</div>
</div>
<h3 className="font-label-md text-on-background group-hover:text-secondary transition-colors truncate">The Evening Dialogue</h3>
<p className="text-on-surface-variant text-[12px] mt-1">Season 4 • Episode 12</p>
</div>

<div className="flex-none w-[200px] md:w-[240px] group cursor-pointer">
<div className="relative aspect-[2/3] overflow-hidden rounded mb-4 premium-border bg-surface-container">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuA06n5UQ3eG4w5PtGvP6BBh2smBzfjdb1lZXQd_tkEtbE7CrF5BTcKvXxBcqkj6y4qlmSZA97mr0c54CxtH8Km3T0mDz2t8WCaf6qp9JhggK-TklAuBYUD4WdDETqkxl-abMs9gXHz94h2mC5PZFjuSOsMeXSmAcXWMci0n_wDJ8pi8_MdpXMTOfA0I8-6r-TJ6Vlor7EJMk3JBaXo_12D_ifZzJBNNSg1iiRcFwkDZ1nuMhJUJd8OkdVhzbiRQFdKG5TWh3FEed0E" alt="TV Show Poster" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<h3 className="font-label-md text-on-background group-hover:text-secondary transition-colors truncate">Cultural Perspectives</h3>
<p className="text-on-surface-variant text-[12px] mt-1">Special Presentation</p>
</div>

<div className="flex-none w-[200px] md:w-[240px] group cursor-pointer">
<div className="relative aspect-[2/3] overflow-hidden rounded mb-4 premium-border bg-surface-container">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL7l9LzTx5rWkdlYrWfpzjqWgwpsWvy93O42bqlSpebf4IL0P4n0OJEb5GkCF0Tkr0pQb5RUF9rR948uDYymQFDK1nqs3xFnr6qvGTjI8GVsW1URGmsoUStfqDg7wjJN87WhskoVNuXsPgIqI8tw-h-WY93UsVUg2iJ0FU8jzMOI4ZQN7W3Ayla-rbzBBSZVD8yd-DsUpIO1MqWo0qDImQybJUM9tD9icc4RZAwidwrJpk9lAtEUT6xQsr9gAT3rH1n1Hs3ZTKThE" alt="TV Show Poster" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<h3 className="font-label-md text-on-background group-hover:text-secondary transition-colors truncate">Leadership Roundtable</h3>
<p className="text-on-surface-variant text-[12px] mt-1">Panel Discussion</p>
</div>

<div className="flex-none w-[200px] md:w-[240px] group cursor-pointer">
<div className="relative aspect-[2/3] overflow-hidden rounded mb-4 premium-border bg-surface-container">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeZc-WWatdAc7NNE-uAPni4CY3XR7AeOOcauRh2wUvZ1h6AHAuMVZ92y0larw7mmCcNGHOTjqUM8f5XaGvDDDdoSsF3JjQj3X3Z8wf0FXHAOkzPyOxNzDY1dxPDXexsihNmiBHWvdB6v51kQ3wnIr4HcmDXHbEg7WJLpcv2jrGt1XEuW2UMjUZa-Zhb00_f7oNlji6SzR98lc7M-GfllJ06AXBbiBdImpn5utWZ44JKiuyG584NT-UM-qtjXZMsjIQBjOuGnaq6zc" alt="TV Show Poster" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<h3 className="font-label-md text-on-background group-hover:text-secondary transition-colors truncate">Archive Gold</h3>
<p className="text-on-surface-variant text-[12px] mt-1">History Special</p>
</div>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop">
<h2 className="font-headline-md text-secondary mb-10">Documentaries</h2>
<div className="flex flex-col md:flex-row gap-10 group cursor-pointer premium-border p-8 md:p-12 rounded bg-surface-container/30 hover:bg-surface-container/50 transition-all">
<div className="md:w-5/12 aspect-video rounded overflow-hidden relative">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuD31tBalBzghmiLrchsQk4hLgFJHqxOPMWvWN7E39Ffzihecei0uGInFL5HtHIlIWHk6dRq5K6HBjlyeYn0lwBqTcLKtaSDTUysxHu4TzV3UX_GIyxhHMAqCwtlcefH4OAbjmDTg9rojcRQuX_73YI5EW_PWYYCpt2zFXJ75T5yBg4joC8-g1Or8sDBqbJ1UUdbccDLiwmUtO-swEEWf3vce8j9RgwhY0VaQTosPvWNv_rDY9tUhjvyM-ZhjIibH6d4iGgpZosfexY" alt="Origins Documentary" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors">
<span className="material-symbols-outlined text-secondary text-6xl drop-shadow-lg" data-icon="play_circle" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
</div>
</div>
<div className="md:w-7/12 flex flex-col justify-center">
<span className="text-secondary font-label-sm mb-4 uppercase tracking-[0.3em]">Feature Documentary</span>
<h3 className="font-display-lg text-4xl text-on-background mb-6">Origins of Excellence</h3>
<p className="font-body-md text-on-surface-variant leading-relaxed mb-8 opacity-80">
                            A comprehensive look at the foundation and evolution of the BIGBRUVA institutional philosophy. Featuring never-before-seen footage and exclusive commentary from founding members.
                        </p>
<div className="flex flex-wrap gap-8 items-center text-on-surface-variant/70 font-label-md">
<span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span> 1h 24m</span>
<span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="high_quality">high_quality</span> 4K UHD</span>
<span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm" data-icon="calendar_today">calendar_today</span> 2024</span>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="flex flex-col items-center py-24 px-margin-mobile md:px-margin-desktop text-center bg-surface-container-lowest border-t border-outline-variant/10">
<div className="mb-12">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU" alt="BIGBRUVA Official Crest" className="h-40 md:h-56 w-auto object-contain" width={160} height={80} style={{ objectFit: 'contain' }} />
</div>
<nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md" href="/legacy">Legacy</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md" href="/press">Press Room</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md" href="/">Archives</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md" href="/">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md" href="/">Terms of Service</a>
</nav>
<p className="font-body-md text-on-surface-variant opacity-40 text-sm tracking-wide">© 2024 BIGBRUVA - EJIKE EBIDILO INSTITUTIONAL. ALL RIGHTS RESERVED.</p>
</footer>
    </>
  );
}
