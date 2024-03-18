import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'tsup';

const entries = readdirSync('./src').map(v => join('src', v));

export default defineConfig({
  entry: entries,
  splitting: true,
  shims: false,
  dts: true,
  format: ['cjs', 'esm'],
  target: 'esnext',
  clean: true,
});
