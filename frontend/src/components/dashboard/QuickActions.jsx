import { Link } from 'react-router-dom';
import Icon from '../common/Icon.jsx';

const actions = [
  { to: '/files', label: 'Upload file', icon: 'upload' },
  { to: '/chat', label: 'Ask AI', icon: 'smart_toy' },
  { to: '/folders', label: 'New folder', icon: 'create_new_folder' },
  { to: '/shares', label: 'Share link', icon: 'link' },
];

export default function QuickActions() {
  return (
    <div className="card-static p-5">
      <div className="text-sm font-semibold mb-4">Quick actions</div>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((a) => (
          <Link
            key={a.to}
            to={a.to}
            className="flex flex-col items-center justify-center rounded-xl border border-slate-200 dark:border-giga-border p-4 text-center hover:border-giga-violet/50 hover:-translate-y-0.5 transition-all"
          >
            <div className="text-2xl mb-1"><Icon name={a.icon} /></div>
            <div className="text-xs font-medium text-slate-700 dark:text-giga-soft">{a.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
