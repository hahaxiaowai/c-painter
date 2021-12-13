import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
// import json from 'rollup-plugin-json';

export default {
  input: "src/index.js",
  output: {
    name: "c-painter",
    file: "dist/c-painter.min.js",
    format: "umd",
  },
  plugins: [
    nodeResolve({
      browser: true,
    }),
    // json(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      // babelHelpers:"runtime"
    }),
    terser()
  ],
};
