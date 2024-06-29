import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://hayapo.dev",
    integrations: [
		preact(),
		icon({
			iconDir: "src/icons",
			include: {
				mdi: ["twitter", "github", "rss-box", "chevron-left", "chevron-right", "mastodon"],
				ri: ["bluesky-fill", "discord-fill"],
				"simple-icons": ["zenn", "hatenabookmark"],
				"icomoon-free": ["blog"],
				la: ["blog"]
			}
		})
	],
});
