/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        admin: {
          950: '#051F20', // darkest forest teal
          900: '#0B2B26', // deep pine surface
          800: '#163832', // rich forest card
          700: '#235347', // medium pine border
          400: '#8EB69B', // soft sage text & badge
          100: '#DAF1DE', // pale mint highlight & button
        },
        brand: {
          dark: '#2B0206',
          950: '#3D0308',
          900: '#5C060E',
          850: '#750812',
          800: '#8F0B17',
          700: '#B00E1C',
          600: '#D11424',
          500: '#E62434',
          400: '#F04C5A',
          300: '#F7818B',
          200: '#FAB6BC',
          100: '#FDE4E7',
          50: '#FFF5F6',
          amber: {
            DEFAULT: '#F59E0B',
            light: '#FBBF24',
            dark: '#D97706',
            hover: '#F59E0B',
          }
        }
      },
      fontFamily: {
        heading: ['Outfit', 'Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 35px -5px rgba(220, 38, 38, 0.45)',
        'glow-amber': '0 0 25px -3px rgba(245, 158, 11, 0.5)',
        'glow-sage': '0 0 25px -3px rgba(142, 182, 155, 0.45)',
        'glow-mint': '0 0 25px -3px rgba(218, 241, 222, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'card': '0 12px 28px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'crimson-radial': 'radial-gradient(ellipse at 50% 15%, rgba(225, 29, 72, 0.35) 0%, rgba(92, 6, 14, 0.95) 75%, #3D0308 100%)',
        'crimson-hero': 'radial-gradient(circle at 75% 30%, rgba(220, 38, 38, 0.5) 0%, rgba(143, 11, 23, 0.9) 50%, #450308 100%)',
      }
    },
  },
  plugins: [],
};
