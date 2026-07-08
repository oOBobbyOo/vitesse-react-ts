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

[oxlint-tsgolint](https://github.com/oxc-project/tsgolint#installation--usage)

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
            { "allowConstantExport": true }
        ]
    }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Oxfmt configuration

[Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)
