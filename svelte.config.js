import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { writable } from 'svelte/store';

/** @type {import('@sveltejs/kit').Config} */
	
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
	serviceWorker: {
		register: false,
	},
    files: {
      serviceWorker: 'src/my-sw.js', // or `src/my-sw.ts`
    }
  }
};


export default config;
