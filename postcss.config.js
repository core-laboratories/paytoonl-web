export default {
  extend: {
    maxWidth: {
      "8xl": "90rem",
      "9xl": "105rem",
      "10xl": "120rem",
    },
    zIndex: {
      1: "1",
      60: "60",
      70: "70",
      80: "80",
      90: "90",
      100: "100",
    },
    keyframes: {
      "spin-slow": {
        "100%": {
          transform: "rotate(-360deg)",
        },
      },
    },
    animation: {
      "spin-slow": "spin-slow 8s linear infinite",
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
  darkMode: "selector",
};
