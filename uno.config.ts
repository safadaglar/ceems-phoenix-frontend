// uno.config.ts
import { defineConfig, presetUno, presetIcons, presetTypography, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:300,400,500,600,700',
        display: 'Montserrat:500,600,700,800',
      },
    }),
  ],
  theme: {
    colors: {
      brand: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981', // Ana Yeşil (Emerald-500)
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
      }
    }
  },
  shortcuts: {
    'layout-container': 'max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8',
    'btn-primary': 'bg-brand-500 hover:bg-brand-600 text-white font-medium py-2.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/30 flex items-center gap-2 cursor-pointer border-none',
    'btn-outline': 'border border-brand-500 text-brand-600 hover:bg-brand-50 font-medium py-2.5 px-6 rounded-xl transition-all duration-300 cursor-pointer',
    'nav-link': 'text-gray-600 hover:text-brand-600 font-medium transition-colors duration-200 text-sm tracking-wide',
    'section-title': 'font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3',
    'section-subtitle': 'text-brand-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block',
  }
})