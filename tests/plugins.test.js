import { as, is, START, STOP, FINISH, CHECK, get } from '../index.js';
const numbersMethods = [
    'is.zero', 'is.zero', 'is.even', 'is.odd', 'is.positive', 'is.negative', 'is.positiveInteger', 'is.negativeInteger',
    'is.finite', 'is.nan', 'is.between', 'is.greater', 'is.less', 'is.equalGreater', 'is.equalLess', 'is.max', 'is.min',
    'is.multiple', 'is.port', 'is.safe', 'is.precision', 'is.digits', 'is.ISBN10', 'is.ISBN13', 'is.EAN', 'is.SSN',
    'is.VIN', 'is.INN10', 'is.INN12', 'is.GLN', 'is.IMEI', 'is.NPI'
];
const stringsMethods = [
    'is.alphabetic', 'is.lowerCase', 'is.upperCase', 'is.camelCase', 'is.snakeCase', 'is.kebabCase', 'is.trainCase',
    'is.path', 'is.uuid', 'is.http', 'is.https', 'is.url', 'is.email', 'is.ipv4', 'is.ipv6', 'is.ip', 'is.extension',
    'is.hex', 'is.base64', 'is.dataUrl', 'is.creditCard', 'is.masterCard', 'is.visaCard', 'is.americanExpress',
    'is.dinersClub', 'is.domain', 'is.guid', 'is.hostname', 'is.isoDate', 'is.isoDuration', 'is.jwt', 'is.emoji',
    'is.nanoid', 'is.cuid', 'is.cuid2', 'is.excludes', 'is.time', 'is.datetime', 'is.date', 'is.hash',
    'is.isoTimeSecond', 'is.isoTimestamp', 'is.isoWeek', 'is.mac', 'is.mac48', 'is.mac64', 'is.past', 'is.future',
    'is.ascii', 'is.base32', 'is.base58', 'is.before', 'is.after'
]

