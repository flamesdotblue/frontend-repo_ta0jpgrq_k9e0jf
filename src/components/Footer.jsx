export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-6 py-12 sm:grid-cols-2">
        <div>
          <h4 className="text-lg font-semibold">Let’s work together</h4>
          <p className="mt-2 max-w-md text-sm text-white/70">
            Tell us about your goals and we’ll map the fastest path to growth.
          </p>
        </div>
        <div className="flex justify-start sm:justify-end">
          <a
            href="mailto:hello@marketingmissile.com"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:opacity-90"
          >
            hello@marketingmissile.com
          </a>
        </div>
      </div>
    </footer>
  );
}
