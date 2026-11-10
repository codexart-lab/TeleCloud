import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../api/index.js';
import { formatBytes, formatDateTime } from '../utils/format.js';
import Button from '../components/common/Button.jsx';
import Input from '../components/common/Input.jsx';
import Loader from '../components/common/Loader.jsx';
import Icon from '../components/common/Icon.jsx';

export default function PublicShare() {
  const { token } = useParams();
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [needsPassword, setNeedsPassword] = useState(false);

  useEffect(() => {
    let cancel = false;
    api
      .publicShare(token)
      .then((data) => {
        if (cancel) return;
        setMeta(data);
        setNeedsPassword(Boolean(data.requires_password));
      })
      .catch((e) => {
        if (!cancel) setError(e.message || 'Share not found');
      })
      .finally(() => {
        if (!cancel) setLoading(false);
      });
    return () => {
      cancel = true;
    };
  }, [token]);

  const download = async () => {
    if (needsPassword && !password) return;
    setDownloading(true);
    try {
      const res = await fetch(api.publicShareDownloadUrl(token), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(password ? { password } : {}),
        credentials: 'include',
      });

      if (!res.ok) {
        let msg = `Download failed (${res.status})`;
        try {
          const err = await res.json();
          if (err.error) msg = err.error;
        } catch {}
        throw new Error(msg);
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = meta?.file_name || 'download';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setDownloaded(true);
    } catch (e) {
      setError(e.message);
    } finally {
      setDownloading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-[#eef2f9] dark:bg-giga-canvas">
        <Loader label="Loading share…" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen grid place-items-center bg-[#eef2f9] dark:bg-giga-canvas p-6">
        <div className="card-static max-w-md w-full p-8 text-center">
          <div className="text-5xl mb-4"><Icon name="sentiment_dissatisfied" /></div>
          <h1 className="font-display text-2xl font-light mb-2">Share unavailable</h1>
          <p className="text-sm text-slate-500 dark:text-giga-muted">{error}</p>
          <Link to="/" className="btn-primary inline-flex mt-6 px-5 py-2.5">
            <Icon name="arrow_back" className="text-[1.1em]" /> Back to TeleCloud
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid place-items-center bg-[#eef2f9] dark:bg-giga-canvas p-6">
      <div className="card-static max-w-md w-full p-8">
        <div className="text-center mb-6">
          <div className="h-16 w-16 rounded-2xl bg-giga-panel grid place-items-center text-white text-3xl mx-auto mb-4">
            <Icon name="draft" />
          </div>
          <h1 className="font-display text-2xl font-light break-all">{meta?.file_name}</h1>
          <p className="text-xs text-slate-500 dark:text-giga-muted mt-1">
            Shared via TeleCloud
          </p>
        </div>

        <div className="space-y-2 text-sm mb-6">
          <div className="flex justify-between">
            <span className="text-slate-500 dark:text-giga-muted">Size</span>
            <span className="font-medium">{formatBytes(meta?.file_size || 0)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 dark:text-giga-muted">Downloads</span>
            <span className="font-medium">{meta?.downloads || 0}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 dark:text-giga-muted">Expires</span>
            <span className="font-medium">
              {meta?.expires_at ? formatDateTime(meta.expires_at) : 'Never'}
            </span>
          </div>
        </div>

        {needsPassword && !downloaded && (
          <div className="mb-4">
            <Input
              label="Password protected"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && download()}
            />
          </div>
        )}

        {downloaded ? (
          <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-center text-sm text-emerald-600 dark:text-emerald-400">
            <Icon name="check_circle" className="mr-1 text-[1.1em]" /> Download started!
          </div>
        ) : (
          <Button
            onClick={download}
            loading={downloading}
            disabled={needsPassword && !password}
            className="w-full py-3"
          >
            <Icon name="download" className="text-[1.1em]" /> Download file
          </Button>
        )}

        <p className="mt-6 text-xs text-slate-500 dark:text-giga-muted text-center">
          Powered by{' '}
          <Link to="/" className="link font-medium">
            TeleCloud
          </Link>{' '}
          <Icon name="cloud" className="text-[1.1em]" />
        </p>
      </div>
    </div>
  );
}
