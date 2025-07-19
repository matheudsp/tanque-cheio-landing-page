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
            main: "#253760",      // Um azul um pouco mais claro para elementos principais
            dark: "#1D2B4A",      // Azul profundo (Meia-noite) para o Hero e Footer
            text: "#FFFFFF",
          },
          secondary: {
            main: "#FFC107",      // Amarelo-Dourado principal (Energia)
            light: "#FFD54F",     // Tom mais claro para hovers
            dark: "#FFA000",      // Tom mais escuro para hovers
            text: "#1D2B4A",      // Texto escuro para bom contraste no amarelo
          },
          background: {
            default: "#F8F7F2",    // Off-white aconchegante (Areia)
            paper: "#FFFFFF",     // Branco puro para cards e elementos de destaque
          },
          text: {
            primary: "#1A1A1A",    // Preto suave, menos agressivo que o #000
            secondary: "#555555",  // Cinza escuro para textos de apoio
            disabled: "#9CA3AF",
          },
          border: "#EAE8E1",       // Cor de borda que combina com o fundo "Areia"
          divider: "#F3F4F6",
          error: "#D32F2F",        // Vermelho mais sóbrio
          warning: "#FFA000",      // Reutilizando o amarelo escuro
          info: "#0288D1",         // Azul informativo
          success: "#388E3C",      // Verde mais encorpado
        }
      },
    },
  },
  plugins: [],
}