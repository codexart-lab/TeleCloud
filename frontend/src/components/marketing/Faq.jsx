const faqs = [
  {
    q: 'Where are my files stored?',
    a: 'Every file is sent to your own Telegram chat through a bot. Cloudflare only stores metadata — names, sizes, and links.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes. Telegram provides the storage and this app provides the interface. There are no plans, tiers, or hidden costs.',
  },
  {
    q: 'What is the size limit?',
    a: 'Each browser upload can be up to 50MB. Telegram itself supports files up to 2GB when sent directly.',
  },
  {
    q: 'Can I use multiple devices?',
    a: 'Absolutely. Sign in with the same account on any device and your drive follows you.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-giga-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <span className="giga-label text-giga-orange">Questions</span>
        <h2 className="mt-4 font-display text-4xl font-light tracking-[-0.03em] text-white md:text-section-sm">
          A few things worth knowing.
        </h2>

        <div className="mt-10 border-t border-giga-border/70">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-giga-border/70">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-medium text-giga-soft transition-colors group-hover:text-giga-ink">
                  {item.q}
                </span>
                <span
                  className="text-giga-faint transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-sm leading-relaxed text-giga-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
