export default function Input({ label, error, hint, className = '', textarea = false, ...rest }) {
  const Comp = textarea ? 'textarea' : 'input';
  return (
    <div className={className}>
      {label && <label className="label">{label}</label>}
      <Comp className="input" {...rest} />
      {hint && !error && (
        <p className="mt-1.5 text-xs text-slate-500 dark:text-giga-faint">{hint}</p>
      )}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
