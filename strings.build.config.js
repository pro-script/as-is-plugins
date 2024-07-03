import { Builder } from './lib/Builder.class.js';

export const numbersBuildConfig = {
    browser: {
        out: 'fileOut',
        pattern: 'constPattern',
        browserExport: true,
        path: './dist/strings.browser.js'
    },
    esm: {
        out: 'fileOut',
        pattern: 'constPattern',
        es6export: true,
        path: './dist/strings.esm.mjs'
    },
    common: {
        out: 'fileOut',
        pattern: 'constPattern',
        commonExport: true,
        path: './dist/strings.common.cjs'
    }
};

switch (process.env.NODE_ENV) {
    case 'esm': new Builder(numbersBuildConfig.esm);
        break;
    case 'browser': new Builder(numbersBuildConfig.browser);
        break;
    case 'common': new Builder(numbersBuildConfig.common);
        break;
    default:
        Object.keys(numbersBuildConfig).forEach((env)=> new Builder(numbersBuildConfig[env]));
}
