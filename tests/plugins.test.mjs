import { as, is, START, STOP, FINISH, CHECK } from '../index.mjs';

START.all
{
    CHECK['is.zero'](is.zero(0));
    CHECK['is.even'](is.even(2));
    CHECK['is.odd'](is.odd(1));
    CHECK['is.positive'](is.positive(1.1));
    CHECK['is.negative'](is.negative(-1.1));
    CHECK['is.positiveInteger'](is.positiveInteger(1));
    CHECK['is.negativeInteger'](is.negativeInteger(-1));
    CHECK['is.isFinite'](is.isFinite(0));
    CHECK['is.NaN'](is.NaN(NaN));
    CHECK['is.between'](is.between({ arg: 5, min: 0, max: 10 }));
    CHECK['is.greater'](is.greater({ arg: 15, value: 5 }));
    CHECK['is.less'](is.less({ arg: 5, value: 15 }));
    CHECK['is.equalGreater'](is.equalGreater({ arg: 5, value: 5 }));
    CHECK['is.equalLess'](is.equalLess({ arg: 5, value: 5 }));
    CHECK['is.max'](is.max({ arg: 5, value: 5 }));
    CHECK['is.min'](is.min({ arg: 5, value: 5 }));
    CHECK['is.multiple'](is.multiple({ arg: 5, value: 15 }));
    CHECK['is.port'](is.port(5));
    CHECK['is.safe'](is.safe(Number.MAX_SAFE_INTEGER));
    CHECK['is.precision'](is.precision({ arg: 5.22, value: 2 }));
    CHECK['is.digits'](is.digits({ arg: 12345, value: 5 }));
    CHECK['is.ISBN10'](is.ISBN10(1234567890));
    CHECK['is.ISBN13'](is.ISBN13(1234567890123));
    CHECK['is.EAN'](is.EAN(1234567890123));
    CHECK['is.SSN'](is.SSN(123456789));
    CHECK['is.VIN'](is.VIN(12345678901234567));
    CHECK['is.INN10'](is.INN10(1234567890));
    CHECK['is.INN12'](is.INN12(123456789012));
    CHECK['is.GLN'](is.GLN(1234567890123));
    CHECK['is.IMEI'](is.IMEI(123456789012345));
    CHECK['is.NPI'](is.NPI(1234567890));

}
FINISH.all;
console.log(as.zero(1));
