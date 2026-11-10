import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import { APP_NAME } from '../../utils/constants.js';
import LogoMark from '../marketing/LogoMark.jsx';
import Icon from '../common/Icon.jsx';

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: 'home' },
  { to: '/files', label: 'Files', icon: 'folder' },
  { to: '/folders', label: 'Folders', icon: 'folder_open' },
  { to: '/shares', label: 'Shares', icon: 'link' },
  { to: '/chat', label: 'AI Chat', icon: 'smart_toy' },
  { to: '/activity', label: 'Activity', icon: 'bar_chart' },
  { to: '/profile', label: 'Profile', icon: 'person' },
];

export default function Sidebar() {
  const { user } = useAuth();
  const isAdmin = Boolean(user?.is_admin);

  return (
    <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-[260px] flex-col border-r border-slate-200/70 dark:border-giga-border/70 bg-white/70 dark:bg-giga-canvas/80 backdrop-blur-xl z-30">
      <Link
        to="/dashboard"
        className="flex items-center gap-3 px-6 py-5 border-b border-slate-200/70 dark:border-giga-border/70"
      >
        <LogoMark className="h-8 w-8" />
        <div>
          <div className="text-sm font-medium tracking-tight text-slate-900 dark:text-giga-ink">
            {APP_NAME}
          </div>
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400 dark:text-giga-faint">
            Cloud on Telegram
          </div>
        </div>
      </Link>

      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition-all ${
                isActive
                  ? 'bg-slate-100 text-slate-900 dark:bg-giga-panel dark:text-giga-ink shadow-[inset_2px_0_0_0_#6640FF]'
                  : 'text-slate-600 dark:text-giga-muted hover:bg-slate-100 dark:hover:bg-giga-panel/50 hover:text-slate-900 dark:hover:text-giga-ink'
              }`
            }
          >
            <span className="text-lg" aria-hidden="true">
              <Icon name={item.icon} />
            </span>
            {item.label}
          </NavLink>
        ))}

        {isAdmin && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition-all ${
                isActive
                  ? 'bg-slate-100 text-slate-900 dark:bg-giga-panel dark:text-giga-orange shadow-[inset_2px_0_0_0_#F76B15]'
                  : 'text-slate-600 dark:text-giga-muted hover:bg-slate-100 dark:hover:bg-giga-panel/50'
              }`
            }
          >
            <span className="text-lg" aria-hidden="true">
              <Icon name="shield" />
            </span>
            Admin
          </NavLink>
        )}
      </nav>

      <div className="p-3 border-t border-slate-200/70 dark:border-giga-border/70">
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-100/50 dark:bg-giga-surface">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-giga-action dark:text-giga-action-ink">
            {user?.name?.[0]?.toUpperCase() || 'U'}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium truncate text-slate-900 dark:text-giga-ink">
              {user?.name}
            </div>
            <div className="text-xs truncate text-slate-500 dark:text-giga-muted">
              {user?.email}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
