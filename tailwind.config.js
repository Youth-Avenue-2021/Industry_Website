module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["bg-white", "bg-yellowColor", "text-center", "text-left", "text-right"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        // poppins: ["body, sans-serif"],
      },
      colors: {
        yellowColor: "#FFE300",
        whiteSmoke: "#f5f5f5",
        darkGreen: "#00241B",
      },
      backgroundImage: {
        factoryImg: "url(/src/Assets/factory.png)",
      },
    },
  },
  plugins: [],
};
