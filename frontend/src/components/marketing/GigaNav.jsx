import { Link } from 'react-router-dom';
import { APP_NAME } from '../../utils/constants.js';
import LogoMark from './LogoMark.jsx';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export default function GigaNav() {
  return (
    <header className="sticky top-0 z-40 bg-giga-canvas/75 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8"
        aria-label="Main"
      >
        <Link to="/" className="flex items-center gap-2.5">
          <LogoMark className="h-7 w-7" />
          <span className="text-sm font-medium tracking-tight text-giga-ink">{APP_NAME}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-giga-muted transition-colors hover:text-giga-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <Link
            to="/login"
            className="hidden px-3 py-2 text-xs text-giga-muted transition-colors hover:text-giga-ink sm:block"
          >
            Sign in
          </Link>
          <Link to="/register" className="giga-pill px-4 py-2 text-xs">
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
