import menu from "./pages/menu";
import index from "./pages/index";
import hoeHetWerkt from "./pages/hoeHetWerkt";
import tips from "./pages/tips";
import { PageType } from "./types";

import { humanCase } from "convertcase";
// here we create an object containing all our pages
export const pagesObject = { menu, index, hoeHetWerkt, tips };
// based on this, a type is created for all page keys
type PageKey = keyof typeof pagesObject;
// these keys are put in an array
const pageKeys = Object.keys(pagesObject) as PageKey[];
// then we generate an PageType object for every page,
// based on the pagesObject and the pageKey, and put the result in an array
export const pages: PageType[] = pageKeys.map((pageKey) => ({
  ...pagesObject[pageKey].options,
  component: pagesObject[pageKey],
  key: pageKey,
}));
/**
 * utility function to get a title from a page
 */
export const getPageTitle = (page: PageType) =>
  page.title || humanCase(page.key);

export default pages;
