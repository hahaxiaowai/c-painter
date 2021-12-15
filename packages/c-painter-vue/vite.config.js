import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const { resolve } = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib:{
      entry:resolve(__dirname,'src/components/Menu/index.js'),
      name:'menu',
      fileName:'Menu.js'
    },
    rollupOptions: {
      // input: {
      //   main: resolve(__dirname,'src/components/Menu/index.js'),
      // },
    },
  },
});
