import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#616161",
        subColor: "#0D47A1",
        accentColor: "#FF5722",
        baseColor: "#EEEEEE",
      },
    },
  },
  plugins: [],
} satisfies Config;
