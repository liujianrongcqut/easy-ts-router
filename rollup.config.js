import { uglify } from "rollup-plugin-uglify";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "dist/bundle.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "named",
    },
  ],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
    }),
    commonjs(),
    babel({
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false,
            targets: {
              ie: "10",
            },
          },
        ],
      ],
      sourceMap: true,
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            corejs: 2,
          },
        ],
      ],
      ignore: [/core-js/, /@babel\/runtime/],
      runtimeHelpers: true,
    }),
    uglify(),
  ],
};
