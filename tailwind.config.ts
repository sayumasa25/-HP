import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          beige: "var(--brand-beige)",
          charcoal: "var(--brand-charcoal)",
          accent: "var(--brand-accent)",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        "soft-xl": "0 10px 20px rgba(0,0,0,0.07)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
