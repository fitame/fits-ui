import { readPackageSync } from 'read-pkg';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import prettier from 'rollup-plugin-prettier';
const pkg = readPackageSync();

const input = 'src/index.ts';
const external = Object.keys({ ...pkg.peerDependencies });
const sourcemap = true;

const exports = 'named';
const out = 'dist/index';

/** @type import('rollup').RollupOptions[] */
export default [
  {
    input,
    external,
    plugins: [
      commonjs(),
      resolve(),
      postcss({ 
        modules: true,
        extract: "fits-styles.css",
        use: ["sass"],
        plugins: [
          () => {
            return root => {
              root.prepend(
                postcss.atrule({
                  name: "import",
                  params: '"src/styles/global.scss"'
                })
              );
            };
          }
        ]  
      }),
      esbuild({
        sourceMap: sourcemap,
      }),
      prettier({
        sourceMap: sourcemap,
      })
    ],
    output: [
      {
        file: `${out}.js`,
        format: 'esm',
        sourcemap,
        exports,
      },
      {
        file: `${out}.cjs`,
        format: 'cjs',
        sourcemap,
        exports,
        name: pkg.name,
      },
    ],
  },
  {
    input,
    output: [{ file: `${out}.d.ts`, format: 'es' }],
    plugins: [dts()],
  },
];
