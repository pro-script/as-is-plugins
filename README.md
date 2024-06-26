# @pro-script plugins v0.2
## Please read the [@pro-script documentation](https://www.npmjs.com/package/@pro-script/as-is) first

# Table of contexts
1. [Installation](#installation)
2. [Usage](#usage)
3. [Validate Numbers](./documentation/numbers.md)
4. Validate ... (work in progress)

## installation
```bash
npm install @pro-script/as-is-plugins
```
For a browser without module
```html
<script src="https://www.unpkg.com/@pro-script/as-is-plugins@latests"></script>
<script src="https://www.unpkg.com/@pro-script/as-is@latest"></script>
````
For a browser with module
```html
<script type="module">
    import { Checker } from "https://www.unpkg.com/@pro-script/as-is";
    import { NumbersValidator } from "https://www.unpkg.com/@pro-script/as-is-plugins";
    
    ...
</script>
```
## Usage

Node.js modules
```javascript
import { Checker } from '@pro-script/as-is';
import { NumbersValidator } from '@pro-script/as-is-plugins';

const { as, is, ... } = new Checker({ integrate: NumbersValidator });
```
Node.js common modules
```javascript
const { Checker } = require('@pro-script/as-is');
const { NumbersValidator } = require('@pro-script/as-is-plugins');

const { as, is, ... } = new Checker({ integrate: NumbersValidator });
```
Browser without module
```javascript
const { as, is, ... } = new Checker({ integrate: NumbersValidator });
```
Browser with module
```html
<script type="module">
    import { Checker } from "https://www.unpkg.com/@pro-script/as-is";
    import { NumbersValidator } from "https://www.unpkg.com/@pro-script/as-is-plugins";

    const { as, is, ... } = new Checker({ integrate: NumbersValidator });
</script>
```
Browser with importmap
```html
<script type="importmap">
  {
    "imports": {
      "@pro-script/as-is": "https://www.unpkg.com/@pro-script/as-is",
      "@pro-script/as-is-plugins": "https://www.unpkg.com/@pro-script/as-is-plugins",
    }
  }
</script>
<script type="module">
    import { Checker } from '@pro-script/as-is';
    import { NumbersValidator } from '@pro-script/as-is-plugins';

    const { as, is, ... } = new Checker({ integrate: NumbersValidator });
</script>

```
If for some reason the module isn't switching to the correct URL, make sure to check the dist folder.
```bash
@pro-script/as-is@latest/dist/
  as-is.browser.js
  as-is.common.js
  as-is.esm.mjs
@pro-script/as-is-plugins@latest/dist/
  numbers.browser.js
  numbers.common.js
  numbers.esm.mjs
```


