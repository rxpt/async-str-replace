import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import babel from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";

const plugins = [
  typescript(),
  nodeResolve(),
  commonjs(),
  babel({
    babelHelpers: "bundled",
    presets: ["@babel/preset-env"],
  }),
];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        dir: "dist",
        format: "esm",
      },
      {
        file: "dist/index.umd.js",
        format: "umd",
        name: "asyncStrReplace",
      },
      {
        file: "dist/index.umd.min.js",
        format: "umd",
        name: "asyncStrReplace",
        plugins: [terser()],
      },
    ],
    plugins,
  },
  {
    input: "src/index.ts",
    output: {
      file: "types/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];
