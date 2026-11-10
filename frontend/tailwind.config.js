/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Emilio', 'Instrument Serif', 'Georgia', 'Times New Roman', 'serif'],
        label: ['Giga Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: {
          950: '#060912',
          900: '#0b1020',
          800: '#0f172a',
        },
        // Giga.ai marketing palette — see DESIGN.md
        giga: {
          canvas: '#000000',
          surface: '#0F0E0D',
          raised: '#131313',
          deep: '#07070B',
          panel: '#1E1F1F',
          border: '#262828',
          ink: '#FCFCFC',
          'ink-strong': '#FFFFFF',
          muted: '#969696',
          soft: '#BBBBBB',
          faint: '#828282',
          action: '#FCFCFC',
          'action-ink': '#000000',
          link: '#0000EE',
          blue: '#2195FF',
          violet: '#6640FF',
          pink: '#E89EEE',
          rose: '#FF9AEA',
          orange: '#F76B15',
          green: '#C3EACA',
          warm: '#3E3930',
          fog: '#F0F0F0',
          lilac: '#C1B2FF',
        },
      },
      fontSize: {
        // Giga display scale — delicate serif, tight tracking
        hero: ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '300' }],
        section: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '300' }],
        'section-sm': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '300' }],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pop: 'pop 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        shimmer: 'shimmer 1.6s linear infinite',
        breathe: 'breathe 7s ease-in-out infinite',
        wave: 'wave 2.4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pop: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        breathe: {
          '0%,100%': { transform: 'scale(1)', opacity: 0.85 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
        },
        wave: {
          '0%,100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
};
