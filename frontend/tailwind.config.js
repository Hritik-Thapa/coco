/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-pattern": "url('./src/images/pattern-01.png')", // Single image
        "gradient-radial": "radial-gradient(circle, #1E40AF, #1E3A8A)", // Gradient example
        "hero-pattern": "url('https://example.com/hero-pattern.svg')",
      },
      colors: {
        neelo: {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
