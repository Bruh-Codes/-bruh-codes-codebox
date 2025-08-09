# CodeBox

Code syntax highlighting tool for Editor.js, forked from [@bomdi/codebox](https://github.com/bomdi/editorjs-codebox) and updated with new features.

## Features

*   **Read-Only Mode:**  Hides the language selection dropdown when the editor is in read-only mode.
*   **Automatic Theme Switching:**  Syncs with your Next.js app's theme (via `next-themes`), automatically switching between light and dark modes.
*   **Responsive Design:** Adapts to different screen sizes for a better user experience.
*   **Syntax Highlighting:** Powered by `highlight.js`.

## Installation

### Install via yarn

```shell
yarn add @bruh-codes/codebox
```

Add to your module/application

```javascript
const CodeBox = require('@bruh-codes/codebox');
```


## Usage

Add CodeBox `tools` property of the CodeX Editor initial config.

```javascript
const CodexEditor = require('@editorjs/editorjs');

let editor = new CodexEditor({
  ... 

  tools: {
    ... 
    codeBox: {
      class: CodeBox,
      config: {
        themeURL: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css', // Optional
        themeName: 'atom-one-dark', // Optional
        useDefaultTheme: 'light' // Optional. This also determines the background color of the language select drop-down
      }
    },
  }

  ... 
});
```

## Config Params

**All parameters are optional**

| Field              | Type     | Description                   |
| ------------------ | -------- | ------------------------------|
| themeURL           | `string` | URL pointing to CSS file that can be used by [highlight.js](https://highlightjs.org/). This could also point o your own custom CSS syntax file. If **themeURL** is provided, **themeName** and **useDefaultTheme** will be ignored |
| themeName          | `string` | Any one of the [accepted theme names](https://github.com/highlightjs/highlight.js/tree/master/src/styles) used by **highlight.js**. Only the name is required, not the full URL (example "a11y-dark"). If **themeName** is provided, **useDefaultTheme** will be ignored |
| useDefaultTheme    | `string` | **CodeBox** has 2 default themes - 1 light and 1 dark. You can specify what default should be applied by passing the string **'light'** or **'dark'** to this parameter. Note that setting **themeURL** or **themeName** overrides this setting for the main code block, however, the background of the language select element/dropdown menu is set by this value |

If no parameters are specified, CodeBox defaults to a dark theme.

## Output data

CodeBox returns the following data

```json
{
  "type": "codeBox",
  "data": {
    "code": "consttest = newTest();.codeBoxTextArea{\n  width: 100%;\n  min-height: 30px;\n  padding: 10px;\n  border-radius: 2px 2px 2px 0;\n  border: none !important;\n  outline: none !important;\n  font: 14px monospace;\n}\n\n.codeBoxSelectDiv{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: relative;\n}",
    "language": "css",
    "theme": "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/atom-one-dark.min.css"
  }
}
```

## Render saved data as component

If you use react, you can pass your saved data to the library [editorjs-react-renderer](https://www.npmjs.com/package/editorjs-react-renderer) to render a code block component

```javascript
import { CodeBoxOutput } from 'editorjs-react-renderer';

const data = {
  "type": "codeBox",
  "data": {
    "code": ".codeBoxTextArea{\n  width: 100%;\n  min-height: 30px;\n  padding: 10px;\n  border-radius: 2px 2px 2px 0;\n  border: none !important;\n  outline: none !important;\n  font: 14px monospace;\n}\n\n.codeBoxSelectDiv{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: relative;\n}",
    "language": "css",
    "theme": "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/atom-one-dark.min.css"
  }
};

const CodeBlock = () => CodeBoxOutput(data);

export default CodeBlock;
```


## Author

Kamasah Dickson

Twitter: [Bruh_codes](https://x.com/bruh_codes)

```