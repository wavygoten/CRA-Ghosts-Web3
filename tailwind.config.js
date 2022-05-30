// tailwind.config.js

module.exports = {
	darkMode: "media",
	purge: ["./src/**/*.{ts,tsx}"],
	theme: {
		colors: {
			// Configure your color palette here
			cyan: "#00FFFF",
			seashore: "#6EA1C3",
			navdark: "#1b1b1b",
			navlight: "#c3c3c3",
			maindark: "#242424",
			mainlight: "#f4f4f4",
		},
	},
	variants: {
		extend: {
			backgroundColor: ["responsive", "hover", "focus", "group-hover"],
			textColor: ["responsive", "hover", "focus", "group-hover"],
		},
	},
	plugins: [],
};
