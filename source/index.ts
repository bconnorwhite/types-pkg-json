export { isJSONObject, JSONObject, JSONValue, JSONArray } from "types-json";
export { NonStandardEntryPoints, PackageJSON } from "./package-json";
export { Primitive, LiteralUnion } from "./utils";
export {
  Person,
  BugsLocation,
  DirectoryLocations,
  Scripts,
  Dependencies,
  Repository,
  LicenseID
} from "./fields";
export {
  TypeScriptConfiguration,
  WorkspaceConfig,
  WorkspacePattern,
  YarnConfiguration,
  JSPMConfiguration
} from "./configuration";

export type PackageJSONFileName = "package.json";

export const fileName: PackageJSONFileName = "package.json";
