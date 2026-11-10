import Icon from '../common/Icon.jsx';

const files = [
  { tag: 'IMG', tone: 'text-giga-rose bg-giga-rose/10', name: 'vacation.jpg', size: '2.4 MB' },
  { tag: 'VID', tone: 'text-giga-blue bg-giga-blue/10', name: 'demo.mp4', size: '18 MB' },
  { tag: 'PDF', tone: 'text-giga-orange bg-giga-orange/10', name: 'report.pdf', size: '512 KB' },
];

function FilesMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/45 p-3 backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-giga-faint">
          My drive
        </span>
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-giga-green/70" />
          <span className="font-mono text-[0.625rem] text-giga-faint">synced</span>
        </span>
      </div>
      <ul className="space-y-1.5">
        {files.map((file) => (
          <li
            key={file.name}
            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5"
          >
            <span
              className={`rounded-md px-1.5 py-0.5 font-mono text-[0.5625rem] tracking-[0.08em] ${file.tone}`}
            >
              {file.tag}
            </span>
            <span className="flex-1 truncate text-xs text-giga-soft">{file.name}</span>
            <span className="font-mono text-[0.625rem] text-giga-faint">{file.size}</span>
            <span className="text-giga-green" aria-label="stored">
              <Icon name="check" className="text-[1em]" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/45 p-3 backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-giga-faint">
          Assistant
        </span>
        <span className="font-mono text-[0.625rem] text-giga-faint">online</span>
      </div>
      <div className="space-y-2">
        <p className="ml-6 rounded-xl rounded-br-sm border border-white/5 bg-giga-panel/60 px-3 py-2 text-xs text-giga-soft">
          Where is the PDF from last week?
        </p>
        <p className="mr-4 rounded-xl rounded-bl-sm border border-giga-violet/20 bg-giga-violet/10 px-3 py-2 text-xs text-giga-soft">
          Found <span className="text-giga-ink">report.pdf</span> — shared Tuesday. Want a
          one-paragraph summary?
        </p>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2">
        <span className="flex-1 text-[0.6875rem] text-giga-faint">Ask about your files…</span>
        <span className="text-giga-violet" aria-hidden="true">
          <Icon name="keyboard_return" className="text-[1em]" />
        </span>
      </div>
    </div>
  );
}

const cards = [
  {
    label: 'Your drive',
    title: 'Every file, one calm home.',
    copy: 'Drag, drop, and sort into colored folders. Files live in Telegram; we keep only the map — so storage stays free.',
    tone: 'from-giga-warm via-[#26211B] to-giga-surface',
    mock: <FilesMock />,
  },
  {
    label: 'The assistant',
    title: 'AI that knows your drive.',
    copy: 'Ask what is inside a PDF, summarize a recording, or find a file by describing it. The assistant works across your whole library.',
    tone: 'from-[#4A3B2E] via-[#2B221A] to-giga-surface',
    mock: <ChatMock />,
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2 md:px-8">
        {cards.map((card) => (
          <article
            key={card.label}
            className={`giga-card relative bg-gradient-to-br ${card.tone} p-6 sm:p-8 md:p-10`}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-giga-lilac/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="giga-label text-giga-fog/60">{card.label}</span>
              <h3 className="mt-3 font-display text-3xl font-light tracking-[-0.02em] text-white md:text-4xl">
                {card.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-giga-soft/80">
                {card.copy}
              </p>
              <div className="mt-8">{card.mock}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
