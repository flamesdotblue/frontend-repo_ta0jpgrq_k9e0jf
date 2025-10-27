import { Rocket, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ onOpenPortfolio }) {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <div className="flex flex-col items-center gap-2 py-4 sm:flex-row sm:gap-6 sm:py-0">
      <button
        onClick={() => {
          onOpenPortfolio?.();
          setOpen(false);
        }}
        className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
      >
        Portfolio
      </button>
      <a
        href="#contact"
        className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
      >
        Contact
      </a>
    </div>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-neutral-900">
            <Rocket size={18} />
          </div>
          <span className="text-sm font-semibold tracking-wide text-white/90">
            Marketing Missile
          </span>
        </a>

        <div className="hidden sm:block">
          <NavLinks />
        </div>

        <button
          className="sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="text-white/80" /> : <Menu className="text-white/80" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-neutral-950 sm:hidden">
          <div className="mx-auto max-w-6xl px-6">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
}
