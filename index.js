import { Checker, BaseInterface, MicroTest, Utility } from '@pro-script/as-is';
import { NumbersValidator } from './dist/numbers.esm.mjs';
import { StringsValidator } from './dist/strings.esm.mjs';

const checker = new Checker({
    'IF/ELSE/END': true,
    strict: true,
    Enum: true,
    utility: true,
    integrate: Object.assign(NumbersValidator, StringsValidator)
});
export const { multi, Interface, as, is, IF, ELSE, END, optional, get, macro, strict, Enum } = checker;
export const { START, STOP, FINISH, METHOD, PROPERTY, IS, CHECK, passed, failed } = new MicroTest({ is, as });