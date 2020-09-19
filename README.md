<div align="center">
  <h1>types-pkg-json</h1>
  <a href="https://npmjs.com/package/types-pkg-json">
    <img alt="npm" src="https://img.shields.io/npm/v/types-pkg-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-package-json">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/types-package-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-package-json">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/types-package-json?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Type checking for package.json.

Derived from [type-fest](https://www.npmjs.com/package/type-fest) with a focus on package.json types.

## Installation

```bash
yarn add types-pkg-json
```

```bash
npm install types-pkg-json
```

## API

### Types

```ts
import { fileName, PackageJSON } from "types-pkg-json"; // Type for NPM's package.json file

console.log(fileName); // "package.json"
```

#### Field Types

```ts
import {
  BugsLocation, // Used by the `bugs` field.
  LicenseID, // Used by the `license` and `licenses.type` fields.
  Person, // Used by the `author`, `contributors`, and `maintainers` fields.
  DirectoryLocations, // Used by the `directories` field.
  Repository, // Used by the `repository` field.
  Scripts, // Used by the `scripts` field.
  Dependencies // Used by the `dependencies`, `devDependencies`, `optionalDependencies`, and `peerDependencies` fields.
} from "types-pkg-json";
```

#### Intersection Types

```ts
import {
  NonStandardEntryPoints, // module, esnext, browser, sideEffects
  TypeScriptConfiguration, // types, typings
  WorkspaceConfig, // packages, nohoist
  YarnConfiguration, // workspaces, flat, resolutions
  JSPMConfiguration, // jspm
  ESLintConfiguration // eslintConfig
} from "types-pkg-json";
```

#### Utility Types

```ts
import {
  isJSONObject
  JSONObject,
  JSONValue,
  JSONArray,
  Primitive,
  LiteralUnion
} from "types-pkg-json";

function isJSONObject(object?: JSONValue): object is JSONObject;
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/types-package-json.svg"></h2>

- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON objects

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/types-package-json.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/types-pkg-json.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
