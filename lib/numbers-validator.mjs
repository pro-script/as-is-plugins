
function response(arg, result) {
    if(this.error) return result !== false ? arg: this.typeError([arg, 'value that passed validation']);
    else return result;
}

export const NumbersValidator = {
    context: this,
    zero: function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = arg === 0;
        return response.bind(this)(arg, result);
    },
    even: function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = arg % 2 === 0;
        return response.bind(this)(arg, result);
    },
    odd: function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = Math.abs(arg % 2) === 1;
        return response.bind(this)(arg, result);
    },
    positive: function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = arg > 0 ;
        return response.bind(this)(arg, result);
    },
    negative: function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = arg < 0 ;
        return response.bind(this)(arg, result);
    },
    isFinite: function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = Number.isFinite(arg);
        return response.bind(this)(arg, result);
    },
    positiveInteger: function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = Number.isInteger(arg) && arg > 0;
        return response.bind(this)(arg, result);
    },
    negativeInteger: function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = Number.isInteger(arg) && arg < 0;
        return response.bind(this)(arg, result);
    },
    NaN: function (arg) {
        const result = isNaN(arg);
        return response.bind(this)(arg, result);
    },
    between: function (options) {
        const { min, max, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(min, 'number', 'primitive');
        this.check(max, 'number', 'primitive');
        const result = arg >= min && arg <= max;
        return response.bind(this)(arg, result);
    },
    greater: function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = arg > value;
        return response.bind(this)(arg, result);
    },
    less: function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = arg < value;
        return response.bind(this)(arg, result);
    },
    equalGreater: function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = arg >= value;
        return response.bind(this)(arg, result);
    },
    max: function (options) {
        return this.integrate.equalGreater(options)
    },
    equalLess: function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = arg <= value;
        return response.bind(this)(arg, result);
    },
    min: function (options) {
        return this.integrate.equalLess(options)
    },
    multiple: function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = !(value % arg);
        return response.bind(this)(arg, result);
    },
    port: function (arg) {
        this.check(arg, 'number', 'primitive');
        const result =  arg >= 0 && arg <= 65535;
        return response.bind(this)(arg, result);
    },
    precision: function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = value === ((arg.toString()).split('.'))[1].length;
        return response.bind(this)(arg, result);
    },
    safe: function (arg) {
        this.check(arg, 'number', 'primitive');
        const result = arg >= Number.MIN_SAFE_INTEGER && arg <= Number.MAX_SAFE_INTEGER;
        return response.bind(this)(arg, result);
    },
    digits: function (options) {
        const { value, arg } = options;
        this.check(arg, 'number', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = value === (Math.abs(arg).toString()).length;
        return response.bind(this)(arg, result);
    },
    ISBN10: function (arg) {
        return this.integrate.digits({ arg, value: 10 });
    },
    ISBN13: function (arg) {
        return this.integrate.digits({ arg, value: 13 });
    },
    EAN: function (arg) {
        return this.integrate.digits({ arg, value: 13 });
    },
    SSN: function (arg) {
        return this.integrate.digits({ arg, value: 9 });
    },
    VIN: function (arg) {
        this.check(arg, 'number', 'primitive');
        return this.integrate.digits({ arg, value: 17 });
    },
    INN10: function (arg) {
        return this.integrate.digits({ arg, value: 10 });
    },
    INN12: function (arg) {
        return this.integrate.digits({ arg, value: 12 });
    },
    GLN: function (arg) {
        return this.integrate.digits({ arg, value: 13 });
    },
    IMEI: function (arg) {
        return this.integrate.digits({ arg, value: 15 });
    },
    NPI: function (arg) {
        return this.integrate.digits({ arg, value: 10 });
    }

}
