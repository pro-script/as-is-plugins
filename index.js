import { NumbersValidator } from './dist/numbers.esm.mjs';
import { StringsValidator } from './lib/strings-validator.js';
import {
    Checker,
    BaseInterface,
    MicroTest,
    Utility,
    primitiveTypes,
    structuralTypes,
    otherTypes,
    aliasTypes
}  from '@pro-script/as-is';

export const {
    multi,
    Interface,
    as,
    is,
    IF,
    ELSE,
    END,
    optional,
    get,
    macro,
    strict,
    Enum
}  = new Checker({
    integrate: Object.assign(NumbersValidator, StringsValidator),
    'IF/ELSE/END': true,
    strict: true,
    Enum: true,
    utility: true
});

export const { START, STOP, FINISH, METHOD, PROPERTY, IS, CHECK, passed, failed } = new MicroTest({ is, as });

export default {
    multi,
    Interface,
    as,
    is,
    IF,
    ELSE,
    END,
    optional,
    get,
    macro,
    strict,
    Enum,
    BaseInterface,
    MicroTest,
    Utility,
    primitiveTypes,
    structuralTypes,
    otherTypes,
    aliasTypes,
    START,
    STOP,
    FINISH,
    METHOD,
    PROPERTY,
    IS,
    CHECK,
    passed,
    failed,
};

