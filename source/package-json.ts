import { JSONObject } from "types-json";
import { LiteralUnion } from "./utils";
import {
  BugsLocation,
  LicenseID,
  Licenses,
  Person,
  Bin,
  DirectoryLocations,
  Repository,
  Scripts,
  Dependencies,
  PeerDependenciesMeta,
  Engines,
  OS,
  CPU,
  Funding
} from "./fields";
import {
  YarnConfiguration,
  TypeScriptConfiguration,
  JSPMConfiguration,
  ESLintConfiguration
} from "./configuration";

export type NonStandardEntryPoints = {
  /**
   * An ECMAScript module ID that is the primary entry point to the program.
   */
  module?: string;
  /**
   * A module ID with untranspiled code that is the primary entry point to the program.
   */
  esnext?: string | {
    [moduleName: string]: string | undefined;
    main?: string;
    browser?: string;
  };
  /**
   * A hint to JavaScript bundlers or component tools when packaging modules for client side use.
   */
  browser?: string | {
    [moduleName: string]: string | false;
  };
  /**
   * Denote which files in your project are "pure" and therefore safe for Webpack to prune if unused.
   * [Read more.](https://webpack.js.org/guides/tree-shaking/)
   */
  sideEffects?: boolean | string[];
}

/**
 * Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file).
 * Also includes types for fields used by other popular projects, like TypeScript and Yarn.
 */
export type PackageJSON = JSONObject & {
  /**
   * The name of the package.
   */
  name?: string;
  /**
   * Package version, parseable by [`node-semver`](https://github.com/npm/node-semver).
   */
  version?: string;
  /**
   * Package description, listed in `npm search`.
   */
  description?: string;
  /**
   * Keywords associated with package, listed in `npm search`.
   */
  keywords?: string[];
  /**
   * The URL to the package's homepage.
   */
  homepage?: LiteralUnion<".", string>;
  /**
   * The URL to the package's issue tracker and/or the email address to which issues should be reported.
   */
  bugs?: BugsLocation;
  /**
   * The license for the package.
   */
  license?: LicenseID;
  /**
   * The licenses for the package.
   */
  licenses?: Licenses;
  author?: Person;
  /**
   * A list of people who contributed to the package.
   */
  contributors?: Person[];
  /**
   * A list of people who maintain the package.
   */
  maintainers?: Person[];
  /**
   * The files included in the package.
   */
  files?: string[];
  /**
   * The module ID that is the primary entry point to the program.
   */
  main?: string;
  /**
   * The executable files that should be installed into the `PATH`.
   */
  bin?: Bin;
  /**
   * Filenames to put in place for the `man` program to find.
   */
  man?: string | string[];
  /**
   * Indicates the structure of the package.
   */
  directories?: DirectoryLocations;
  /**
   * Location for the code repository.
   */
  repository?: Repository;
  /**
   * Script commands that are run at various times in the lifecycle of the package. The key is the lifecycle event, and the value is the command to run at that point.
   */
  scripts?: Scripts;
  /**
   * Is used to set configuration parameters used in package scripts that persist across upgrades.
   */
  config?: JSONObject;
  /**
   * The dependencies of the package.
   */
  dependencies?: Dependencies;
  /**
   * Additional tooling dependencies that are not required for the package to work. Usually test, build, or documentation tooling.
   */
  devDependencies?: Dependencies;
  /**
   * Dependencies that are skipped if they fail to install.
   */
  optionalDependencies?: Dependencies;
  /**
   * Dependencies that will usually be required by the package user directly or via another dependency.
   */
  peerDependencies?: Dependencies;
  /**
   * Indicate peer dependencies that are optional.
   */
  peerDependenciesMeta?: PeerDependenciesMeta;
  /**
   * Package names that are bundled when the package is published.
   */
  bundledDependencies?: string[];
  /**
   * Alias of `bundledDependencies`.
   */
  bundleDependencies?: string[];
  /**
   * Engines that this package runs on.
   */
  engines?: Engines;
  /**
   * @deprecated
   */
  engineStrict?: boolean;
  /**
   * Operating systems the module runs on.
   */
  os?: OS[];
  /**
   * CPU architectures the module runs on.
   */
  cpu?: CPU[];
  /**
   * If set to `true`, a warning will be shown if package is installed locally. Useful if the package is primarily a command-line application that should be installed globally.
   * @deprecated
   */
  preferGlobal?: boolean;
  /**
   * If set to `true`, then npm will refuse to publish it.
   */
  private?: boolean;
  /**
   * A set of config values that will be used at publish-time. It's especially handy to set the tag, registry or access, to ensure that a given package is not tagged with 'latest',
   * published to the global public registry or that a scoped module is private by default.
   */
  publishConfig?: JSONObject;
  /**
   * Describes and notifies consumers of a package's monetary support information.
  [Read more.](https://github.com/npm/rfcs/blob/latest/accepted/0017-add-funding-support.md)
   */
  funding?: Funding;
} &
NonStandardEntryPoints &
TypeScriptConfiguration &
ESLintConfiguration &
YarnConfiguration &
JSPMConfiguration &
JSONObject;
