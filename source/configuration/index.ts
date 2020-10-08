import { ESLintConfig } from "types-eslintrc";
import { PackageJSON } from "../";

export { YarnConfiguration, WorkspaceConfig, WorkspacePattern } from "./yarn";

export type TypeScriptConfiguration = {
  /**
   * Location of the bundled TypeScript declaration file.
   */
  types?: string;
  /**
   * Location of the bundled TypeScript declaration file. Alias of `types`.
   */
  typings?: string;
}

export type ESLintConfiguration = {
  /**
   * Configuration settings for eslint.
   */
  eslintConfig?: ESLintConfig;
}


export type JSPMConfiguration = {
  /**
   * JSPM configuration.
   */
  jspm?: PackageJSON;
}
