/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				light: "#ECECEC",
				dark: "#2d2d2d"
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"]
			},
			fontSize: {
				med: "38.69px"
			},
			lineHeight: {
				med: "14.51px"
			}
		}
	},
	plugins: []
};
