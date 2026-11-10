import { fileIcon } from '../../utils/fileIcons.js';
import { formatBytes, relativeTime, truncate } from '../../utils/format.js';
import { api } from '../../api/index.js';
import Icon from '../common/Icon.jsx';

export default function FileItem({ file, onStar, onDelete, onShare, onPreview }) {
  const downloadUrl = api.downloadUrl(file.id);
  return (
    <div className="card p-4 flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <div className="h-12 w-12 rounded-xl bg-giga-panel grid place-items-center text-2xl flex-shrink-0">
          <Icon name={fileIcon(file.mime, file.name)} />
        </div>
        <div className="min-w-0 flex-1">
          <button
            onClick={() => onPreview?.(file)}
            className="text-left text-sm font-medium truncate w-full hover:text-giga-violet"
            title={file.name}
          >
            {truncate(file.name, 32)}
          </button>
          <div className="text-xs text-slate-500 dark:text-giga-muted mt-0.5">
            {formatBytes(file.size)} · {relativeTime(file.created_at)}
          </div>
        </div>
        <button
          onClick={() => onStar?.(file)}
          className={`text-xl transition-transform hover:scale-110 ${file.starred ? '' : 'opacity-40'}`}
          title={file.starred ? 'Unstar' : 'Star'}
        >
          <Icon name="star" filled={file.starred} />
        </button>
      </div>

      <div className="flex items-center gap-1.5 flex-wrap">
        <a
          href={downloadUrl}
          className="btn-ghost text-xs px-2.5 py-1.5"
          download={file.name}
        >
          <Icon name="download" className="text-[1.1em]" /> Download
        </a>
        <button onClick={() => onPreview?.(file)} className="btn-ghost text-xs px-2.5 py-1.5">
          <Icon name="visibility" className="text-[1.1em]" /> Preview
        </button>
        <button onClick={() => onShare?.(file)} className="btn-ghost text-xs px-2.5 py-1.5">
          <Icon name="link" className="text-[1.1em]" /> Share
        </button>
        <button
          onClick={() => onDelete?.(file)}
          className="text-xs px-2.5 py-1.5 rounded-full border border-red-500/30 text-red-500 hover:bg-red-500/10 transition"
        >
          <Icon name="delete" />
        </button>
      </div>
    </div>
  );
}
