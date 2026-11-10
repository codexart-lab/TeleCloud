import { Link } from 'react-router-dom';
import Icon from '../components/common/Icon.jsx';
import GigaNav from '../components/marketing/GigaNav.jsx';
import Hero from '../components/marketing/Hero.jsx';
import WaveformStrip from '../components/marketing/WaveformStrip.jsx';
import FeatureCards from '../components/marketing/FeatureCards.jsx';
import Timeline from '../components/marketing/Timeline.jsx';
import Faq from '../components/marketing/Faq.jsx';
import SiteFooter from '../components/marketing/SiteFooter.jsx';

function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-giga-border/60 py-24 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-giga-violet/15 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <span className="giga-label text-giga-orange">Start here</span>
        <h2 className="mt-4 font-display text-4xl font-light tracking-[-0.03em] text-white md:text-section">
          Start storing on Telegram today.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-giga-muted">
          Free forever. No credit card. No storage fees.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/register" className="giga-pill px-6 py-3 text-sm">
            Get started for free <Icon name="arrow_forward" className="text-[1.1em]" />
          </Link>
          <Link to="/login" className="giga-pill-ghost px-6 py-3 text-sm">
            Sign in
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-giga-canvas text-giga-ink selection:bg-giga-violet/40 selection:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>

      <GigaNav />

      <main id="main">
        <Hero />
        <WaveformStrip />
        <FeatureCards />
        <Timeline />
        <Faq />
        <CtaSection />
      </main>

      <SiteFooter />
    </div>
  );
}
