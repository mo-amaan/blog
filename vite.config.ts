// vite is the bundler and builder , the dev server , does hard reloading.
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({ plugins: [sveltekit(), devtoolsJson()] });
