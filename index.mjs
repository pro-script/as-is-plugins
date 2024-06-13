import { NumbersValidator } from './lib/numbers-validator.mjs';
import { Checker, BaseInterface, MicroTest, Utility, primitiveTypes, structuralTypes,
    otherTypes, aliasTypes }  from '@pro-script/as-is';
export const {
    multi, Interface, as, is, IF, ELSE, END, optional, get, macro, strict, Enum
}  = new Checker({ integrate: NumbersValidator });

export const { START, STOP, FINISH, METHOD, PROPERTY, IS, CHECK, passed, failed } = new MicroTest({ is, as });

export default { multi, Interface, as, is, IF, ELSE, END, optional, get, macro, strict, Enum, BaseInterface,
    MicroTest, Utility, primitiveTypes, structuralTypes, otherTypes, aliasTypes, START, STOP, FINISH, METHOD, PROPERTY,
    IS, CHECK, passed, failed };

