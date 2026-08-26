/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          base: "#000000",
          strong: "#0a0a0a",
          muted: "#db3903",
          card: "#0a0a0a",
        },
        text: {
          primary: "#f4f2ed",
          muted: "rgba(244,242,237,0.56)",
          dim: "rgba(244,242,237,0.42)",
          faint: "rgba(244,242,237,0.28)",
        },
        accent: "#db3903",
        "accent-hover": "#c13503",
      },
      fontFamily: {
        bdo: ["BDO Grotesk Variable", "Space Grotesk", "Instrument Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "monospace"],
      },
      borderRadius: {
        xs: "50px",
        smi: "6px",
        card: "20px",
        phone: "32px",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
}

