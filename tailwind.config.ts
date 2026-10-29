import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F3F2EE",
        ink: "#161817",
        muted: "#6F797B",
        line: "#D8D8D2",
        mist: "#DDE1E0",
        steel: "#8A989E",
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          "Helvetica",
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          "sans-serif",
        ],
        display: [
          '"Times New Roman"',
          '"Songti SC"',
          "SimSun",
          '"Noto Serif SC"',
          "serif",
        ],
      },
      letterSpacing: {
        widest: "0.24em",
      },
    },
  },
  plugins: [],
};

export default config;
