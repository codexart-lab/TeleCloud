import { Link } from 'react-router-dom';
import { APP_NAME } from '../../utils/constants.js';
import LogoMark from './LogoMark.jsx';
import Icon from '../common/Icon.jsx';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Sign in', href: '/login' },
      { label: 'Create account', href: '/register' },
      { label: 'Dashboard', href: '/dashboard' },
    ],
  },
];

const badges = ['Password-protected', 'Expiring links', 'No credit card'];

export default function SiteFooter() {
  return (
    <footer className="border-t border-giga-border/70 bg-giga-deep">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1.6fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <span className="text-sm font-medium tracking-tight text-giga-ink">{APP_NAME}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-giga-muted">
              AI-powered cloud storage on Telegram. Free forever, with your files where they
              already live.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[0.6875rem] text-giga-soft"
                >
                  <span className="text-giga-green" aria-hidden="true">
                    <Icon name="check" className="text-[1em]" />
                  </span>
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-giga-faint">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) =>
                    link.href.startsWith('#') ? (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-giga-muted transition-colors hover:text-giga-ink"
                        >
                          {link.label}
                        </a>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="text-sm text-giga-muted transition-colors hover:text-giga-ink"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-giga-faint">
                Built on
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-giga-muted">
                <li>Cloudflare Workers</li>
                <li>Telegram Bot API</li>
                <li>Cloudflare D1</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-giga-border/70 pt-6 text-xs text-giga-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {APP_NAME} · Storage on Telegram
          </span>
          <span>Built with Cloudflare Workers + D1</span>
        </div>
      </div>
    </footer>
  );
}
