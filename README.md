# @pro-script plugins v0.2.0
## Please read the [@pro-script documentation](https://www.npmjs.com/package/@pro-script/as-is) first

## installation
```bash
npm install @pro-script/as-is-plugins
```
For a browser without module
```html
<script src="https://www.unpkg.com/@pro-script/as-is-plugins@latest/dist/numbers.browser.js"></script>
<script src="https://www.unpkg.com/@pro-script/as-is@latest/index.js"></script>
````
For a browser with module
```html
<script type="module">
    import { Checker } from "https://www.unpkg.com/@pro-script/as-is@latest/index.js";
    import { NumbersValidator } from "https://www.unpkg.com/@pro-script/as-is-plugins@latest/dist/numbers.esm.mjs";
    
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
const { Checker } = require('@pro-script/as-is/dist/as-is.common');
const { NumbersValidator } = require('@pro-script/as-is-plugins/dist/numbers.common');

const { as, is, ... } = new Checker({ integrate: NumbersValidator });
```
Browser without module
```javascript
const { as, is, ... } = new Checker({ integrate: NumbersValidator });
```
Browser with module
```html
<script type="module">
    import { Checker } from "https://www.unpkg.com/@pro-script/as-is@latest/dist/as-is.esm.mjs";
    import { NumbersValidator } from "https://www.unpkg.com/@pro-script/as-is-plugins@latest/dist/numbers.esm.mjs";

    const { as, is, ... } = new Checker({ integrate: NumbersValidator });
</script>
```
Browser with importmap
```html
<script type="importmap">
  {
    "imports": {
      "@pro-script/as-is": "https://www.unpkg.com/@pro-script/as-is@latest/dist/as-is.esm.mjs",
      "@pro-script/as-is-plugins": "https://www.unpkg.com/@pro-script/as-is-plugins@latest/dist/numbers.esm.mjs",
    }
  }
</script>
<script type="module">
    import { Checker } from '@pro-script/as-is';
    import { NumbersValidator } from '@pro-script/as-is-plugins';

    const { as, is, ... } = new Checker({ integrate: NumbersValidator });
</script>

```

# Table of contexts

- [Numbers](./documentation/numbers.md)
