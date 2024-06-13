# @pro-script plugins v0.1.0
## Please read the [@pro-script documentation](https://www.npmjs.com/package/@pro-script/as-is) first

## installation

    npm install @pro-script/as-is-plugins

    src="https://www.unpkg.com/@pro-script/as-is-plugins@0.1.0/"

# Table of contents

- [is the number zero?](#is-the-number-zero)
- [is the number even?](#is-the-number-even)
- [is the number odd?](#is-the-number-odd)
- [is the number positive?](#is-the-number-positive)
- [is the number negative?](#is-the-number-negative)
- [is the number a positive integer?](#is-the-number-a-positive-integer)
- [is the number a negative integer?](#is-the-number-a-negative-integer)
- [is the number finite?](#is-the-number-finite)
- [is the value NaN?](#is-the-value-nan)
- [is the number between min and max?](#is-the-number-between-min-and-max)
- [is the number greater than the specified value?](#is-the-number-greater-than-the-specified-value)
- [is the number less than the specified value?](#is-the-number-less-than-the-specified-value)
- [is the number equal to or greater than the specified value?](#is-the-number-equal-to-or-greater-than-the-specified-value)
- [is the number equal to or less than the specified value?](#is-the-number-equal-to-or-less-than-the-specified-value)
- [is the number equal to the specified maximum value?](#is-the-number-equal-to-the-specified-maximum-value)
- [is the number equal to the specified minimum value?](#is-the-number-equal-to-the-specified-minimum-value)
- [is the number a multiple of the specified value?](#is-the-number-a-multiple-of-the-specified-value)
- [is the number a valid port number?](#is-the-number-a-valid-port-number)
- [is the number a safe integer?](#is-the-number-a-safe-integer)
- [is the number a valid precision?](#is-the-number-a-valid-precision)
- [is the number a valid digit count?](#is-the-number-a-valid-digit-count)
- [is the number a valid ISBN-10?](#is-the-number-a-valid-isbn-10)
- [is the number a valid ISBN-13?](#is-the-number-a-valid-isbn-13)
- [is the number a valid EAN?](#is-the-number-a-valid-ean)
- [is the number a valid SSN?](#is-the-number-a-valid-ssn)
- [is the number a valid VIN?](#is-the-number-a-valid-vin)
- [is the number a valid INN (10 digits)?](#is-the-number-a-valid-inn-10-digits)
- [is the number a valid INN (12 digits)?](#is-the-number-a-valid-inn-12-digits)
- [is the number a valid GLN?](#is-the-number-a-valid-gln)
- [is the number a valid IMEI?](#is-the-number-a-valid-imei)
- [is the number a valid NPI?](#is-the-number-a-valid-npi)

## The number validators

## is the number zero?
```javascript
is.zero(value) -> true | false
as.zero(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is exactly zero.

- **is.zero(arg):**
  - Returns `true` if `arg` is equal to 0.
  - Returns `false` if `arg` is not equal to 0.

- **as.zero(arg):**
  - Returns `value` if `arg` is equal to 0.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not equal to 0.

```javascript
is.zero(0);      // Returns true
is.zero(5);      // Returns false

as.zero(0);      // Returns 0
as.zero(5);      // Throws TypeError: Number is not a value that passed validation
```

## is the number even?
```javascript
is.even(value) -> true | false
as.even(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is an even number.

- **is.even(arg):**
  - Returns `true` if `arg` is even.
  - Returns `false` if `arg` is not even.

- **as.even(arg):**
  - Returns `value` if `arg` is even.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not even.

```javascript
is.even(2);      // Returns true
is.even(3);      // Returns false

as.even(2);      // Returns 2
as.even(3);      // Throws TypeError: Number is not a value that passed validation
```

## is the number odd?
```javascript
is.odd(value) -> true | false
as.odd(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is an odd number.

- **is.odd(arg):**
  - Returns `true` if `arg` is odd.
  - Returns `false` if `arg` is not odd.

- **as.odd(arg):**
  - Returns `value` if `arg` is odd.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not odd.

```javascript
is.odd(1);      // Returns true
is.odd(4);      // Returns false

as.odd(1);      // Returns 1
as.odd(4);      // Throws TypeError: Number is not a value that passed validation
```

## is the number positive?
```javascript
is.positive(value) -> true | false
as.positive(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a positive number.

- **is.positive(arg):**
  - Returns `true` if `arg` is positive.
  - Returns `false` if `arg` is not positive.

- **as.positive(arg):**
  - Returns `value` if `arg` is positive.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not positive.

```javascript
is.positive(1.1);      // Returns true
is.positive(-1.1);     // Returns false

as.positive(1.1);      // Returns 1.1
as.positive(-1.1);     // Throws TypeError: Number is not a value that passed validation
```

## is the number negative?
```javascript
is.negative(value) -> true | false
as.negative(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a negative number.

- **is.negative(arg):**
  - Returns `true` if `arg` is negative.
  - Returns `false` if `arg` is not negative.

- **as.negative(arg):**
  - Returns `value` if `arg` is negative.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not negative.

```javascript
is.negative(-1.1);      // Returns true
is.negative(1.1);       // Returns false

as.negative(-1.1);      // Returns -1.1
as.negative(1.1);       // Throws TypeError: Number is not a value that passed validation
```

## is the number a positive integer?
```javascript
is.positiveInteger(value) -> true | false
as.positiveInteger(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a positive integer.

- **is.positiveInteger(arg):**
  - Returns `true` if `arg` is a positive integer.
  - Returns `false` if `arg` is not a positive integer.

- **as.positiveInteger(arg):**
  - Returns `value` if `arg` is a positive integer.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a positive integer.

```javascript
is.positiveInteger(1);      // Returns true
is.positiveInteger(-1);     // Returns false

as.positiveInteger(1);      // Returns 1
as.positiveInteger(-1);     // Throws TypeError: Number is not a value that passed validation
```

## is the number a negative integer?
```javascript
is.negativeInteger(value) -> true | false
as.negativeInteger(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a negative integer.

- **is.negativeInteger(arg):**
  -

Returns `true` if `arg` is a negative integer.
- Returns `false` if `arg` is not a negative integer.

- **as.negativeInteger(arg):**
  - Returns `value` if `arg` is a negative integer.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a negative integer.

```javascript
is.negativeInteger(-1);      // Returns true
is.negativeInteger(1);       // Returns false

as.negativeInteger(-1);      // Returns -1
as.negativeInteger(1);       // Throws TypeError: Number is not a value that passed validation
```

## is the number finite?
```javascript
is.isFinite(value) -> true | false
as.isFinite(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a finite number.

- **is.isFinite(arg):**
  - Returns `true` if `arg` is finite.
  - Returns `false` if `arg` is not finite.

- **as.isFinite(arg):**
  - Returns `value` if `arg` is finite.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not finite.

```javascript
is.isFinite(0);      // Returns true
is.isFinite(Infinity); // Returns false

as.isFinite(0);      // Returns 0
as.isFinite(Infinity); // Throws TypeError: Number is not a value that passed validation
```

## is the value NaN?
```javascript
is.NaN(value) -> true | false
as.NaN(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is NaN (Not-a-Number).

- **is.NaN(arg):**
  - Returns `true` if `arg` is NaN.
  - Returns `false` if `arg` is not NaN.

- **as.NaN(arg):**
  - Returns `value` if `arg` is NaN.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not NaN.

```javascript
is.NaN(NaN);      // Returns true
is.NaN(0);        // Returns false

as.NaN(NaN);      // Returns NaN
as.NaN(0);        // Throws TypeError: Number is not a value that passed validation
```

## is the number between min and max?
```javascript
is.between({ arg, min, max }) -> true | false
as.between({ arg, min, max }) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is between `min` and `max` values.

- **is.between({ arg, min, max }):**
  - Returns `true` if `arg` is between `min` and `max`.
  - Returns `false` if `arg` is not between `min` and `max`.

- **as.between({ arg, min, max }):**
  - Returns `value` if `arg` is between `min` and `max`.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not between `min` and `max`.

```javascript
is.between({ arg: 5, min: 0, max: 10 });  // Returns true
is.between({ arg: 15, min: 0, max: 10 }); // Returns false

as.between({ arg: 5, min: 0, max: 10 });  // Returns 5
as.between({ arg: 15, min: 0, max: 10 }); // Throws TypeError: Number is not a value that passed validation
```

## is the number greater than the specified value?
```javascript
is.greater({ arg, value }) -> true | false
as.greater({ arg, value }) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is greater than the specified `value`.

- **is.greater({ arg, value }):**
  - Returns `true` if `arg` is greater than `value`.
  - Returns `false` if `arg` is not greater than `value`.

- **as.greater({ arg, value }):**
  - Returns `value` if `arg` is greater than `value`.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not greater than `value`.

```javascript
is.greater({ arg: 15, value: 5 });  // Returns true
is.greater({ arg: 5, value: 15 });  // Returns false

as.greater({ arg: 15, value: 5 });  // Returns 15
as.greater({ arg: 5, value: 15 });  // Throws TypeError: Number is not a value that passed validation
```

## is the number less than the specified value?
```javascript
is.less({ arg, value }) -> true | false
as.less({ arg, value }) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is less than the specified `value`.

- **is.less({ arg, value }):**
  - Returns `true` if `arg` is less than `value`.
  - Returns `false` if `arg` is not less than `value`.

- **as.less({ arg, value }):**
  - Returns `value` if `arg` is less than `value`.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not less than `value`.

```javascript
is.less({ arg: 5, value: 15 });  // Returns true
is.less({ arg: 15, value: 5 });  // Returns false

as.less({ arg: 5, value: 15 });  // Returns 5
as.less({ arg: 15, value: 5 });  // Throws TypeError: Number is not a value that passed validation
```

## is the number equal to or greater than the specified value?
```javascript
is.equalGreater({ arg, value }) -> true | false
as.equalGreater({ arg, value }) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is equal to or greater than the specified `value`.

- **is.equalGreater({ arg, value }):**
  - Returns `true` if `arg` is equal to or greater than `value`.
  - Returns `false` if `arg` is not equal to or greater than `value`.

- **as.equalGreater({ arg, value }):**
  - Returns `value` if `arg` is equal to or greater than `value`.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not equal to or greater than `value`.

```javascript
is.equalGreater({ arg: 5, value: 5 });  // Returns true
is.equalGreater({ arg: 4, value: 5 });  // Returns false

as.equalGreater({ arg: 5, value: 5 });  // Returns 5
as.equalGreater({ arg: 4, value: 5 });  // Throws TypeError: Number is not a value that passed validation
```

## is the number equal to or less than the specified value?
```javascript
is.equalLess({ arg, value }) -> true | false
as.equalLess({ arg, value }) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is equal to or less than the specified `value`.

- **is.equalLess({ arg, value }):**
  - Returns `true` if `arg` is equal to or less than `value`.
  - Returns `false` if `arg` is not equal to or less than `value`.

- **as.equalLess({ arg, value }):**
  - Returns `value` if `arg` is equal to or less than `value`.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not equal to or less than `value`.

```javascript
is.equalLess({ arg: 5, value: 5 });  // Returns true
is.equalLess({ arg: 6, value: 5 });  // Returns false

as.equalLess({ arg: 5, value: 5 });  // Returns 5
as.equalLess({ arg: 6, value: 5 });  // Throws TypeError: Number is not a value that passed validation
```

## is the number equal to the specified maximum value?
```javascript
is.max({ arg, value }) -> true | false
as.max({ arg, value }) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is equal to the specified maximum `value`.



- **is.max({ arg, value }):**
  - Returns `true` if `arg` is equal to the maximum `value`.
  - Returns `false` if `arg` is not equal to the maximum `value`.

- **as.max({ arg, value }):**
  - Returns `value` if `arg` is equal to the maximum `value`.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not equal to the maximum `value`.

```javascript
is.max({ arg: 5, value: 5 });  // Returns true
is.max({ arg: 4, value: 5 });  // Returns false

as.max({ arg: 5, value: 5 });  // Returns 5
as.max({ arg: 4, value: 5 });  // Throws TypeError: Number is not a value that passed validation
```

## is the number equal to the specified minimum value?
```javascript
is.min({ arg, value }) -> true | false
as.min({ arg, value }) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is equal to the specified minimum `value`.

- **is.min({ arg, value }):**
  - Returns `true` if `arg` is equal to the minimum `value`.
  - Returns `false` if `arg` is not equal to the minimum `value`.

- **as.min({ arg, value }):**
  - Returns `value` if `arg` is equal to the minimum `value`.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not equal to the minimum `value`.

```javascript
is.min({ arg: 5, value: 5 });  // Returns true
is.min({ arg: 6, value: 5 });  // Returns false

as.min({ arg: 5, value: 5 });  // Returns 5
as.min({ arg: 6, value: 5 });  // Throws TypeError: Number is not a value that passed validation
```

## is the number a multiple of the specified value?
```javascript
is.multiple({ arg, value }) -> true | false
as.multiple({ arg, value }) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a multiple of the specified `value`.

- **is.multiple({ arg, value }):**
  - Returns `true` if `arg` is a multiple of `value`.
  - Returns `false` if `arg` is not a multiple of `value`.

- **as.multiple({ arg, value }):**
  - Returns `value` if `arg` is a multiple of `value`.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a multiple of `value`.

```javascript
is.multiple({ arg: 15, value: 5 });  // Returns true
is.multiple({ arg: 14, value: 5 });  // Returns false

as.multiple({ arg: 15, value: 5 });  // Returns 15
as.multiple({ arg: 14, value: 5 });  // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid port number?
```javascript
is.port(value) -> true | false
as.port(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid port number (between 0 and 65535).

- **is.port(arg):**
  - Returns `true` if `arg` is a valid port number.
  - Returns `false` if `arg` is not a valid port number.

- **as.port(arg):**
  - Returns `value` if `arg` is a valid port number.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a valid port number.

```javascript
is.port(80);      // Returns true
is.port(70000);   // Returns false

as.port(80);      // Returns 80
as.port(70000);   // Throws TypeError: Number is not a value that passed validation
```

## is the number a safe integer?
```javascript
is.safe(value) -> true | false
as.safe(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a safe integer (within the range of `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`).

- **is.safe(arg):**
  - Returns `true` if `arg` is a safe integer.
  - Returns `false` if `arg` is not a safe integer.

- **as.safe(arg):**
  - Returns `value` if `arg` is a safe integer.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a safe integer.

```javascript
is.safe(Number.MAX_SAFE_INTEGER);      // Returns true
is.safe(Number.MAX_SAFE_INTEGER + 1);  // Returns false

as.safe(Number.MAX_SAFE_INTEGER);      // Returns Number.MAX_SAFE_INTEGER
as.safe(Number.MAX_SAFE_INTEGER + 1);  // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid precision?
```javascript
is.precision({ arg, value }) -> true | false
as.precision({ arg, value }) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) has the specified precision `value`.

- **is.precision({ arg, value }):**
  - Returns `true` if `arg` has the specified precision `value`.
  - Returns `false` if `arg` does not have the specified precision `value`.

- **as.precision({ arg, value }):**
  - Returns `value` if `arg` has the specified precision `value`.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` does not have the specified precision `value`.

```javascript
is.precision({ arg: 5.22, value: 2 });  // Returns true
is.precision({ arg: 5.2, value: 2 });   // Returns false

as.precision({ arg: 5.22, value: 2 });  // Returns 5.22
as.precision({ arg: 5.2, value: 2 });   // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid digit count?
```javascript
is.digits({ arg, value }) -> true | false
as.digits({ arg, value }) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) has the specified number of digits `value`.

- **is.digits({ arg, value }):**
  - Returns `true` if `arg` has the specified number of digits `value`.
  - Returns `false` if `arg` does not have the specified number of digits `value`.

- **as.digits({ arg, value }):**
  - Returns `value` if `arg` has the specified number of digits `value`.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` does not have the specified number of digits `value`.

```javascript
is.digits({ arg: 12345, value: 5 });  // Returns true
is.digits({ arg: 1234, value: 5 });   // Returns false

as.digits({ arg: 12345, value: 5 });  // Returns 12345
as.digits({ arg: 1234, value: 5 });   // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid ISBN-10?
```javascript
is.ISBN10(value) -> true | false
as.ISBN10(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid ISBN-10 number.

- **is.ISBN10(arg):**
  - Returns `true` if `arg` is a valid ISBN-10 number.
  - Returns `false` if `arg` is not a valid ISBN-10 number.

- **as.ISBN10(arg):**
  - Returns `value` if `arg` is a valid ISBN-10 number.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a valid ISBN-10 number.

```javascript
is.ISBN10(1234567890);  // Returns true
is.ISBN10(123456789);   // Returns false

as.ISBN10(1234567890);  // Returns 1234567890
as.ISBN10(123456789);   // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid ISBN-13?
```javascript
is.ISBN13(value) -> true | false


as.ISBN13(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid ISBN-13 number.

- **is.ISBN13(arg):**
  - Returns `true` if `arg` is a valid ISBN-13 number.
  - Returns `false` if `arg` is not a valid ISBN-13 number.

- **as.ISBN13(arg):**
  - Returns `value` if `arg` is a valid ISBN-13 number.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a valid ISBN-13 number.

```javascript
is.ISBN13(1234567890123);  // Returns true
is.ISBN13(123456789012);   // Returns false

as.ISBN13(1234567890123);  // Returns 1234567890123
as.ISBN13(123456789012);   // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid EAN?
```javascript
is.EAN(value) -> true | false
as.EAN(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid EAN (European Article Number).

- **is.EAN(arg):**
  - Returns `true` if `arg` is a valid EAN.
  - Returns `false` if `arg` is not a valid EAN.

- **as.EAN(arg):**
  - Returns `value` if `arg` is a valid EAN.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a valid EAN.

```javascript
is.EAN(1234567890123);  // Returns true
is.EAN(123456789012);   // Returns false

as.EAN(1234567890123);  // Returns 1234567890123
as.EAN(123456789012);   // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid SSN?
```javascript
is.SSN(value) -> true | false
as.SSN(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid SSN (Social Security Number).

- **is.SSN(arg):**
  - Returns `true` if `arg` is a valid SSN.
  - Returns `false` if `arg` is not a valid SSN.

- **as.SSN(arg):**
  - Returns `value` if `arg` is a valid SSN.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a valid SSN.

```javascript
is.SSN(123456789);  // Returns true
is.SSN(12345678);   // Returns false

as.SSN(123456789);  // Returns 123456789
as.SSN(12345678);   // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid VIN?
```javascript
is.VIN(value) -> true | false
as.VIN(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid VIN (Vehicle Identification Number).

- **is.VIN(arg):**
  - Returns `true` if `arg` is a valid VIN.
  - Returns `false` if `arg` is not a valid VIN.

- **as.VIN(arg):**
  - Returns `value` if `arg` is a valid VIN.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a valid VIN.

```javascript
is.VIN(12345678901234567);  // Returns true
is.VIN(1234567890123456);   // Returns false

as.VIN(12345678901234567);  // Returns 12345678901234567
as.VIN(1234567890123456);   // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid INN (10 digits)?
```javascript
is.INN10(value) -> true | false
as.INN10(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid INN (Individual Taxpayer Number) with 10 digits.

- **is.INN10(arg):**
  - Returns `true` if `arg` is a valid INN with 10 digits.
  - Returns `false` if `arg` is not a valid INN with 10 digits.

- **as.INN10(arg):**
  - Returns `value` if `arg` is a valid INN with 10 digits.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a valid INN with 10 digits.

```javascript
is.INN10(1234567890);  // Returns true
is.INN10(123456789);   // Returns false

as.INN10(1234567890);  // Returns 1234567890
as.INN10(123456789);   // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid INN (12 digits)?
```javascript
is.INN12(value) -> true | false
as.INN12(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid INN (Individual Taxpayer Number) with 12 digits.

- **is.INN12(arg):**
  - Returns `true` if `arg` is a valid INN with 12 digits.
  - Returns `false` if `arg` is not a valid INN with 12 digits.

- **as.INN12(arg):**
  - Returns `value` if `arg` is a valid INN with 12 digits.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a valid INN with 12 digits.

```javascript
is.INN12(123456789012);  // Returns true
is.INN12(12345678901);   // Returns false

as.INN12(123456789012);  // Returns 123456789012
as.INN12(12345678901);   // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid GLN?
```javascript
is.GLN(value) -> true | false
as.GLN(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid GLN (Global Location Number).

- **is.GLN(arg):**
  - Returns `true` if `arg` is a valid GLN.
  - Returns `false` if `arg` is not a valid GLN.

- **as.GLN(arg):**
  - Returns `value` if `arg` is a valid GLN.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a valid GLN.

```javascript
is.GLN(1234567890123);  // Returns true
is.GLN(123456789012);   // Returns false

as.GLN(1234567890123);  // Returns 1234567890123
as.GLN(123456789012);   // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid IMEI?
```javascript
is.IMEI(value) -> true | false
as.IMEI(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid IMEI (International Mobile Equipment Identity).

- **is.IMEI(arg):**
  - Returns `true` if `arg` is a valid IMEI.
  - Returns `false` if `arg` is not a valid IMEI.

- **as.IMEI(arg):**
  - Returns `value` if `arg` is a valid IMEI.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a valid IMEI.

```javascript
is.IMEI(123456789012345);  // Returns true
is.IMEI(12345678901234);   // Returns false

as.IMEI(123456789012345);  // Returns 123456789012345
as.IMEI(12345678901234);   // Throws TypeError: Number is not a value that passed validation
```

## is the number a valid NPI?
```javascript
is.NPI(value) -> true | false
as.NPI(value) -> value | TypeError: Number is not a(an) value that passed validation
```

### Description

This

function checks if the provided argument (`arg`) is a valid NPI (National Provider Identifier).

- **is.NPI(arg):**
  - Returns `true` if `arg` is a valid NPI.
  - Returns `false` if `arg` is not a valid NPI.

- **as.NPI(arg):**
  - Returns `value` if `arg` is a valid NPI.
  - Throws a `TypeError` with message "Number is not a value that passed validation" if `arg` is not a valid NPI.

```javascript
is.NPI(1234567890);  // Returns true
is.NPI(123456789);   // Returns false

as.NPI(1234567890);  // Returns 1234567890
as.NPI(123456789);   // Throws TypeError: Number is not a value that passed validation
```
