/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        xs: '1rem',
        sm: '1rem',
        // md: '1.5rem',
        // lg: '1.5rem',
        // xl: '1.5rem',
        // '2xl': '2rem',
      },
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      '2xl': { min: '1280px' },
      xl: { min: '1024px', max: '1279px' },
      lg: { min: '857px', max: '1023px' },
      md: { min: '640px', max: '856px' },
      sm: { min: '480px', max: '639px' },
      xs: { max: '479px' },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        'description': 'clamp(24px, 2.5vw, 36px)'
      },
      fontFamily: {
        'freisgeist': 'Freisgeist',
        'jakarta-sans': 'Plus Jakarta Sans, sans-serif',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "cta-pulse": {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.5)', opacity: 0 },
          '50.1%, 100%': { transform: 'scale(1)', opacity: 1 },
        },
        "indicator-pulse": {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(3)', opacity: 0 },
          '50.1%, 100%': { transform: 'scale(1)', opacity: 1 },
        },
        "img-pulse": {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
        "up-and-down": {
          '0%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        "down-and-up": {
          '0%': { transform: 'translateY(10px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(10px)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cta-pulse": "cta-pulse infinite 2s ease-out",
        "img-pulse": "img-pulse infinite 5s linear alternate",
        "indicator-pulse": "indicator-pulse infinite 2s ease-out",
        "floating-mockup": "up-and-down infinite 5s linear",
        "reverse-floating-mockup": "down-and-up infinite 5s linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}