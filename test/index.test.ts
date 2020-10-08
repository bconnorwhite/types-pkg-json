import { test, expect } from "@jest/globals";
import { fileName, isJSONObject } from "../source";

test("import sanity check", () => {
  expect(fileName).toBe("package.json");
});

test("isJSONObject", () => {
  expect(isJSONObject({ name: "package name", description: "description", version: "1.0.0" })).toBe(true);
});
