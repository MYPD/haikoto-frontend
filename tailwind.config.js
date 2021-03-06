module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}", 
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "media",
    theme: {
        extend: {
            screens: {
                portrait: { raw: "(orientation: portrait)" },
                landscape: { raw: "(orientation: landscape)" }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
