/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '340px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['REM', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          primary: {
            main: "#3B82F6",
            light: "#60A5FA",
            dark: "#2563EB",
            text: "#FFFFFF",
          },
          secondary: {
            main: "#F97316",
            light: "#FB923C",
            dark: "#EA580C",
            text: "#FFFFFF",
          },
          background: {
            default: "#FDFDFD",
            paper: "#F1F1F1",
            elevated: "#EEEEEE",
          },
          text: {
            primary: "#111827",
            secondary: "#6B7280",
            disabled: "#9CA3AF",
            hint: "#9CA3AF",
          },
          border: "#E5E7EB",
          divider: "#F3F4F6",
          error: "#EF4444",
          warning: "#F59E0B",
          info: "#06B6D4",
          success: "#22C55E",
        }
      },
    },
  },
  plugins: [],
}