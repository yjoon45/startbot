import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  input: './src/main.ts',
  output: {
    dir: './dist/js',
    format: 'iife',
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript(),
    isProduction && (await import('@rollup/plugin-terser')).default(),
  ],
});
