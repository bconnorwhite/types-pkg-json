
export type Scripts = {
  /**
   * Run **before** the package is published (Also run on local `npm install` without any arguments).
   */
  prepublish?: string;
  /**
   * Run both **before** the package is packed and published, and on local `npm install` without any arguments. This is run **after** `prepublish`, but **before** `prepublishOnly`.
   */
  prepare?: string;
  /**
   * Run **before** the package is prepared and packed, **only** on `npm publish`.
   */
  prepublishOnly?: string;
  /**
   * Run **before** a tarball is packed (on `npm pack`, `npm publish`, and when installing git dependencies).
   */
  prepack?: string;
  /**
   * Run **after** the tarball has been generated and moved to its final destination.
   */
  postpack?: string;
  /**
   * Run **after** the package is published.
   */
  publish?: string;
  /**
   * Run **after** the package is published.
   */
  postpublish?: string;
  /**
   * Run **before** the package is installed.
   */
  preinstall?: string;
  /**
   * Run **after** the package is installed.
   */
  install?: string;
  /**
   * Run **after** the package is installed and after `install`.
   */
  postinstall?: string;
  /**
   * Run **before** the package is uninstalled and before `uninstall`.
   */
  preuninstall?: string;
  /**
   * Run **before** the package is uninstalled.
   */
  uninstall?: string;
  /**
   * Run **after** the package is uninstalled.
   */
  postuninstall?: string;
  /**
   * Run **before** bump the package version and before `version`.
   */
  preversion?: string;
  /**
   * Run **before** bump the package version.
   */
  version?: string;
  /**
   * Run **after** bump the package version.
   */
  postversion?: string;
  /**
   * Run with the `npm test` command, before `test`.
   */
  pretest?: string;
  /**
   * Run with the `npm test` command.
   */
  test?: string;
  /**
   * Run with the `npm test` command, after `test`.
   */
  posttest?: string;
  /**
   * Run with the `npm stop` command, before `stop`.
   */
  prestop?: string;
  /**
   * Run with the `npm stop` command.
   */
  stop?: string;
  /**
   * Run with the `npm stop` command, after `stop`.
   */
  poststop?: string;
  /**
   * Run with the `npm start` command, before `start`.
   */
  prestart?: string;
  /**
   * Run with the `npm start` command.
   */
  start?: string;
  /**
   * Run with the `npm start` command, after `start`.
   */
  poststart?: string;
  /**
   * Run with the `npm restart` command, before `restart`. Note: `npm restart` will run the `stop` and `start` scripts if no `restart` script is provided.
   */
  prerestart?: string;
  /**
   * Run with the `npm restart` command. Note: `npm restart` will run the `stop` and `start` scripts if no `restart` script is provided.
   */
  restart?: string;
  /**
   * Run with the `npm restart` command, after `restart`. Note: `npm restart` will run the `stop` and `start` scripts if no `restart` script is provided.
   */
  postrestart?: string;
} & {
  [scriptName in string]?: string;
};
