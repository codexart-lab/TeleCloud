import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth.js';
import { useTheme } from '../../context/ThemeContext.jsx';
import LogoMark from '../marketing/LogoMark.jsx';
import Icon from '../common/Icon.jsx';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggle } = useTheme();
  const nav = useNavigate();
  const [menu, setMenu] = useState(false);

  const onLogout = async () => {
    await logout();
    nav('/');
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 dark:border-giga-border/70 bg-white/70 dark:bg-giga-canvas/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        <div className="md:hidden flex items-center gap-2">
          <LogoMark className="h-7 w-7" />
          <span className="text-sm font-medium tracking-tight">TeleCloud</span>
        </div>

        <div className="hidden md:block">
          <div className="text-sm text-slate-500 dark:text-giga-muted">
            Welcome back,{' '}
            <span className="font-medium text-slate-900 dark:text-giga-ink">{user?.name}</span>{' '}
            <Icon name="waving_hand" className="text-[1.1em]" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 dark:border-giga-border hover:bg-slate-100 dark:hover:bg-giga-panel transition"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} />
          </button>

          <div className="relative">
            <button
              onClick={() => setMenu((m) => !m)}
              className="grid h-9 w-9 place-items-center rounded-full bg-slate-900 text-xs font-semibold text-white dark:bg-giga-action dark:text-giga-action-ink"
              aria-label="User menu"
              aria-expanded={menu}
            >
              {user?.name?.[0]?.toUpperCase() || 'U'}
            </button>
            {menu && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setMenu(false)} />
                <div className="absolute right-0 mt-2 w-52 card-static p-2 z-20 animate-pop shadow-xl">
                  <Link
                    to="/profile"
                    onClick={() => setMenu(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-giga-soft hover:bg-slate-100 dark:hover:bg-giga-panel"
                  >
                    <Icon name="person" className="mr-2 text-[1.1em]" /> Profile
                  </Link>
                  <Link
                    to="/activity"
                    onClick={() => setMenu(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-giga-soft hover:bg-slate-100 dark:hover:bg-giga-panel"
                  >
                    <Icon name="bar_chart" className="mr-2 text-[1.1em]" /> Activity
                  </Link>
                  <div className="my-1 border-t border-slate-200 dark:border-giga-border" />
                  <button
                    onClick={onLogout}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-red-500 hover:bg-red-500/10"
                  >
                    <Icon name="logout" className="mr-2 text-[1.1em]" /> Sign out
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
