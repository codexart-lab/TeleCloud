import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import Icon from '../common/Icon.jsx';

export default function MobileNav() {
  const { user } = useAuth();
  const items = [
    { to: '/dashboard', label: 'Home', icon: 'home' },
    { to: '/files', label: 'Files', icon: 'folder' },
    { to: '/chat', label: 'AI', icon: 'smart_toy' },
    { to: '/shares', label: 'Shares', icon: 'link' },
    { to: '/profile', label: 'Profile', icon: 'person' },
  ];
  if (user?.is_admin) {
    items[4] = { to: '/admin', label: 'Admin', icon: 'shield' };
  }
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/70 dark:border-giga-border/70 bg-white/95 dark:bg-giga-canvas/95 backdrop-blur-xl">
      <div className="grid grid-cols-5">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `relative flex flex-col items-center justify-center py-2.5 text-[11px] transition-colors ${
                isActive
                  ? 'text-slate-900 dark:text-giga-ink'
                  : 'text-slate-500 dark:text-giga-muted'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute top-0 h-0.5 w-6 rounded-full bg-giga-violet" />
                )}
                <span className="text-xl mb-0.5" aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
                {item.label}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
