/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./slices/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"my-olive": "#5D750F",
				"my-gold": "#E4C87F",
				"my-light-gold": "#F4E9CC",
				"my-velour": "#560039",
				"my-black": "#101010",
				"my-dark-grey": "#434649",
			},
			fontFamily: {
				"my-inter-regular": ["my-inter-regular"],
				"my-satoshi-bold": ["my-satoshi-bold"],
			},
		},
	},
	plugins: [],
};
