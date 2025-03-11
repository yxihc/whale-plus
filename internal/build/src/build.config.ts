import { buildOutput, wlRoot } from './utils/paths';
import type { OutputOptions } from 'rollup';

export const PKG_PREFIX = '@whale-plus';
export const PKG_NAME = 'whale-plus';
export const PKG_CAMELCASE_NAME = 'WhalePlus';
export const PKG_CAMELCASE_LOCAL_NAME = 'WhalePlusLocale';
export const PKG_BRAND_NAME = 'Whale plus';

export const REPO_OWNER = 'whale-plus';
export const REPO_NAME = 'whale-plus';
export const REPO_PATH = `${REPO_OWNER}/${REPO_NAME}`;
export const REPO_BRANCH = 'dev';

export const target = 'es2018';
export const moduleOutputs = [
  {
    format: 'esm',
    dir: `${buildOutput}/${PKG_NAME}/es`,
    exports: undefined,
    preserveModules: true,
    preserveModulesRoot: wlRoot,
    sourcemap: true,
    entryFileNames: '[name].mjs',
  },
  {
    format: 'cjs',
    dir: `${buildOutput}/${PKG_NAME}/lib`,
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: wlRoot,
    sourcemap: true,
    entryFileNames: '[name].js',
  },
] as OutputOptions[];
