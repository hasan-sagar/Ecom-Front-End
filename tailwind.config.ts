import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C50E0",
        textdark: "rgb(141 147 165)",
        textdark2: "rgb(28 39 76)",
        textdark3: "#606882",
        textdark4: "#1c274c"
      },
    },
  },
  plugins: [],
} satisfies Config;
