import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenPortfolio }) {
  return (
    <section className="relative">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950"></div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-start justify-center px-6 py-24">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
          Interactive • Tech • Modern
        </span>
        <h1 className="text-balance text-4xl font-bold leading-tight sm:text-6xl">
          Launch campaigns that actually move the needle
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-white/80">
          Performance marketing, brand systems, and web experiences engineered for growth.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenPortfolio}
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:opacity-90"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
