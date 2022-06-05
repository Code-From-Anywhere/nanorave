#!/usr/bin/env node

import convertCase, { Casing, test } from ".";

const [text, target] = process.argv.slice(2);
const result = convertCase(text, target as Casing);
console.log(result);
//test();
