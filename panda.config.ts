import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
	preflight: true,
	jsxFramework: "preact",

	// Where to look for your css declarations
	include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],

	// Files to exclude
	exclude: [],

	// The output directory for your css system
	outdir: "styled-system",

	theme: {
		tokens: {
			fonts: {
				code: { value: "consolas, monaco, monospace" },
			},
		}
	},

	globalCss: {
		html: {
			fontFamily: "system-ui, sans-serif",
			m: 0,
			p: 0,
			scrollPaddingTop: "header",
		},
		main: {
			height: "100vh",
			maxHeight: "full",
			backgroundColor: "white",
			display: "flex",
			flexDirection: "column",
			color: "text",
			lineHeight: 1.8,
		}
	}
});
