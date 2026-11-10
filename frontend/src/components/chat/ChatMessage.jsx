import { relativeTime } from '../../utils/format.js';
import Icon from '../common/Icon.jsx';

export default function ChatMessage({ message }) {
  const isUser = message.direction === 'out';
  return (
    <div className={`flex gap-2 ${isUser ? 'justify-end' : 'justify-start'} animate-pop`}>
      {!isUser && (
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-sm dark:border-giga-border dark:bg-giga-panel">
          <Icon name="smart_toy" className="text-[1.1em]" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
          isUser
            ? 'rounded-br-md bg-slate-900 text-white dark:bg-giga-action dark:text-giga-action-ink'
            : 'rounded-bl-md bg-slate-100 text-slate-900 dark:bg-giga-panel dark:text-giga-ink'
        }`}
      >
        <div className="whitespace-pre-wrap break-words">{message.text}</div>
        <div
          className={`mt-1 text-[10px] ${
            isUser ? 'text-white/60 dark:text-black/50' : 'text-slate-400 dark:text-giga-faint'
          }`}
        >
          {relativeTime(message.created_at)}
        </div>
      </div>
      {isUser && (
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-sm dark:border-giga-border dark:bg-giga-panel">
          <Icon name="person" className="text-[1.1em]" />
        </div>
      )}
    </div>
  );
}
