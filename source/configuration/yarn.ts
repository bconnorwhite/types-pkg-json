import { Dependencies } from "../fields";

/**
 * An alternative configuration for Yarn workspaces.
 */
export type WorkspaceConfig = {
  /**
   * An array of workspace pattern strings which contain the workspace packages.
   */
  packages?: WorkspacePattern[];
  /**
   * Designed to solve the problem of packages which break when their `node_modules` are moved to the root workspace directory - a process known as hoisting.
   * For these packages, both within your workspace, and also some that have been installed via `node_modules`,
   * it is important to have a mechanism for preventing the default Yarn workspace behavior.
   * By adding workspace pattern strings here, Yarn will resume non-workspace behavior for any package which matches the defined patterns.
   * [Read more](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)
   */
  nohoist?: WorkspacePattern[];
}

/**
 * A workspace pattern points to a directory or group of directories which contain packages that should be included in the workspace installation process.
 * The patterns are handled with [minimatch](https://github.com/isaacs/minimatch).
 * @example
 * `docs` → Include the docs directory and install its dependencies.
 * `packages/*` → Include all nested directories within the packages directory, like `packages/cli` and `packages/core`.
 */
export type WorkspacePattern = string;

export type YarnConfiguration = {
  /**
   * Used to configure [Yarn workspaces](https://classic.yarnpkg.com/docs/workspaces/).
   * Workspaces allow you to manage multiple packages within the same repository in such a way that you only need to run `yarn install`
   * once to install all of them in a single pass. Please note that the top-level `private` property of `package.json` **must** be set to `true` in order to use workspaces.
   */
  workspaces?: WorkspacePattern[] | WorkspaceConfig;
  /**
   * If your package only allows one version of a given dependency, and you’d like to enforce the same behavior as `yarn install --flat` on the command-line, set this to `true`.
   * Note that if your `package.json` contains `"flat": true` and other packages depend on yours (e.g. you are building a library rather than an app),
   * those other packages will also need `"flat": true` in their `package.json` or be installed with `yarn install --flat` on the command-line.
   */
  flat?: boolean;
  /**
   * Selective version resolutions. Allows the definition of custom package versions inside dependencies without manual edits in the `yarn.lock` file.
   */
  resolutions?: Dependencies;
}
