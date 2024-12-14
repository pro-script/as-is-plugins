import {is} from "../index.js";

export const StringsValidator = {
    response: function(arg, result) {
        if(this.error) return result !== false ? arg: this.typeError([arg, 'value that passed validation']);
        else return result;
    },
    alphabetic: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[a-zA-Z]+$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    digit: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[0-9]+$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    lowerCase: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[a-z0-9]+$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    upperCase: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[A-Z0-9]+$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    camelCase: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[a-z]+([A-Z][a-z]*)*$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    snakeCase: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[a-z]+(_[a-z]+)*$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    kebabCase: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[a-z]+(-[a-z]+)*$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    trainCase: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[a-z]+(-[A-Z][a-z]+)*$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    path: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^(\/[a-zA-Z0-9_-]+)+\/?$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    uuid: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    http: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^http:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,}([\/a-zA-Z0-9#]+\/?)*$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    https: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^https:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,}([\/a-zA-Z0-9#]+\/?)*$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    url: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^(https?:\/\/)?([a-zA-Z0-9-\.]+\.[a-z]{2,}([\/a-zA-Z0-9#]+\/?)*)$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    email: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    ipv4: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    ipv6: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:)$/i.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    ip: function(arg) {
        return this.integrate.ipv4(arg) || this.integrate.ipv6(arg);
    },
    extension: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^\.[a-zA-Z0-9]+$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    hex: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    base64: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    dataUrl: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^data:([a-zA-Z]+\/[a-zA-Z0-9-.+]+)?;base64,([A-Za-z0-9+/=]+)$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    creditCard: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    masterCard: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^5[1-5][0-9]{14}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    visaCard: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^4[0-9]{12}(?:[0-9]{3})?$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    americanExpress: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^3[47][0-9]{13}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    dinersClub: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    domain: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    guid: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    hostname: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^(?=.{1,255}$)[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*\.?$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    jwt: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    emoji: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /\p{Emoji}/u.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    nanoid: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[A-Za-z0-9_-]{21}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    cuid: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^c[^\s-]{24}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    cuid2: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[0-9a-z]+$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    excludes: function(options) {
        const { value, arg } = options;
        this.check(arg, 'string', 'primitive');
        this.check(value, 'string', 'primitive');
        const result = !arg.includes(value);
        return this.integrate.response.bind(this)(arg, result);
    },
    time: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    datetime: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?Z?/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    date: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^\d{4}-\d{2}-\d{2}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    isoDate: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    isoDuration: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^P(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(\d+H)?(\d+M)?(\d+S)?)?$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    hash: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[a-f0-9]{64}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    isoTimeSecond: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^T\d{2}:\d{2}:\d{2}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    isoTimestamp: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    isoWeek: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^\d{4}-W\d{2}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    mac: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    mac48: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    mac64: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^([0-9A-Fa-f]{2}-){7}[0-9A-Fa-f]{2}$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    past: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = new Date(arg) < new Date();
        return this.integrate.response.bind(this)(arg, result);
    },
    future: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = new Date(arg) > new Date();
        return this.integrate.response.bind(this)(arg, result);
    },
    ascii: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[\x00-\x7F]+$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    base32: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[A-Z2-7]+=*$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    base58: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /^[1-9A-HJ-NP-Za-km-z]+$/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    before: function(options) {
        const { value, arg } = options;
        this.check(arg, 'string', 'primitive');
        const result = new Date(arg) < new Date(value);
        return this.integrate.response.bind(this)(arg, result);
    },
    after: function(options) {
        const { value, arg } = options;
        this.check(arg, 'string', 'primitive');
        const result = new Date(arg) > new Date(value);
        return this.integrate.response.bind(this)(arg, result);
    },
    maxStr: function (options) {
        const { value, arg } = options;
        this.check(arg, 'string', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = arg.length <= value;
        return this.integrate.response.bind(this)(arg, result);
    },
    minStr: function (options) {
        const { value, arg } = options;
        this.check(arg, 'string', 'primitive');
        this.check(value, 'number', 'primitive');
        const result = arg.length >= value;
        return this.integrate.response.bind(this)(arg, result);
    },
    hasUppercase: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /[A-Z]/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    hasLowercase: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /[a-z]/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    hasDigit: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /\d/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    hasSpecialCharacter: function(arg) {
        this.check(arg, 'string', 'primitive');
        const result = /[!@#$%^&*(),.?":{}|<>]/.test(arg);
        return this.integrate.response.bind(this)(arg, result);
    },
    password: function(arg) {
        this.check(arg, 'string', 'primitive');

        const result = this.integrate.hasUppercase(arg)
            && this.integrate.hasLowercase(arg)
            && this.integrate.hasDigit(arg)
            && this.integrate.hasSpecialCharacter(arg)
            && this.integrate.minStr({arg, value: 8})
            && this.integrate.maxStr({arg, value: 20})

        return this.integrate.response.bind(this)(arg, result);
    },
};
