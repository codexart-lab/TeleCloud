import Icon from '../common/Icon.jsx';

export default function StatCard({ icon, label, value, accent = 'blue', hint }) {
  const accents = {
    blue: 'bg-giga-blue/10 text-giga-blue',
    purple: 'bg-giga-violet/10 text-giga-violet',
    emerald: 'bg-giga-green/10 text-giga-green',
    amber: 'bg-giga-orange/10 text-giga-orange',
  };
  return (
    <div className="card p-5">
      <div
        className={`mb-3 grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-base dark:border-giga-border ${
          accents[accent] || accents.blue
        }`}
      >
        <Icon name={icon} />
      </div>
      <div className="font-display text-3xl font-light text-slate-900 dark:text-giga-ink">
        {value}
      </div>
      <div className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-slate-500 dark:text-giga-faint">
        {label}
      </div>
      {hint && <div className="mt-1 text-[10px] text-slate-400 dark:text-giga-faint">{hint}</div>}
    </div>
  );
}
