import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bone: "#EBE3D2",
        sand: "#CCBFA3",
        sage: "#A4AC86",
        muted: "#737A5D",
        olive: "#414833",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Source Sans 3", "sans-serif"],
        serif: ["var(--font-sans)", "Source Sans 3", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px rgba(65, 72, 51, 0.08)",
        glass: "0 18px 45px rgba(65, 72, 51, 0.12)",
      },
      fontSize: {
        xs: ["0.8333rem", { lineHeight: "1rem" }],
      },
    },
  },
  plugins: [],
};

export default config;
