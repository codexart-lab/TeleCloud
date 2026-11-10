import { Link } from 'react-router-dom';
import { APP_TAGLINE } from '../../utils/constants.js';
import Icon from '../common/Icon.jsx';

function OrbStage() {
  return (
    <div className="relative mx-auto mt-16 h-[300px] w-full max-w-5xl md:mt-20 md:h-[420px]" aria-hidden="true">
      {/* Soft bloom behind the orb */}
      <div className="absolute left-1/2 top-10 h-52 w-52 -translate-x-1/2 rounded-full bg-giga-rose/30 blur-[90px] md:top-14 md:h-72 md:w-72" />

      {/* The orb */}
      <div className="giga-orb absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 animate-breathe rounded-full md:top-10 md:h-56 md:w-56" />
      <div className="absolute left-1/2 top-12 h-48 w-48 -translate-x-1/2 rounded-full border border-white/5 md:top-16 md:h-64 md:w-64" />

      {/* Horizon + mountains dissolving into black */}
      <svg
        className="absolute inset-x-0 bottom-0 h-48 w-full md:h-60"
        viewBox="0 0 1200 240"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="giga-ridge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6640FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#E89EEE" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6640FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="giga-ridge-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2195FF" stopOpacity="0" />
            <stop offset="60%" stopColor="#6640FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2195FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="giga-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#07070B" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
        </defs>
        <path
          d="M0 172 L200 108 L340 174 L520 66 L700 160 L860 100 L1040 178 L1200 118 L1200 240 L0 240 Z"
          fill="#07070B"
        />
        <path
          d="M0 200 L240 150 L430 204 L640 142 L840 206 L1040 160 L1200 198 L1200 240 L0 240 Z"
          fill="#000000"
        />
        <path
          d="M0 172 L200 108 L340 174 L520 66 L700 160 L860 100 L1040 178 L1200 118"
          fill="none"
          stroke="url(#giga-ridge)"
          strokeWidth="1.2"
        />
        <path
          d="M0 200 L240 150 L430 204 L640 142 L840 206 L1040 160 L1200 198"
          fill="none"
          stroke="url(#giga-ridge-2)"
          strokeWidth="1"
        />
        <rect x="0" y="120" width="1200" height="120" fill="url(#giga-fade)" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 md:pt-24">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <span className="giga-label inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-giga-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-giga-violet" aria-hidden="true" />
          {APP_TAGLINE}
        </span>

        <h1 className="mt-7 font-display text-[2.75rem] font-light leading-[1.04] tracking-[-0.03em] text-giga-ink-strong sm:text-6xl md:text-hero">
          Your files, <em className="italic text-giga-rose">free forever</em>,
          <br className="hidden sm:block" /> on Telegram.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-giga-muted md:text-lg">
          Upload, organize, share, and let AI help — all in one calm dashboard. No storage
          bill, no credit card, no catch.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/register" className="giga-pill px-6 py-3 text-sm">
            Create free account <Icon name="arrow_forward" className="text-[1.1em]" />
          </Link>
          <Link to="/login" className="giga-pill-ghost px-6 py-3 text-sm">
            I already have one
          </Link>
        </div>

        <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-giga-faint">
          No credit card · No storage fees · Ready in 60 seconds
        </p>
      </div>

      <OrbStage />
    </section>
  );
}
