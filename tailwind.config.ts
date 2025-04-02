// tailwind.config.js
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF",  // Custom blue
          secondary: "#c96c4e", // Custom yellow
          accent: "#10B981",   // Custom green
        },
      },
    },
    plugins: [],
  };
  