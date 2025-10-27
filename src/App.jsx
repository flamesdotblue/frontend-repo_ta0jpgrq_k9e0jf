import { useState, useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import PortfolioModal from './components/PortfolioModal.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = useMemo(
    () => [
      {
        id: 'mm-seo-suite',
        title: 'SEO Growth Suite',
        category: 'Marketing',
        description:
          'End-to-end technical SEO, content strategy and analytics stack for a SaaS brand.',
        tags: ['SEO', 'Content', 'Analytics'],
        link: 'https://www.marketingmissile.com',
      },
      {
        id: 'mm-ads-optimizer',
        title: 'Ads Optimizer Engine',
        category: 'Advertising',
        description:
          'Multi-channel ad experimentation framework with automated budget rebalancing.',
        tags: ['Google Ads', 'Meta', 'Attribution'],
        link: 'https://www.marketingmissile.com',
      },
      {
        id: 'mm-brand-refresh',
        title: 'Brand Refresh + Site',
        category: 'Web',
        description:
          'Modern brand system and fast site with conversion-focused landing pages.',
        tags: ['Design', 'Web', 'CRO'],
        link: 'https://www.marketingmissile.com',
      },
      {
        id: 'mm-automation-hub',
        title: 'Automation Hub',
        category: 'Automation',
        description:
          'Lead routing, enrichment and CRM automation with reporting dashboards.',
        tags: ['CRM', 'Zapier', 'APIs'],
        link: 'https://www.marketingmissile.com',
      },
    ],
    []
  );

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar onOpenPortfolio={() => setIsPortfolioOpen(true)} />

      <Hero onOpenPortfolio={() => setIsPortfolioOpen(true)} />

      {/* Simple benefits section to add context */}
      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Performance-first',
              desc: 'Fast, modern experiences designed to convert and scale.',
            },
            {
              title: 'Full-funnel',
              desc: 'From awareness to retention — aligned with business goals.',
            },
            {
              title: 'Proven playbooks',
              desc: 'Reusable systems, not one-off campaigns.',
            },
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/70">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
        projects={filtered}
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
    </div>
  );
}
