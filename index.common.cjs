const { NumbersValidator } = require('./dist/numbers.common.cjs'); // Используем CommonJS версию
const { StringsValidator } = require('./dist/strings.common.cjs'); // Используем CommonJS версию
const {
    Checker,
    BaseInterface,
    MicroTest,
    Utility,
    primitiveTypes,
    structuralTypes,
    otherTypes,
    aliasTypes
} = require('@pro-script/as-is');

const {
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
} = new Checker({
    integrate: Object.assign(NumbersValidator, StringsValidator),
    'IF/ELSE/END': true,
    strict: true,
    Enum: true,
    utility: true
});

const { START, STOP, FINISH, METHOD, PROPERTY, IS, CHECK, passed, failed } = new MicroTest({ is, as });

module.exports = {
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
    failed
};
