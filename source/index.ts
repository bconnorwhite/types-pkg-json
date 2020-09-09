import { isJSONObject, JSONValue, JSONArray } from "types-json";
import {
	JSONObject,
	Primitive,
	LiteralUnion,
	Person,
	BugsLocation,
	DirectoryLocations,
	Scripts,
	Dependencies,
	Repository,
	NonStandardEntryPoints,
	TypeScriptConfiguration,
	WorkspaceConfig,
	WorkspacePattern,
	YarnConfiguration,
	JSPMConfiguration,
	LicenseID,
	PackageJSON
} from "./types";

export const fileName = "package.json";

export {
	JSONObject,
	Primitive,
	LiteralUnion,
	Person,
	BugsLocation,
	DirectoryLocations,
	Scripts,
	Dependencies,
	Repository,
	NonStandardEntryPoints,
	TypeScriptConfiguration,
	WorkspaceConfig,
	WorkspacePattern,
	YarnConfiguration,
	JSPMConfiguration,
	LicenseID,
	PackageJSON,
	JSONValue,
	JSONArray,
	isJSONObject
}
