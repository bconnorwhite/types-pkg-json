import { LiteralUnion } from "../utils";

export type BugsLocation = string | {
  /**
   * The URL to the package's issue tracker.
   */
  url?: string;
  /**
   * The email address to which issues should be reported.
   */
  email?: string;
};

export type LicenseID = LiteralUnion<"MIT" | "ISC", string>;

export type License = {
  type?: LicenseID;
  url?: string;
};

export type Licenses = License[];

/**
 * A person who has been involved in creating or maintaining the package.
 */
export type Person = string | {
  name: string;
  url?: string;
  email?: string;
};

export type Bin = string | {
  [binary: string]: string;
};

export type DirectoryLocations = {
  /**
   * Location for executable scripts. Sugar to generate entries in the `bin` property by walking the folder.
   */
  bin?: string;
  /**
   * Location for Markdown files.
   */
  doc?: string;
  /**
   * Location for example scripts.
   */
  example?: string;
  /**
   * Location for the bulk of the library.
   */
  lib?: string;
  /**
   * Location for man pages. Sugar to generate a `man` array by walking the folder.
   */
  man?: string;
  /**
   * Location for test files.
   */
  test?: string;
};

/**
Specify the place where your code lives. This is helpful for people who want to contribute.
*/
export type Repository = string | {
  type: LiteralUnion<"git" | "svn", string>;
  /**
   * A publicly available (perhaps read-only) url that can be handed directly to a VCS program without any modification.
   */
  url: string;
  /**
   * Relative path to package.json if it is placed in non-root directory (for example if it is part of a monorepo).
   * [Read more.](https://github.com/npm/rfcs/blob/latest/implemented/0010-monorepo-subdirectory-declaration.md)
   */
  directory?: string;
};

/**
Dependencies of the package. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or Git URL.
*/
export type Dependencies = {
  [packageName: string]: string;
}

export type PeerDependenciesMeta = {
  [packageName: string]: {
    optional: true;
  };
};

export type Engines = {
  [EngineName in "npm" | "node" | string]: string;
};

export type OS = LiteralUnion<
  | "aix"
  | "darwin"
  | "freebsd"
  | "linux"
  | "openbsd"
  | "sunos"
  | "win32"
  | "!aix"
  | "!darwin"
  | "!freebsd"
  | "!linux"
  | "!openbsd"
  | "!sunos"
  | "!win32",
  string
>;

export type CPU = LiteralUnion<
  | "arm"
  | "arm64"
  | "ia32"
  | "mips"
  | "mipsel"
  | "ppc"
  | "ppc64"
  | "s390"
  | "s390x"
  | "x32"
  | "x64"
  | "!arm"
  | "!arm64"
  | "!ia32"
  | "!mips"
  | "!mipsel"
  | "!ppc"
  | "!ppc64"
  | "!s390"
  | "!s390x"
  | "!x32"
  | "!x64",
  string
>;

export type Funding = string | {
  /**
   * The type of funding.
   */
  type?: LiteralUnion<
    | "github"
    | "opencollective"
    | "patreon"
    | "individual"
    | "foundation"
    | "corporation",
    string
  >;
  /**
   * The URL to the funding page.
   */
  url: string;
};

export { Scripts } from "./scripts";
