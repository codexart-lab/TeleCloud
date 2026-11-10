const SIZES = {
  xs: 'text-[0.875rem]',
  sm: 'text-[1.125rem]',
  md: 'text-[1.375rem]',
  lg: 'text-[1.75rem]',
  xl: 'text-[2.25rem]',
  '2xl': 'text-[3rem]',
};

/**
 * Google Material Symbols (Rounded) icon.
 * Inherits font-size by default, so a parent text-* class can drive the size.
 *
 * @param {object} props
 * @param {string} props.name  Material symbol ligature name, e.g. "folder_open"
 * @param {keyof typeof SIZES} [props.size]
 * @param {boolean} [props.filled]  Use the filled variant
 * @param {string} [props.label]    Accessible label; hidden from AT when omitted
 */
export default function Icon({
  name,
  size,
  filled = false,
  weight = 400,
  className = '',
  label,
  ...rest
}) {
  const classes = [
    'material-symbols-rounded',
    'inline-block select-none align-middle leading-none',
    SIZES[size] || '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={classes}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
      }}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      {...rest}
    >
      {name}
    </span>
  );
}
