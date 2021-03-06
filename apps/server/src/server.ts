/**
 * This file was auto-generated using the Sensible Boilerplate Creator (npx create-sensible-app).
 * You can edit it in what ever way you see fit.
 *
 * zou moeten werken
 */
import { PublicConstants } from "core-nanorave";
import fs from "fs";
import path, { resolve } from "path";
import { findFiles, importFromFiles, Path } from "sensible-files";
import { makeSensibleEndpoints } from "sensible-server";
import { Middleware } from "server/typings/common";
import { interpretableTypes } from "./typeFiles";

export const getServerEndpoints = (): Middleware[] => {
  const imports = importFromFiles({
    files: findFiles("api", __dirname).map((x) => x.path),
    guard: (moduleExports) => {
      return typeof moduleExports === "object" && Array.isArray(moduleExports);
    },
  });

  return imports.flat();
};

export const getAppPaths = (basePath: Path): Path[] => {
  const contents = fs.readdirSync(basePath, { withFileTypes: true });

  const appPaths = contents
    .filter((x) => x.isDirectory())
    .filter((x) => !x.name.startsWith("."))
    .map((x) => x.name)
    .map((name) => path.join(basePath, name));

  return appPaths;
};
export const getAllEndpoints = (): Middleware[] => {
  const basePath = resolve("..");
  const appPaths = getAppPaths(basePath);
  const sensibleEndpoints = makeSensibleEndpoints(
    basePath,
    appPaths,
    interpretableTypes,
    PublicConstants
  );
  return getServerEndpoints().concat(sensibleEndpoints);
};
