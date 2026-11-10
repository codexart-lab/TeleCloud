import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage.jsx';
import Icon from '../common/Icon.jsx';

export default function ChatBox({ messages, loading }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      ref={ref}
      className="flex-1 overflow-y-auto p-4 space-y-3 rounded-2xl border border-slate-200/70 dark:border-giga-border bg-white/60 dark:bg-giga-surface/60 backdrop-blur min-h-[300px] max-h-[60vh]"
    >
      {messages.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="text-5xl mb-3"><Icon name="smart_toy" /></div>
          <p className="text-slate-500 dark:text-giga-muted">
            Ask TeleCloud AI anything about your files!
          </p>
        </div>
      )}
      {messages.map((m, i) => (
        <ChatMessage key={m.id || i} message={m} />
      ))}
      {loading && (
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-giga-muted">
          <span className="h-2 w-2 rounded-full bg-giga-violet animate-bounce" />
          <span className="h-2 w-2 rounded-full bg-giga-violet animate-bounce" style={{ animationDelay: '0.15s' }} />
          <span className="h-2 w-2 rounded-full bg-giga-violet animate-bounce" style={{ animationDelay: '0.3s' }} />
          <span className="ml-2">TeleCloud is thinking…</span>
        </div>
      )}
    </div>
  );
}
