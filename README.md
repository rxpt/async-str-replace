[npm]: https://img.shields.io/npm/v/async-str-replace
[npm-url]: https://www.npmjs.com/package/async-str-replace
[size]: https://packagephobia.now.sh/badge?p=async-str-replace
[size-url]: https://packagephobia.now.sh/result?p=async-str-replace

# async-str-replace [![npm][npm]][npm-url] [![size][size]][size-url]

**_Note: This package has been [deprecated](#deprecated) and will no longer receive updates. However, it is still perfectly functional._**

This package is a simple string replace function that can handle both synchronous and asynchronous replace operations. It accepts one or more replacement objects and replaces all occurrences of their search string with their replace string in the provided string.

## Installation

This function can be used in both Node.js and browser environments. You can install it using npm or yarn:

```bash
npm install async-str-replace

# or

yarn add async-str-replace
```

## Usage

```js
const asyncStrReplace = require("async-str-replace");

const string = "Hello, world!";

const replacements = [
  {
    search: "world",
    replace: "there",
  },
  {
    search: /o/g,
    replace: async () => {
      // Some async operation...
      return "O";
    },
  },
];

async function main() {
  const result = await asyncStrReplace(string, replacements);
  console.log(result); // "HellO, there!"
}

main();
```

## Deprecated

Please note that this package is now deprecated in favor of `str-async-replace`. Although `async-str-replace` is still fully functional, we recommend using `str-async-replace` for new projects, as it offers additional features and a more intuitive API.

`str-async-replace` can be installed via npm:

```bash
npm install str-async-replace
```

Please note that `async-str-replace` and `str-async-replace` do not function identically. For information on how to use `str-async-replace`, please consult its documentation: [https://www.npmjs.com/package/str-async-replace](https://www.npmjs.com/package/str-async-replace?activeTab=readme)

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
