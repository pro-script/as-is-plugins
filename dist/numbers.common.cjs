const NumbersValidator = {};
NumbersValidator.response = function(arg, result) {
        if(this.error) return result !== false ? arg: this.typeError([arg, 'value that passed validation']);
        else return result;
    };
NumbersValidator.zero = function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = arg === 0;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.even = function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = arg % 2 === 0;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.odd = function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = Math.abs(arg % 2) === 1;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.positive = function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = arg > 0 ;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.negative = function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = arg < 0 ;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.isFinite = function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = Number.isFinite(arg);
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.positiveInteger = function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = Number.isInteger(arg) && arg > 0;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.negativeInteger = function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = Number.isInteger(arg) && arg < 0;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.NaN = function (arg) {
        const result = isNaN(arg);
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.between = function (options) {
        const { min, max, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(min, 'number', 'primitive');
        this.check(max, 'number', 'primitive');
        const result = arg >= min && arg <= max;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.greater = function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = arg > value;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.less = function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = arg < value;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.equalGreater = function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = arg >= value;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.max = function (options) {
        return this.integrate.equalGreater(options)
    };
NumbersValidator.equalLess = function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = arg <= value;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.min = function (options) {
        return this.integrate.equalLess(options)
    };
NumbersValidator.multiple = function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = !(value % arg);
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.port = function (arg) {
        this.check(arg, 'number', 'primitive');
        const result =  arg >= 0 && arg <= 65535;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.precision = function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = value === ((arg.toString()).split('.'))[1].length;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.safe = function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = arg >= Number.MIN_SAFE_INTEGER && arg <= Number.MAX_SAFE_INTEGER;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.digits = function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = value === (Math.abs(arg).toString()).length;
        return this.integrate.response.bind(this)(arg, result);
    };
NumbersValidator.ISBN10 = function (arg) {
        return this.integrate.digits({ arg, value: 10 });
    };
NumbersValidator.ISBN13 = function (arg) {
        return this.integrate.digits({ arg, value: 13 });
    };
NumbersValidator.EAN = function (arg) {
        return this.integrate.digits({ arg, value: 13 });
    };
NumbersValidator.SSN = function (arg) {
        return this.integrate.digits({ arg, value: 9 });
    };
NumbersValidator.VIN = function (arg) {
        this.check(arg, 'number', 'primitive');
        return this.integrate.digits({ arg, value: 17 });
    };
NumbersValidator.INN10 = function (arg) {
        return this.integrate.digits({ arg, value: 10 });
    };
NumbersValidator.INN12 = function (arg) {
        return this.integrate.digits({ arg, value: 12 });
    };
NumbersValidator.GLN = function (arg) {
        return this.integrate.digits({ arg, value: 13 });
    };
NumbersValidator.IMEI = function (arg) {
        return this.integrate.digits({ arg, value: 15 });
    };
NumbersValidator.NPI = function (arg) {
        return this.integrate.digits({ arg, value: 10 });
    };
module.exports = { NumbersValidator };