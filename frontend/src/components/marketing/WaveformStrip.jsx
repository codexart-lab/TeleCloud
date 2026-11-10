import Icon from '../common/Icon.jsx';

const bars = [
  0.35, 0.6, 0.9, 0.5, 0.75, 0.4, 0.85, 1, 0.55, 0.7, 0.35, 0.8, 0.5, 0.95, 0.6, 0.4, 0.75, 0.55,
  0.9, 0.45, 0.7, 0.35, 0.85, 0.6, 0.5, 0.95, 0.4, 0.8, 0.55, 0.7, 0.45, 0.9, 0.35, 0.65, 0.8, 0.5,
  0.75, 0.6, 0.4, 0.85,
];

const chips = [
  { label: 'Encrypted', icon: 'lock' },
  { label: 'Synced', icon: 'sync' },
  { label: 'AI indexed', icon: 'auto_awesome' },
];

export default function WaveformStrip() {
  return (
    <section aria-label="Live sync status" className="border-y border-giga-border/60 bg-black py-14">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="flex h-16 items-center justify-between gap-[3px]" aria-hidden="true">
          {bars.map((height, i) => (
            <span
              key={i}
              className="animate-wave flex-1 origin-center rounded-full bg-gradient-to-t from-giga-violet/40 via-giga-pink/70 to-giga-rose"
              style={{ height: `${height * 100}%`, animationDelay: `${i * 40}ms` }}
            />
          ))}
        </div>

        <div
          className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-giga-violet/70 to-transparent"
          aria-hidden="true"
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-giga-panel/60 px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-giga-soft"
            >
              <span className="text-giga-green" aria-hidden="true">
                <Icon name={chip.icon} className="text-[1.1em]" />
              </span>
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
