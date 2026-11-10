export default function Footer() {
  return (
    <footer className="hidden md:block border-t border-slate-200/70 dark:border-giga-border/70 px-8 py-4">
      <div className="flex items-center justify-between font-mono text-[0.625rem] uppercase tracking-[0.14em] text-slate-500 dark:text-giga-faint">
        <span>© {new Date().getFullYear()} TeleCloud · Storage on Telegram</span>
        <span>Built with Cloudflare Workers + D1</span>
      </div>
    </footer>
  );
}
