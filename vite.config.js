import fs from "fs";
import path from "path";
import { fileURLToPath, URL } from "url";

import { defineConfig } from 'vite'

import { svelte } from "@sveltejs/vite-plugin-svelte";

import { viteSingleFile } from "vite-plugin-singlefile";
import { createHtmlPlugin } from "vite-plugin-html";

// Extract the config name from the command they ran
const [ _, config = "default" ] = (process.env.npm_lifecycle_event || "").split(":");

const configPath = fileURLToPath(new URL(`./config/${config}.json`, import.meta.url));

const configFile = fs.readFileSync(configPath);

const appConfig = configFile.toString();

export default defineConfig({
    plugins: [
        // Compile svelte
        svelte(),

        // Build everything to a single file
        viteSingleFile(),

        // Minify
        createHtmlPlugin()
    ],

    resolve:{
        // So we can: import X from "src/my-thing"
        alias:{
            src : path.resolve(__dirname, './src')
        },
    },

    // Expose the loaded config to the build.
    define: {
        // I guess this gets auto parsed as JSON..?
        appConfig,
    },

    // Build to a folder that is the name of the selected config.
    build: {
        target: "es2020",
        outDir: path.resolve(__dirname, `./dist/${config}`)
    },
    
    optimizeDeps : {
        esbuildOptions : {
            target: "es2020"
        }
    },
})



