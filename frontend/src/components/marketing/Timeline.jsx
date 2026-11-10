const steps = [
  {
    n: '01',
    title: 'Create your account',
    copy: 'Sign up with an email and your Telegram username. Takes about thirty seconds.',
  },
  {
    n: '02',
    title: 'Link your bot',
    copy: 'The admin adds a bot token once; we detect your chat automatically. No config files.',
  },
  {
    n: '03',
    title: 'Upload and share',
    copy: 'Drag files in, then share them with a password and an expiry date when you need to.',
  },
];

export default function Timeline() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-t border-giga-border/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="giga-label text-giga-orange">The journey</span>
          <h2 className="mt-4 font-display text-4xl font-light tracking-[-0.03em] text-white md:text-section">
            Three steps from paying for storage.
          </h2>
        </div>

        <div
          className="mt-9 h-px w-full bg-gradient-to-r from-giga-orange/70 via-giga-violet/60 to-transparent"
          aria-hidden="true"
        />

        <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0">
          {steps.map((step, i) => (
            <li key={step.n} className={i > 0 ? 'md:border-l md:border-giga-border md:pl-10' : ''}>
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full border border-giga-orange/40 font-mono text-[0.625rem] text-giga-orange">
                  {step.n}
                </span>
                <span className="giga-label text-giga-faint">Step {step.n}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-light tracking-[-0.02em] text-white">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-giga-muted">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
