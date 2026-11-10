import { formatBytes } from '../../utils/format.js';
import Icon from '../common/Icon.jsx';

export default function StorageChart({ byType = [] }) {
  const groups = { images: 0, videos: 0, audio: 0, docs: 0 };
  for (const row of byType) {
    const m = (row.mime || '').toLowerCase();
    if (m.startsWith('image/')) groups.images += row.size || 0;
    else if (m.startsWith('video/')) groups.videos += row.size || 0;
    else if (m.startsWith('audio/')) groups.audio += row.size || 0;
    else groups.docs += row.size || 0;
  }
  const total = Object.values(groups).reduce((a, b) => a + b, 0) || 1;
  const items = [
    { key: 'images', label: 'Images', color: 'bg-giga-blue', icon: 'image' },
    { key: 'videos', label: 'Videos', color: 'bg-giga-violet', icon: 'movie' },
    { key: 'audio', label: 'Audio', color: 'bg-giga-green', icon: 'music_note' },
    { key: 'docs', label: 'Docs', color: 'bg-giga-orange', icon: 'description' },
  ];

  return (
    <div className="card-static p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm font-semibold">Storage breakdown</div>
          <div className="text-xs text-slate-500 dark:text-giga-muted">
            Total {formatBytes(total === 1 ? 0 : total)}
          </div>
        </div>
        <Icon name="bar_chart" size="lg" />
      </div>

      <div className="flex h-3 rounded-full overflow-hidden bg-slate-200 dark:bg-giga-panel mb-4">
        {items.map((it) => {
          const pct = (groups[it.key] / total) * 100;
          return (
            <div
              key={it.key}
              className={`${it.color} transition-all`}
              style={{ width: `${pct}%` }}
              title={`${it.label}: ${formatBytes(groups[it.key])}`}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {items.map((it) => (
          <div key={it.key} className="flex items-center gap-2">
            <div className={`h-2.5 w-2.5 rounded-full ${it.color}`} />
            <div className="text-xs">
              <span className="text-slate-500 dark:text-giga-muted">
                <Icon name={it.icon} className="mr-1 text-[1.1em]" /> {it.label}
              </span>
              <div className="font-medium text-slate-900 dark:text-giga-ink">
                {formatBytes(groups[it.key])}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
