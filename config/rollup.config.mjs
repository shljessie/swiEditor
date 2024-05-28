import commonjs from "rollup-plugin-commonjs";
import copy from 'rollup-plugin-copy';
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import svg from "rollup-plugin-svg-import";
import terser from '@rollup/plugin-terser';
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/iink.ts",
    output: [
      {
        name: "iink",
        file: "dist/iink.min.js",
        format: "umd",
        exports: "named",
      },
      {
        file: "./dist/iink.esm.js",
        format: "esm",
      },
    ],
    plugins: [
      commonjs({
        include: ["node_modules/json-css/**"],
      }),
      resolve(),
      typescript(),
      terser({
        keep_fnames: true,
        compress: true,
      }),
      postcss({
        minimize: true,
        inject: false
      }),
      svg({
        stringify: true
      }),
      copy({
        targets: [
          { src: 'src/index.html', dest: 'dist' }
        ]
      })
    ],
  },
  {
    input: "src/iink.ts",
    plugins: [
      dts(),
      postcss({
        inject: false
      }),
    ],
    output: {
      file: `dist/iink.d.ts`,
      format: "es",
    }
  }
];
