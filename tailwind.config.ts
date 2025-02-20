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
        secondary: "#02AAA4",
        accent: "#F27430",
        textdark: "rgb(141 147 165)",
        textdark2: "rgb(28 39 76)",
        backdrop: "#F3F4F6",
        textdark3: "#606882",
        textdark4: "#1c274c",
        backgroundColor: "#E5EAF4",
        backgroundColor2: "#E5EAF4",
        backgroundColor3: "#FFECE1",
        backgroundColor4: "#d0e9f3",
        backgroundColor5: "#F6F7FB",
      },
    },
  },
  plugins: [],
} satisfies Config;
