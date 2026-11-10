export default function LogoMark({ className = 'h-8 w-8' }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-giga-ink text-giga-canvas ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-1/2 w-1/2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.5 18h9a3.5 3.5 0 0 0 .45-6.97 5.5 5.5 0 0 0-10.7-1.36A4.2 4.2 0 0 0 7.5 18Z" />
      </svg>
    </span>
  );
}