START.all
{
    START.numbers
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
        CHECK['is.between'](is.between({arg: 5, min: 0, max: 10}));
        CHECK['is.greater'](is.greater({arg: 15, value: 5}));
        CHECK['is.less'](is.less({arg: 5, value: 15}));
        CHECK['is.equalGreater'](is.equalGreater({arg: 5, value: 5}));
        CHECK['is.equalLess'](is.equalLess({arg: 5, value: 5}));
        CHECK['is.max'](is.max({arg: 5, value: 5}));
        CHECK['is.min'](is.min({arg: 5, value: 5}));
        CHECK['is.multiple'](is.multiple({arg: 5, value: 15}));
        CHECK['is.port'](is.port(5));
        CHECK['is.safe'](is.safe(Number.MAX_SAFE_INTEGER));
        CHECK['is.precision'](is.precision({arg: 5.22, value: 2}));
        CHECK['is.digits'](is.digits({arg: 12345, value: 5}));
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
    } STOP.numbers

    START.numberNegative
    {
        numbersMethods.forEach((type) => {
            CHECK[`it's not a(an) ${get.type(type)}`](!is[get.type(type)]({}));
            try {
                as[get.type(type)]({})
            } catch (e) {
                CHECK[`as.${get.type(type)}({}) throw an error`](true);
            }
        });
    } STOP.numberNegative

    START.strings
    {
        CHECK['is.alphabetic'](is.alphabetic('abc'));
        CHECK['is.digit'](is.digit('123'));
        CHECK['is.lowerCase'](is.lowerCase('abc123'));
        CHECK['is.upperCase'](is.upperCase('ABC123'));
        CHECK['is.camelCase'](is.camelCase('camelCaseExample'));
        CHECK['is.snakeCase'](is.snakeCase('snake_case_example'));
        CHECK['is.kebabCase'](is.kebabCase('kebab-case-example'));
        CHECK['is.trainCase'](is.trainCase('train-Case-Example'));
        CHECK['is.path'](is.path('/path/to/something'));
        CHECK['is.uuid'](is.uuid('123e4567-e89b-12d3-a456-426614174000'));
        CHECK['is.http'](is.http('http://example.com'));
        CHECK['is.https'](is.https('https://example.com'));
        CHECK['is.url'](is.url('https://example.com/path#fragment'));
        CHECK['is.email'](is.email('user@example.com'));
        CHECK['is.ipv4'](is.ipv4('192.168.0.1'));
        CHECK['is.ipv6'](is.ipv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334'));
        CHECK['is.ip'](is.ip('192.168.0.1'));
        CHECK['is.extension'](is.extension('.txt'));
        CHECK['is.hex'](is.hex('#ff00ff'));
        CHECK['is.base64'](is.base64('dGhpcyBpcyBhIHRlc3Q='));
        CHECK['is.dataUrl'](is.dataUrl('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA'));
        CHECK['is.creditCard'](is.creditCard('4111111111111111'));
        CHECK['is.masterCard'](is.masterCard('5555555555554444'));
        CHECK['is.visaCard'](is.visaCard('4111111111111111'));
        CHECK['is.americanExpress'](is.americanExpress('378282246310005'));
        CHECK['is.dinersClub'](is.dinersClub('30569309025904'));
        CHECK['is.domain'](is.domain('example.com'));
        CHECK['is.guid'](is.guid('123e4567-e89b-12d3-a456-426614174000'));
        CHECK['is.hostname'](is.hostname('example.com'));
        CHECK['is.isoDate'](is.isoDate('2021-12-03T10:15:30Z'));
        CHECK['is.isoDuration'](is.isoDuration('P3Y6M4DT12H30M5S'));
        CHECK['is.jwt'](is.jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'));
        CHECK['is.emoji'](is.emoji('😊'));
        CHECK['is.nanoid'](is.nanoid('V1StGXR8_Z5jdHi6B-myT'));
        CHECK['is.cuid'](is.cuid('cjld2cjxh0000qzrmn831i7rn'));
        CHECK['is.cuid2'](is.cuid2('c9g2h0a8'));
        CHECK['is.excludes'](is.excludes({arg: 'hello world', value: 'test'}));
        CHECK['is.time'](is.time('12:34:56'));
        CHECK['is.datetime'](is.datetime('2018-01-04T05:52:20.698'));
        CHECK['is.date'](is.date('2021-12-03'));
        CHECK['is.hash'](is.hash('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'));
        CHECK['is.isoTimeSecond'](is.isoTimeSecond('T12:34:56'));
        CHECK['is.isoTimestamp'](is.isoTimestamp('2021-12-03T10:15:30Z'));
        CHECK['is.isoWeek'](is.isoWeek('2021-W48'));
        CHECK['is.mac'](is.mac('00:1B:44:11:3A:B7'));
        CHECK['is.mac48'](is.mac48('00-1B-44-11-3A-B7'));
        CHECK['is.mac64'](is.mac64('00-1B-44-11-3A-B7-44-11'));
        CHECK['is.past'](is.past('2020-12-03T10:15:30Z'));
        CHECK['is.future'](is.future('2099-12-03T10:15:30Z'));
        CHECK['is.ascii'](is.ascii('hello'));
        CHECK['is.base32'](is.base32('MZXW6YTBOI======'));
        CHECK['is.base58'](is.base58('3mJr7AoUXx2Wqd'));
        CHECK['is.before'](is.before({arg: '2021-12-03T10:15:30Z', value: '2022-01-01T00:00:00Z'}));
        CHECK['is.after'](is.after({arg: '2022-01-01T00:00:00Z', value: '2021-12-03T10:15:30Z'}));
        CHECK['is.maxStr'](is.maxStr({arg: '1234567890', value: 10}));
        CHECK['is.minStr'](is.minStr({arg: '123', value: 3}));
        CHECK['is.password'](is.password('Qwerty123456!'));
    } STOP.strings

    START.stringsNegative
    {
        stringsMethods.forEach((type) => {
            CHECK[`it's not a(an) ${get.type(type)}`](!is[get.type(type)]({}));
            try {
                as[get.type(type)]({})
            } catch (e) {
                CHECK[`as.${get.type(type)}({}) throw an error`](true);
            }
        });
    } STOP.stringsNegative
}
FINISH.all;
