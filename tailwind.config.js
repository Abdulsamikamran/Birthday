module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // Make sure Tailwind scans these files for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0066", // Add any custom colors you need
      },
      fontFamily: {
        custom: ["Poppins", "sans-serif"], // Custom fonts
      },
    },
  },
  plugins: [],
};
