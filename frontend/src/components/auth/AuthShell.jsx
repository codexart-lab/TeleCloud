import { Link } from 'react-router-dom';
import { APP_NAME } from '../../utils/constants.js';
import LogoMark from '../marketing/LogoMark.jsx';

/**
 * Shared dark editorial shell for the auth screens.
 * The `dark` class forces the giga tokens even when the saved theme is light.
 */
export default function AuthShell({ eyebrow, heading, blurb, children, footer }) {
  return (
    <div className="dark min-h-screen bg-giga-canvas text-giga-ink lg:grid lg:grid-cols-2">
      <aside className="relative hidden overflow-hidden border-r border-giga-border/70 p-12 lg:flex lg:flex-col lg:justify-between">
        <div
          className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-giga-violet/20 blur-[110px]"
          aria-hidden="true"
        />

        <Link to="/" className="relative z-10 flex items-center gap-2.5">
          <LogoMark className="h-8 w-8" />
          <span className="text-sm font-medium tracking-tight">{APP_NAME}</span>
        </Link>

        <div className="relative z-10">
          <span className="giga-label text-giga-orange">{eyebrow}</span>
          <h1 className="mt-5 max-w-md font-display text-4xl font-light leading-[1.08] tracking-[-0.03em] text-white xl:text-5xl">
            {heading}
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-giga-muted">{blurb}</p>
          <div className="mt-10 h-px w-40 bg-gradient-to-r from-giga-violet/70 to-transparent" />
        </div>

        <p className="relative z-10 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-giga-faint">
          Free forever · No credit card · No storage fees
        </p>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64" aria-hidden="true">
          <div className="absolute bottom-24 right-10 h-32 w-32 rounded-full bg-giga-rose/20 blur-[70px]" />
          <div className="giga-orb absolute bottom-28 right-14 h-20 w-20 rounded-full" />
          <svg
            className="absolute inset-x-0 bottom-0 h-40 w-full"
            viewBox="0 0 600 160"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="auth-ridge" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6640FF" stopOpacity="0" />
                <stop offset="55%" stopColor="#E89EEE" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#6640FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 120 L110 70 L210 118 L320 52 L430 116 L520 78 L600 108 L600 160 L0 160 Z"
              fill="#07070B"
            />
            <path
              d="M0 138 L140 104 L260 140 L390 96 L500 140 L600 116 L600 160 L0 160 Z"
              fill="#000000"
            />
            <path
              d="M0 120 L110 70 L210 118 L320 52 L430 116 L520 78 L600 108"
              fill="none"
              stroke="url(#auth-ridge)"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      </aside>

      <main className="flex min-h-screen items-center justify-center p-6 md:p-12 lg:min-h-0">
        <div className="w-full max-w-md">
          <Link to="/" className="mb-10 inline-flex items-center gap-2.5 lg:hidden">
            <LogoMark className="h-8 w-8" />
            <span className="text-sm font-medium tracking-tight">{APP_NAME}</span>
          </Link>
          {children}
          {footer && <p className="mt-6 text-center text-sm text-giga-muted">{footer}</p>}
        </div>
      </main>
    </div>
  );
}
