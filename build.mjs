import { Builder } from './lib/Builder.class.mjs';

export const buildConfig = {
    browser: {
        out: 'fileOut',
        pattern: 'constPattern',
        browserExport: true,
        path: './dist/proScript.browser.js'
    },
    esm: {
        out: 'fileOut',
        pattern: 'constPattern',
        es6export: true,
        path: './dist/proScript.esm.mjs'
    },
    common: {
        out: 'fileOut',
        pattern: 'constPattern',
        commonExport: true,
        path: './dist/proScript.common.js'
    }
};

switch (process.env.NODE_ENV) {
    case 'esm': new Builder(buildConfig.esm);
        break;
    case 'browser': new Builder(buildConfig.browser);
        break;
    case 'common': new Builder(buildConfig.common);
        break;
    default:
        Object.keys(buildConfig).forEach((env)=> new Builder(buildConfig[env]));
}
