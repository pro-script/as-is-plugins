# @pro-script plugins Strings


# Table of contents
Here is the updated table of contents with links to the descriptions for each method:

# Table of contents

- [is the string alphabetic?](#is-the-string-alphabetic)
- [is the string lowercase?](#is-the-string-lowercase)
- [is the string uppercase?](#is-the-string-uppercase)
- [is the string camelCase?](#is-the-string-camelcase)
- [is the string snake_case?](#is-the-string-snake_case)
- [is the string kebab-case?](#is-the-string-kebab-case)
- [is the string train-Case?](#is-the-string-train-case)
- [is the string a valid path?](#is-the-string-a-valid-path)
- [is the string a valid UUID?](#is-the-string-a-valid-uuid)
- [is the string a valid HTTP URL?](#is-the-string-a-valid-http-url)
- [is the string a valid HTTPS URL?](#is-the-string-a-valid-https-url)
- [is the string a valid URL?](#is-the-string-a-valid-url)
- [is the string a valid email address?](#is-the-string-a-valid-email-address)
- [is the string a valid IPv4 address?](#is-the-string-a-valid-ipv4-address)
- [is the string a valid IPv6 address?](#is-the-string-a-valid-ipv6-address)
- [is the string a valid IP address?](#is-the-string-a-valid-ip-address)
- [is the string a valid file extension?](#is-the-string-a-valid-file-extension)
- [is the string a valid hex color code?](#is-the-string-a-valid-hex-color-code)
- [is the string a valid base64 encoded string?](#is-the-string-a-valid-base64-encoded-string)
- [is the string a valid data URL?](#is-the-string-a-valid-data-url)
- [is the string a valid credit card number?](#is-the-string-a-valid-credit-card-number)
- [is the string a valid MasterCard number?](#is-the-string-a-valid-mastercard-number)
- [is the string a valid Visa card number?](#is-the-string-a-valid-visa-card-number)
- [is the string a valid American Express card number?](#is-the-string-a-valid-american-express-card-number)
- [is the string a valid Diners Club card number?](#is-the-string-a-valid-diners-club-card-number)
- [is the string a valid domain name?](#is-the-string-a-valid-domain-name)
- [is the string a valid GUID?](#is-the-string-a-valid-guid)
- [is the string a valid hostname?](#is-the-string-a-valid-hostname)
- [is the string a valid ISO date?](#is-the-string-a-valid-iso-date)
- [is the string a valid ISO duration?](#is-the-string-a-valid-iso-duration)
- [is the string a valid JWT?](#is-the-string-a-valid-jwt)
- [is the string a valid emoji?](#is-the-string-a-valid-emoji)
- [is the string a valid nanoid?](#is-the-string-a-valid-nanoid)
- [is the string a valid CUID?](#is-the-string-a-valid-cuid)
- [is the string a valid CUID2?](#is-the-string-a-valid-cuid2)
- [does the string exclude a given substring?](#does-the-string-exclude-a-given-substring)
- [is the string a valid time (HH:MM:SS)?](#is-the-string-a-valid-time-hhmmss)
- [is the string a valid datetime (YYYY-MM-DDTHH:MM:SS)?](#is-the-string-a-valid-datetime-yyyy-mm-ddthhmmss)
- [is the string a valid date (YYYY-MM-DD)?](#is-the-string-a-valid-date-yyyy-mm-dd)
- [is the string a valid SHA-256 hash?](#is-the-string-a-valid-sha-256-hash)
- [is the string a valid ISO time with seconds?](#is-the-string-a-valid-iso-time-with-seconds)
- [is the string a valid ISO timestamp?](#is-the-string-a-valid-iso-timestamp)
- [is the string a valid ISO week?](#is-the-string-a-valid-iso-week)
- [is the string a valid MAC address?](#is-the-string-a-valid-mac-address)
- [is the string a valid MAC-48 address?](#is-the-string-a-valid-mac-48-address)
- [is the string a valid MAC-64 address?](#is-the-string-a-valid-mac-64-address)
- [is the date in the past?](#is-the-date-in-the-past)
- [is the date in the future?](#is-the-date-in-the-future)
- [is the string an ASCII string?](#is-the-string-an-ascii-string)
- [is the string a valid Base32 encoded string?](#is-the-string-a-valid-base32-encoded-string)
- [is the string a valid Base58 encoded string?](#is-the-string-a-valid-base58-encoded-string)
- [is the date before a specific date?](#is-the-date-before-a-specific-date)
- [is the date after a specific date?](#is-the-date-after-a-specific-date)
- [is the string length less than or equal to a specific value?](#is-the-string-length-less-than-or-equal-to-a-specific-value)
- [is the string length greater than or equal to a specific value?](#is-the-string-length-greater-than-or-equal-to-a-specific-value)

## is the string alphabetic?
```javascript
is.alphabetic(value) -> true | false
as.alphabetic(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) contains only alphabetic characters (a-z, A-Z) and digits (0-9).

- **is.alphabetic(arg):**
    - Returns `true` if `arg` contains only alphabetic characters and digits.
    - Returns `false` if `arg` contains any other characters.

- **as.alphabetic(arg):**
    - Returns `value` if `arg` contains only alphabetic characters and digits.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` contains any other characters.

```javascript
is.alphabetic('abc123'); // Returns true
is.alphabetic('abc!123'); // Returns false

as.alphabetic('abc123'); // Returns 'abc123'
as.alphabetic('abc!123'); // Throws TypeError: String is not a value that passed validation
```

## is the string lowercase?
```javascript
is.lowerCase(value) -> true | false
as.lowerCase(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) contains only lowercase alphabetic characters (a-z) and digits (0-9).

- **is.lowerCase(arg):**
    - Returns `true` if `arg` contains only lowercase alphabetic characters and digits.
    - Returns `false` if `arg` contains any other characters.

- **as.lowerCase(arg):**
    - Returns `value` if `arg` contains only lowercase alphabetic characters and digits.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` contains any other characters.

```javascript
is.lowerCase('abc123'); // Returns true
is.lowerCase('ABC123'); // Returns false

as.lowerCase('abc123'); // Returns 'abc123'
as.lowerCase('ABC123'); // Throws TypeError: String is not a value that passed validation
```

## is the string uppercase?
```javascript
is.upperCase(value) -> true | false
as.upperCase(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) contains only uppercase alphabetic characters (A-Z) and digits (0-9).

- **is.upperCase(arg):**
    - Returns `true` if `arg` contains only uppercase alphabetic characters and digits.
    - Returns `false` if `arg` contains any other characters.

- **as.upperCase(arg):**
    - Returns `value` if `arg` contains only uppercase alphabetic characters and digits.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` contains any other characters.

```javascript
is.upperCase('ABC123'); // Returns true
is.upperCase('abc123'); // Returns false

as.upperCase('ABC123'); // Returns 'ABC123'
as.upperCase('abc123'); // Throws TypeError: String is not a value that passed validation
```

## is the string camelCase?
```javascript
is.camelCase(value) -> true | false
as.camelCase(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) follows camelCase formatting.

- **is.camelCase(arg):**
    - Returns `true` if `arg` follows camelCase formatting.
    - Returns `false` if `arg` does not follow camelCase formatting.

- **as.camelCase(arg):**
    - Returns `value` if `arg` follows camelCase formatting.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` does not follow camelCase formatting.

```javascript
is.camelCase('camelCaseExample'); // Returns true
is.camelCase('CamelCaseExample'); // Returns false

as.camelCase('camelCaseExample'); // Returns 'camelCaseExample'
as.camelCase('CamelCaseExample'); // Throws TypeError: String is not a value that passed validation
```

## is the string snake_case?
```javascript
is.snakeCase(value) -> true | false
as.snakeCase(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) follows snake_case formatting.

- **is.snakeCase(arg):**
    - Returns `true` if `arg` follows snake_case formatting.
    - Returns `false` if `arg` does not follow snake_case formatting.

- **as.snakeCase(arg):**
    - Returns `value` if `arg` follows snake_case formatting.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` does not follow snake_case formatting.

```javascript
is.snakeCase('snake_case_example'); // Returns true
is.snakeCase('snakeCaseExample'); // Returns false

as.snakeCase('snake_case_example'); // Returns 'snake_case_example'
as.snakeCase('snakeCaseExample'); // Throws TypeError: String is not a value that passed validation
```

## is the string kebab-case?
```javascript
is.kebabCase(value) -> true | false
as.kebabCase(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) follows kebab-case formatting.

- **is.kebabCase(arg):**
    - Returns `true` if `arg` follows kebab-case formatting.
    - Returns `false` if `arg` does not follow kebab-case formatting.

- **as.kebabCase(arg):**
    - Returns `value` if `arg` follows kebab-case formatting.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` does not follow kebab-case formatting.

```javascript
is.kebabCase('kebab-case-example'); // Returns true
is.kebabCase('kebabCaseExample'); // Returns false

as.kebabCase('kebab-case-example'); // Returns 'kebab-case-example'
as.kebabCase('kebabCaseExample'); // Throws TypeError: String is not a value that passed validation
```

## is the string train-Case?
```javascript
is.trainCase(value) -> true | false
as.trainCase(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) follows train-Case formatting.

- **is.trainCase(arg):**
    - Returns `true` if `arg` follows train-Case formatting.
    - Returns `false` if `arg` does not follow train-Case formatting.

- **as.trainCase(arg):**
    - Returns `value` if `arg` follows train-Case formatting.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` does not follow train-Case formatting.

```javascript
is.trainCase('train-Case-Example'); // Returns true
is.trainCase('trainCaseExample'); // Returns false

as.trainCase('train-Case-Example'); // Returns 'train-Case-Example'
as.trainCase('trainCaseExample'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid path?
```javascript
is.path(value) -> true | false
as.path(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid path.

- **is.path(arg):**
    - Returns `true` if `arg` is a valid path.
    - Returns `false` if `arg` is not a valid path.

- **as.path(arg):**
    - Returns `value` if `arg` is a valid path.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid path.

```javascript
is.path('/path/to/something'); // Returns true
is.path('invalid_path'); // Returns false

as.path('/path/to/something'); // Returns '/path/to/something'
as.path('invalid_path'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid UUID?
```javascript
is.uuid(value) -> true | false
as.uuid(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid UUID.

- **is.uuid(arg):**
    - Returns `true` if `arg` is a valid UUID.
    - Returns `false` if `arg` is not a valid UUID.

- **as.uuid(arg):**
    - Returns `value` if `arg` is a valid UUID.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid UUID.

```javascript
is.uuid('123e4567-e89b-12d3-a456-426614174000'); // Returns true
is.uuid('invalid_uuid'); // Returns false

as.uuid('123e4567-e89b-12d

3-a456-426614174000'); // Returns '123e4567-e89b-12d3-a456-426614174000'
as.uuid('invalid_uuid'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid HTTP URL?
```javascript
is.http(value) -> true | false
as.http(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid HTTP URL.

- **is.http(arg):**
    - Returns `true` if `arg` is a valid HTTP URL.
    - Returns `false` if `arg` is not a valid HTTP URL.

- **as.http(arg):**
    - Returns `value` if `arg` is a valid HTTP URL.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid HTTP URL.

```javascript
is.http('http://example.com'); // Returns true
is.http('https://example.com'); // Returns false

as.http('http://example.com'); // Returns 'http://example.com'
as.http('https://example.com'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid HTTPS URL?
```javascript
is.https(value) -> true | false
as.https(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid HTTPS URL.

- **is.https(arg):**
    - Returns `true` if `arg` is a valid HTTPS URL.
    - Returns `false` if `arg` is not a valid HTTPS URL.

- **as.https(arg):**
    - Returns `value` if `arg` is a valid HTTPS URL.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid HTTPS URL.

```javascript
is.https('https://example.com'); // Returns true
is.https('http://example.com'); // Returns false

as.https('https://example.com'); // Returns 'https://example.com'
as.https('http://example.com'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid URL?
```javascript
is.url(value) -> true | false
as.url(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid URL.

- **is.url(arg):**
    - Returns `true` if `arg` is a valid URL.
    - Returns `false` if `arg` is not a valid URL.

- **as.url(arg):**
    - Returns `value` if `arg` is a valid URL.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid URL.

```javascript
is.url('https://example.com/path#fragment'); // Returns true
is.url('invalid_url'); // Returns false

as.url('https://example.com/path#fragment'); // Returns 'https://example.com/path#fragment'
as.url('invalid_url'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid email address?
```javascript
is.email(value) -> true | false
as.email(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid email address.

- **is.email(arg):**
    - Returns `true` if `arg` is a valid email address.
    - Returns `false` if `arg` is not a valid email address.

- **as.email(arg):**
    - Returns `value` if `arg` is a valid email address.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid email address.

```javascript
is.email('user@example.com'); // Returns true
is.email('user@invalid'); // Returns false

as.email('user@example.com'); // Returns 'user@example.com'
as.email('user@invalid'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid IPv4 address?
```javascript
is.ipv4(value) -> true | false
as.ipv4(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid IPv4 address.

- **is.ipv4(arg):**
    - Returns `true` if `arg` is a valid IPv4 address.
    - Returns `false` if `arg` is not a valid IPv4 address.

- **as.ipv4(arg):**
    - Returns `value` if `arg` is a valid IPv4 address.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid IPv4 address.

```javascript
is.ipv4('192.168.0.1'); // Returns true
is.ipv4('999.999.999.999'); // Returns false

as.ipv4('192.168.0.1'); // Returns '192.168.0.1'
as.ipv4('999.999.999.999'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid IPv6 address?
```javascript
is.ipv6(value) -> true | false
as.ipv6(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid IPv6 address.

- **is.ipv6(arg):**
    - Returns `true` if `arg` is a valid IPv6 address.
    - Returns `false` if `arg` is not a valid IPv6 address.

- **as.ipv6(arg):**
    - Returns `value` if `arg` is a valid IPv6 address.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid IPv6 address.

```javascript
is.ipv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334'); // Returns true
is.ipv6('invalid_ip'); // Returns false

as.ipv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334'); // Returns '2001:0db8:85a3:0000:0000:8a2e:0370:7334'
as.ipv6('invalid_ip'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid IP address?
```javascript
is.ip(value) -> true | false
as.ip(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid IP address (either IPv4 or IPv6).

- **is.ip(arg):**
    - Returns `true` if `arg` is a valid IP address.
    - Returns `false` if `arg` is not a valid IP address.

- **as.ip(arg):**
    - Returns `value` if `arg` is a valid IP address.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid IP address.

```javascript
is.ip('192.168.0.1'); // Returns true
is.ip('2001:0db8:85a3:0000:0000:8a2e:0370:7334'); // Returns true
is.ip('invalid_ip'); // Returns false

as.ip('192.168.0.1'); // Returns '192.168.0.1'
as.ip('2001:0db8:85a3:0000:0000:8a2e:0370:7334'); // Returns '2001:0db8:85a3:0000:0000:8a2e:0370:7334'
as.ip('invalid_ip'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid file extension?
```javascript
is.extension(value) -> true | false
as.extension(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid file extension.

- **is.extension(arg):**
    - Returns `true` if `arg` is a valid file extension.
    - Returns `false` if `arg` is not a valid file extension.

- **as.extension(arg):**
    - Returns `value` if `arg` is a valid file extension.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid file extension.

```javascript
is.extension('.txt'); // Returns true
is.extension('txt'); // Returns false

as.extension('.txt'); // Returns '.txt'
as.extension('txt'); // Throws TypeError: String is not a value that passed validation
``

`

## is the string a valid hex color code?
```javascript
is.hex(value) -> true | false
as.hex(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid hex color code.

- **is.hex(arg):**
    - Returns `true` if `arg` is a valid hex color code.
    - Returns `false` if `arg` is not a valid hex color code.

- **as.hex(arg):**
    - Returns `value` if `arg` is a valid hex color code.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid hex color code.

```javascript
is.hex('#ff00ff'); // Returns true
is.hex('ff00ff'); // Returns false

as.hex('#ff00ff'); // Returns '#ff00ff'
as.hex('ff00ff'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid base64 encoded string?
```javascript
is.base64(value) -> true | false
as.base64(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid base64 encoded string.

- **is.base64(arg):**
    - Returns `true` if `arg` is a valid base64 encoded string.
    - Returns `false` if `arg` is not a valid base64 encoded string.

- **as.base64(arg):**
    - Returns `value` if `arg` is a valid base64 encoded string.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid base64 encoded string.

```javascript
is.base64('dGhpcyBpcyBhIHRlc3Q='); // Returns true
is.base64('invalid_base64'); // Returns false

as.base64('dGhpcyBpcyBhIHRlc3Q='); // Returns 'dGhpcyBpcyBhIHRlc3Q='
as.base64('invalid_base64'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid data URL?
```javascript
is.dataUrl(value) -> true | false
as.dataUrl(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid data URL.

- **is.dataUrl(arg):**
    - Returns `true` if `arg` is a valid data URL.
    - Returns `false` if `arg` is not a valid data URL.

- **as.dataUrl(arg):**
    - Returns `value` if `arg` is a valid data URL.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid data URL.

```javascript
is.dataUrl('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA'); // Returns true
is.dataUrl('invalid_data_url'); // Returns false

as.dataUrl('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA'); // Returns 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA'
as.dataUrl('invalid_data_url'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid credit card number?
```javascript
is.creditCard(value) -> true | false
as.creditCard(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid credit card number.

- **is.creditCard(arg):**
    - Returns `true` if `arg` is a valid credit card number.
    - Returns `false` if `arg` is not a valid credit card number.

- **as.creditCard(arg):**
    - Returns `value` if `arg` is a valid credit card number.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid credit card number.

```javascript
is.creditCard('4111111111111111'); // Returns true
is.creditCard('1234567890123456'); // Returns false

as.creditCard('4111111111111111'); // Returns '4111111111111111'
as.creditCard('1234567890123456'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid MasterCard number?
```javascript
is.masterCard(value) -> true | false
as.masterCard(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid MasterCard number.

- **is.masterCard(arg):**
    - Returns `true` if `arg` is a valid MasterCard number.
    - Returns `false` if `arg` is not a valid MasterCard number.

- **as.masterCard(arg):**
    - Returns `value` if `arg` is a valid MasterCard number.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid MasterCard number.

```javascript
is.masterCard('5555555555554444'); // Returns true
is.masterCard('1234567890123456'); // Returns false

as.masterCard('5555555555554444'); // Returns '5555555555554444'
as.masterCard('1234567890123456'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid Visa card number?
```javascript
is.visaCard(value) -> true | false
as.visaCard(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid Visa card number.

- **is.visaCard(arg):**
    - Returns `true` if `arg` is a valid Visa card number.
    - Returns `false` if `arg` is not a valid Visa card number.

- **as.visaCard(arg):**
    - Returns `value` if `arg` is a valid Visa card number.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid Visa card number.

```javascript
is.visaCard('4111111111111111'); // Returns true
is.visaCard('1234567890123456'); // Returns false

as.visaCard('4111111111111111'); // Returns '4111111111111111'
as.visaCard('1234567890123456'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid American Express card number?
```javascript
is.americanExpress(value) -> true | false
as.americanExpress(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid American Express card number.

- **is.americanExpress(arg):**
    - Returns `true` if `arg` is a valid American Express card number.
    - Returns `false` if `arg` is not a valid American Express card number.

- **as.americanExpress(arg):**
    - Returns `value` if `arg` is a valid American Express card number.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid American Express card number.

```javascript
is.americanExpress('378282246310005'); // Returns true
is.americanExpress('123456789012345'); // Returns false

as.americanExpress('378282246310005'); // Returns '378282246310005'
as.americanExpress('123456789012345'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid Diners Club card number?
```javascript
is.dinersClub(value) -> true | false
as.dinersClub(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid Diners Club card number.

- **is.dinersClub(arg):**
    - Returns `true` if `arg` is a valid Diners Club card number.
    - Returns `false` if `arg` is not a valid Diners Club card number.

- **as.dinersClub(arg):**
    - Returns `value` if `arg` is a valid Diners Club card number.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid Diners Club card number.

```javascript
is.dinersClub('30569309025904'); // Returns true
is.dinersClub('12345678901234'); // Returns false

as.dinersClub('30569309025904'); // Returns '30569309025904'
as.dinersClub('12345678901234'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid domain name?
```javascript
is.domain(value) -> true | false
as

.domain(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid domain name.

- **is.domain(arg):**
    - Returns `true` if `arg` is a valid domain name.
    - Returns `false` if `arg` is not a valid domain name.

- **as.domain(arg):**
    - Returns `value` if `arg` is a valid domain name.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid domain name.

```javascript
is.domain('example.com'); // Returns true
is.domain('invalid_domain'); // Returns false

as.domain('example.com'); // Returns 'example.com'
as.domain('invalid_domain'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid GUID?
```javascript
is.guid(value) -> true | false
as.guid(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid GUID.

- **is.guid(arg):**
    - Returns `true` if `arg` is a valid GUID.
    - Returns `false` if `arg` is not a valid GUID.

- **as.guid(arg):**
    - Returns `value` if `arg` is a valid GUID.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid GUID.

```javascript
is.guid('123e4567-e89b-12d3-a456-426614174000'); // Returns true
is.guid('invalid_guid'); // Returns false

as.guid('123e4567-e89b-12d3-a456-426614174000'); // Returns '123e4567-e89b-12d3-a456-426614174000'
as.guid('invalid_guid'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid hostname?
```javascript
is.hostname(value) -> true | false
as.hostname(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid hostname.

- **is.hostname(arg):**
    - Returns `true` if `arg` is a valid hostname.
    - Returns `false` if `arg` is not a valid hostname.

- **as.hostname(arg):**
    - Returns `value` if `arg` is a valid hostname.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid hostname.

```javascript
is.hostname('example.com'); // Returns true
is.hostname('invalid_hostname'); // Returns false

as.hostname('example.com'); // Returns 'example.com'
as.hostname('invalid_hostname'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid ISO date?
```javascript
is.isoDate(value) -> true | false
as.isoDate(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid ISO date.

- **is.isoDate(arg):**
    - Returns `true` if `arg` is a valid ISO date.
    - Returns `false` if `arg` is not a valid ISO date.

- **as.isoDate(arg):**
    - Returns `value` if `arg` is a valid ISO date.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid ISO date.

```javascript
is.isoDate('2021-12-03T10:15:30Z'); // Returns true
is.isoDate('invalid_date'); // Returns false

as.isoDate('2021-12-03T10:15:30Z'); // Returns '2021-12-03T10:15:30Z'
as.isoDate('invalid_date'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid ISO duration?
```javascript
is.isoDuration(value) -> true | false
as.isoDuration(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid ISO duration.

- **is.isoDuration(arg):**
    - Returns `true` if `arg` is a valid ISO duration.
    - Returns `false` if `arg` is not a valid ISO duration.

- **as.isoDuration(arg):**
    - Returns `value` if `arg` is a valid ISO duration.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid ISO duration.

```javascript
is.isoDuration('P3Y6M4DT12H30M5S'); // Returns true
is.isoDuration('invalid_duration'); // Returns false

as.isoDuration('P3Y6M4DT12H30M5S'); // Returns 'P3Y6M4DT12H30M5S'
as.isoDuration('invalid_duration'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid JWT?
```javascript
is.jwt(value) -> true | false
as.jwt(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid JWT.

- **is.jwt(arg):**
    - Returns `true` if `arg` is a valid JWT.
    - Returns `false` if `arg` is not a valid JWT.

- **as.jwt(arg):**
    - Returns `value` if `arg` is a valid JWT.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid JWT.

```javascript
is.jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'); // Returns true
is.jwt('invalid_jwt'); // Returns false

as.jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'); // Returns the JWT
as.jwt('invalid_jwt'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid emoji?
```javascript
is.emoji(value) -> true | false
as.emoji(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid emoji.

- **is.emoji(arg):**
    - Returns `true` if `arg` is a valid emoji.
    - Returns `false` if `arg` is not a valid emoji.

- **as.emoji(arg):**
    - Returns `value` if `arg` is a valid emoji.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid emoji.

```javascript
is.emoji('😊'); // Returns true
is.emoji('not_emoji'); // Returns false

as.emoji('😊'); // Returns '😊'
as.emoji('not_emoji'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid nanoid?
```javascript
is.nanoid(value) -> true | false
as.nanoid(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid nanoid.

- **is.nanoid(arg):**
    - Returns `true` if `arg` is a valid nanoid.
    - Returns `false` if `arg` is not a valid nanoid.

- **as.nanoid(arg):**
    - Returns `value` if `arg` is a valid nanoid.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid nanoid.

```javascript
is.nanoid('V1StGXR8_Z5jdHi6B-myT'); // Returns true
is.nanoid('invalid_nanoid'); // Returns false

as.nanoid('V1StGXR8_Z5jdHi6B-myT'); // Returns 'V1StGXR8_Z5jdHi6B-myT'
as.nanoid('invalid_nanoid'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid CUID?
```

javascript
is.cuid(value) -> true | false
as.cuid(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid CUID.

- **is.cuid(arg):**
    - Returns `true` if `arg` is a valid CUID.
    - Returns `false` if `arg` is not a valid CUID.

- **as.cuid(arg):**
    - Returns `value` if `arg` is a valid CUID.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid CUID.

```javascript
is.cuid('cjld2cjxh0000qzrmn831i7rn'); // Returns true
is.cuid('invalid_cuid'); // Returns false

as.cuid('cjld2cjxh0000qzrmn831i7rn'); // Returns 'cjld2cjxh0000qzrmn831i7rn'
as.cuid('invalid_cuid'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid CUID2?
```javascript
is.cuid2(value) -> true | false
as.cuid2(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid CUID2.

- **is.cuid2(arg):**
    - Returns `true` if `arg` is a valid CUID2.
    - Returns `false` if `arg` is not a valid CUID2.

- **as.cuid2(arg):**
    - Returns `value` if `arg` is a valid CUID2.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid CUID2.

```javascript
is.cuid2('c9g2h0a8'); // Returns true
is.cuid2('invalid_cuid2'); // Returns false

as.cuid2('c9g2h0a8'); // Returns 'c9g2h0a8'
as.cuid2('invalid_cuid2'); // Throws TypeError: String is not a value that passed validation
```

## does the string exclude a given substring?
```javascript
is.excludes({ arg: string, value: string }) -> true | false
as.excludes({ arg: string, value: string }) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) excludes a given substring (`value`).

- **is.excludes({ arg, value }):**
    - Returns `true` if `arg` excludes `value`.
    - Returns `false` if `arg` includes `value`.

- **as.excludes({ arg, value }):**
    - Returns `arg` if `arg` excludes `value`.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` includes `value`.

```javascript
is.excludes({ arg: 'hello world', value: 'test' }); // Returns true
is.excludes({ arg: 'hello world', value: 'world' }); // Returns false

as.excludes({ arg: 'hello world', value: 'test' }); // Returns 'hello world'
as.excludes({ arg: 'hello world', value: 'world' }); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid time (HH:MM:SS)?
```javascript
is.time(value) -> true | false
as.time(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid time in the format HH:MM:SS.

- **is.time(arg):**
    - Returns `true` if `arg` is a valid time.
    - Returns `false` if `arg` is not a valid time.

- **as.time(arg):**
    - Returns `value` if `arg` is a valid time.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid time.

```javascript
is.time('12:34:56'); // Returns true
is.time('25:00:00'); // Returns false

as.time('12:34:56'); // Returns '12:34:56'
as.time('25:00:00'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid datetime (YYYY-MM-DDTHH:MM:SS)?
```javascript
is.datetime(value) -> true | false
as.datetime(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid datetime in the format YYYY-MM-DDTHH:MM:SS.

- **is.datetime(arg):**
    - Returns `true` if `arg` is a valid datetime.
    - Returns `false` if `arg` is not a valid datetime.

- **as.datetime(arg):**
    - Returns `value` if `arg` is a valid datetime.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid datetime.

```javascript
is.datetime('2018-01-04T05:52:20'); // Returns true
is.datetime('invalid_datetime'); // Returns false

as.datetime('2018-01-04T05:52:20'); // Returns '2018-01-04T05:52:20'
as.datetime('invalid_datetime'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid date (YYYY-MM-DD)?
```javascript
is.date(value) -> true | false
as.date(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid date in the format YYYY-MM-DD.

- **is.date(arg):**
    - Returns `true` if `arg` is a valid date.
    - Returns `false` if `arg` is not a valid date.

- **as.date(arg):**
    - Returns `value` if `arg` is a valid date.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid date.

```javascript
is.date('2021-12-03'); // Returns true
is.date('invalid_date'); // Returns false

as.date('2021-12-03'); // Returns '2021-12-03'
as.date('invalid_date'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid SHA-256 hash?
```javascript
is.hash(value) -> true | false
as.hash(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid SHA-256 hash.

- **is.hash(arg):**
    - Returns `true` if `arg` is a valid SHA-256 hash.
    - Returns `false` if `arg` is not a valid SHA-256 hash.

- **as.hash(arg):**
    - Returns `value` if `arg` is a valid SHA-256 hash.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid SHA-256 hash.

```javascript
is.hash('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'); // Returns true
is.hash('invalid_hash'); // Returns false

as.hash('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'); // Returns 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
as.hash('invalid_hash'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid ISO time with seconds?
```javascript
is.isoTimeSecond(value) -> true | false
as.isoTimeSecond(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid ISO time with seconds (T12:34:56).

- **is.isoTimeSecond(arg):**
    - Returns `true` if `arg` is a valid ISO time with seconds.
    - Returns `false` if `arg` is not a valid ISO time with seconds.

- **as.isoTimeSecond(arg):**
    - Returns `value` if `arg` is a valid ISO time with seconds.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid ISO time with seconds.

```javascript
is.isoTimeSecond('T12:34:56'); // Returns true
is.isoTimeSecond('invalid_time'); // Returns false

as.isoTimeSecond('T12:34:56'); // Returns 'T

12:34:56'
as.isoTimeSecond('invalid_time'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid ISO timestamp?
```javascript
is.isoTimestamp(value) -> true | false
as.isoTimestamp(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid ISO timestamp.

- **is.isoTimestamp(arg):**
    - Returns `true` if `arg` is a valid ISO timestamp.
    - Returns `false` if `arg` is not a valid ISO timestamp.

- **as.isoTimestamp(arg):**
    - Returns `value` if `arg` is a valid ISO timestamp.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid ISO timestamp.

```javascript
is.isoTimestamp('2021-12-03T10:15:30Z'); // Returns true
is.isoTimestamp('invalid_timestamp'); // Returns false

as.isoTimestamp('2021-12-03T10:15:30Z'); // Returns '2021-12-03T10:15:30Z'
as.isoTimestamp('invalid_timestamp'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid ISO week?
```javascript
is.isoWeek(value) -> true | false
as.isoWeek(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid ISO week.

- **is.isoWeek(arg):**
    - Returns `true` if `arg` is a valid ISO week.
    - Returns `false` if `arg` is not a valid ISO week.

- **as.isoWeek(arg):**
    - Returns `value` if `arg` is a valid ISO week.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid ISO week.

```javascript
is.isoWeek('2021-W48'); // Returns true
is.isoWeek('invalid_week'); // Returns false

as.isoWeek('2021-W48'); // Returns '2021-W48'
as.isoWeek('invalid_week'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid MAC address?
```javascript
is.mac(value) -> true | false
as.mac(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid MAC address.

- **is.mac(arg):**
    - Returns `true` if `arg` is a valid MAC address.
    - Returns `false` if `arg` is not a valid MAC address.

- **as.mac(arg):**
    - Returns `value` if `arg` is a valid MAC address.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid MAC address.

```javascript
is.mac('00:1B:44:11:3A:B7'); // Returns true
is.mac('invalid_mac'); // Returns false

as.mac('00:1B:44:11:3A:B7'); // Returns '00:1B:44:11:3A:B7'
as.mac('invalid_mac'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid MAC-48 address?
```javascript
is.mac48(value) -> true | false
as.mac48(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid MAC-48 address.

- **is.mac48(arg):**
    - Returns `true` if `arg` is a valid MAC-48 address.
    - Returns `false` if `arg` is not a valid MAC-48 address.

- **as.mac48(arg):**
    - Returns `value` if `arg` is a valid MAC-48 address.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid MAC-48 address.

```javascript
is.mac48('00-1B-44-11-3A-B7'); // Returns true
is.mac48('invalid_mac'); // Returns false

as.mac48('00-1B-44-11-3A-B7'); // Returns '00-1B-44-11-3A-B7'
as.mac48('invalid_mac'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid MAC-64 address?
```javascript
is.mac64(value) -> true | false
as.mac64(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid MAC-64 address.

- **is.mac64(arg):**
    - Returns `true` if `arg` is a valid MAC-64 address.
    - Returns `false` if `arg` is not a valid MAC-64 address.

- **as.mac64(arg):**
    - Returns `value` if `arg` is a valid MAC-64 address.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid MAC-64 address.

```javascript
is.mac64('00-1B-44-11-3A-B7-44-11'); // Returns true
is.mac64('invalid_mac'); // Returns false

as.mac64('00-1B-44-11-3A-B7-44-11'); // Returns '00-1B-44-11-3A-B7-44-11'
as.mac64('invalid_mac'); // Throws TypeError: String is not a value that passed validation
```

## is the date in the past?
```javascript
is.past(value) -> true | false
as.past(value) -> value | TypeError: Date is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a date in the past.

- **is.past(arg):**
    - Returns `true` if `arg` is a date in the past.
    - Returns `false` if `arg` is not a date in the past.

- **as.past(arg):**
    - Returns `value` if `arg` is a date in the past.
    - Throws a `TypeError` with message "Date is not a value that passed validation" if `arg` is not a date in the past.

```javascript
is.past('2020-12-03T10:15:30Z'); // Returns true
is.past('2099-12-03T10:15:30Z'); // Returns false

as.past('2020-12-03T10:15:30Z'); // Returns '2020-12-03T10:15:30Z'
as.past('2099-12-03T10:15:30Z'); // Throws TypeError: Date is not a value that passed validation
```

## is the date in the future?
```javascript
is.future(value) -> true | false
as.future(value) -> value | TypeError: Date is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a date in the future.

- **is.future(arg):**
    - Returns `true` if `arg` is a date in the future.
    - Returns `false` if `arg` is not a date in the future.

- **as.future(arg):**
    - Returns `value` if `arg` is a date in the future.
    - Throws a `TypeError` with message "Date is not a value that passed validation" if `arg` is not a date in the future.

```javascript
is.future('2099-12-03T10:15:30Z'); // Returns true
is.future('2020-12-03T10:15:30Z'); // Returns false

as.future('2099-12-03T10:15:30Z'); // Returns '2099-12-03T10:15:30Z'
as.future('2020-12-03T10:15:30Z'); // Throws TypeError: Date is not a value that passed validation
```

## is the string an ASCII string?
```javascript
is.ascii(value) -> true | false
as.ascii(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is an ASCII string.

- **is.ascii(arg):**
    - Returns `true` if `arg` is an ASCII string.
    - Returns `false` if `arg` is not an ASCII string.

- **as.ascii(arg):**
    - Returns `value` if `arg` is an ASCII string.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not an ASCII string.

```javascript
is.ascii('hello'); // Returns true
is.ascii('こんにちは'); // Returns false

as.ascii('hello'); // Returns 'hello'
as.ascii('こんにちは'); // Throws TypeError: String is not a

 value that passed validation
```

## is the string a valid Base32 encoded string?
```javascript
is.base32(value) -> true | false
as.base32(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid Base32 encoded string.

- **is.base32(arg):**
    - Returns `true` if `arg` is a valid Base32 encoded string.
    - Returns `false` if `arg` is not a valid Base32 encoded string.

- **as.base32(arg):**
    - Returns `value` if `arg` is a valid Base32 encoded string.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid Base32 encoded string.

```javascript
is.base32('MZXW6YTBOI======'); // Returns true
is.base32('invalid_base32'); // Returns false

as.base32('MZXW6YTBOI======'); // Returns 'MZXW6YTBOI======'
as.base32('invalid_base32'); // Throws TypeError: String is not a value that passed validation
```

## is the string a valid Base58 encoded string?
```javascript
is.base58(value) -> true | false
as.base58(value) -> value | TypeError: String is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a valid Base58 encoded string.

- **is.base58(arg):**
    - Returns `true` if `arg` is a valid Base58 encoded string.
    - Returns `false` if `arg` is not a valid Base58 encoded string.

- **as.base58(arg):**
    - Returns `value` if `arg` is a valid Base58 encoded string.
    - Throws a `TypeError` with message "String is not a value that passed validation" if `arg` is not a valid Base58 encoded string.

```javascript
is.base58('3mJr7AoUXx2Wqd'); // Returns true
is.base58('invalid_base58'); // Returns false

as.base58('3mJr7AoUXx2Wqd'); // Returns '3mJr7AoUXx2Wqd'
as.base58('invalid_base58'); // Throws TypeError: String is not a value that passed validation
```

## is the date before a specific date?
```javascript
is.before({ arg: string, value: string }) -> true | false
as.before({ arg: string, value: string }) -> value | TypeError: Date is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a date before a specific date (`value`).

- **is.before({ arg, value }):**
    - Returns `true` if `arg` is before `value`.
    - Returns `false` if `arg` is not before `value`.

- **as.before({ arg, value }):**
    - Returns `arg` if `arg` is before `value`.
    - Throws a `TypeError` with message "Date is not a value that passed validation" if `arg` is not before `value`.

```javascript
is.before({ arg: '2021-12-03T10:15:30Z', value: '2022-01-01T00:00:00Z' }); // Returns true
is.before({ arg: '2023-01-01T00:00:00Z', value: '2022-01-01T00:00:00Z' }); // Returns false

as.before({ arg: '2021-12-03T10:15:30Z', value: '2022-01-01T00:00:00Z' }); // Returns '2021-12-03T10:15:30Z'
as.before({ arg: '2023-01-01T00:00:00Z', value: '2022-01-01T00:00:00Z' }); // Throws TypeError: Date is not a value that passed validation
```

## is the date after a specific date?
```javascript
is.after({ arg: string, value: string }) -> true | false
as.after({ arg: string, value: string }) -> value | TypeError: Date is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) is a date after a specific date (`value`).

- **is.after({ arg, value }):**
    - Returns `true` if `arg` is after `value`.
    - Returns `false` if `arg` is not after `value`.

- **as.after({ arg, value }):**
    - Returns `arg` if `arg` is after `value`.
    - Throws a `TypeError` with message "Date is not a value that passed validation" if `arg` is not after `value`.

```javascript
is.after({ arg: '2023-01-01T00:00:00Z', value: '2022-01-01T00:00:00Z' }); // Returns true
is.after({ arg: '2021-12-03T10:15:30Z', value: '2022-01-01T00:00:00Z' }); // Returns false

as.after({ arg: '2023-01-01T00:00:00Z', value: '2022-01-01T00:00:00Z' }); // Returns '2023-01-01T00:00:00Z'
as.after({ arg: '2021-12-03T10:15:30Z', value: '2022-01-01T00:00:00Z' }); // Throws TypeError: Date is not a value that passed validation
```
Конечно, продолжим генерацию документации.

## is the string length less than or equal to a specific value?
```javascript
is.maxStr({ arg: string, value: number }) -> true | false
as.maxStr({ arg: string, value: number }) -> value | TypeError: String length is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) length is less than or equal to a specific value (`value`).

- **is.maxStr({ arg, value }):**
    - Returns `true` if `arg` length is less than or equal to `value`.
    - Returns `false` if `arg` length is greater than `value`.

- **as.maxStr({ arg, value }):**
    - Returns `arg` if `arg` length is less than or equal to `value`.
    - Throws a `TypeError` with message "String length is not a value that passed validation" if `arg` length is greater than `value`.

```javascript
is.maxStr({ arg: '1234567890', value: 10 }); // Returns true
is.maxStr({ arg: '12345678901', value: 10 }); // Returns false

as.maxStr({ arg: '1234567890', value: 10 }); // Returns '1234567890'
as.maxStr({ arg: '12345678901', value: 10 }); // Throws TypeError: String length is not a value that passed validation
```

## is the string length greater than or equal to a specific value?
```javascript
is.minStr({ arg: string, value: number }) -> true | false
as.minStr({ arg: string, value: number }) -> value | TypeError: String length is not a value that passed validation
```

### Description

This function checks if the provided argument (`arg`) length is greater than or equal to a specific value (`value`).

- **is.minStr({ arg, value }):**
    - Returns `true` if `arg` length is greater than or equal to `value`.
    - Returns `false` if `arg` length is less than `value`.

- **as.minStr({ arg, value }):**
    - Returns `arg` if `arg` length is greater than or equal to `value`.
    - Throws a `TypeError` with message "String length is not a value that passed validation" if `arg` length is less than `value`.

```javascript
is.minStr({ arg: '123', value: 3 }); // Returns true
is.minStr({ arg: '12', value: 3 }); // Returns false

as.minStr({ arg: '123', value: 3 }); // Returns '123'
as.minStr({ arg: '12', value: 3 }); // Throws TypeError: String length is not a value that passed validation
```
