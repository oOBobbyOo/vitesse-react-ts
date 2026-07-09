# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

@vitejs/plugin-react [React Compiler](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#react-compiler)

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

See the [oxlint-tsgolint](https://github.com/oxc-project/tsgolint#installation--usage)

`.oxlintrc.json`

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true,
    "typeCheck": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": [
      "warn",
      {
        "allowConstantExport": true
      }
    ]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Oxfmt configuration

[Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)

See the [config-file-reference](https://oxc.rs/docs/guide/usage/formatter/config-file-reference.html)

`.oxfmtrc.json`

```json
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "arrowParens": "always", // 如果箭头函数只有一个参数，那么该参数必须用括号括起来。(默认 "always")
  "bracketSameLine": true, // 将多行 HTML 元素（包括 HTML、JSX、Vue、Angular 中的元素）的 > 标记放在最后一行末尾，而不是单独放在下一行上（不适用于自动闭合的元素）。(默认 false)
  "bracketSpacing": true, // 在对象字面量中，要在括号之间保留空格。(默认 true)
  "embeddedLanguageFormatting": "auto", // 控制是否对文件中的嵌入内容进行格式化处理（例如，CSS-in-JS、JS-in-Vue 等）。(默认 "auto")
  "endOfLine": "lf", // 行尾类型。(默认 "lf")
  "ignorePatterns": ["dist", "node_modules"], // 忽略符合这些通配符模式的文件。
  "insertFinalNewline": true, // 是否在文件末尾添加一个换行符。(默认 true)
  "jsdoc": true, // 启用 JSDoc 注释格式化功能。(默认 false)
  "jsxSingleQuote": false, // 在 JSX 中，应使用单引号而非双引号。(默认 false)
  "printWidth": 100, // 每行最大字符数。 (默认 100)
  "semi": false, // 在语句的末尾打印分号。(默认 true)
  "singleAttributePerLine": false, // 在 HTML、Vue 和 JSX 中，必须确保每行只包含一个属性。(默认 false)
  "singleQuote": true, // 请使用单引号，而非双引号。(默认 false)
  "sortImports": true, // 自动排序 import 语句 。(默认 false)
  "sortTailwindcss": true, // 自动排序 Tailwind CSS 类名。(默认 false)
  "sortPackageJson": true, // 自动排序 package.json 字段。(默认 false)
  "tabWidth": 2, // 指定每个缩进层级对应的空格数量。(默认 2)
  "trailingComma": "all", // 在多行、以逗号分隔的语法结构中，尽可能在每行的末尾添加逗号。(默认 "all")
  "useTabs": false, // 使用制表符来缩进行距，而不是空格。(默认 false)
  "vueIndentScriptAndStyle": false // 在 Vue 文件的 <script> 和 <style> 标签中，是否需要对其中的代码进行缩进处理。(默认 false)
}
```

## simple-git-hooks

[simple-git-hooks](https://github.com/toplenboren/simple-git-hooks#simple-git-hooks)

## lint-staged

[lint-staged](https://github.com/lint-staged/lint-staged#-lint-staged)

## nano-staged

[nano-staged](https://github.com/usmanyunusov/nano-staged#getting-started)
