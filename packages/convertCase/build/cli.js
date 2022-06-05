#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __importDefault(require("."));
var _a = process.argv.slice(2), text = _a[0], target = _a[1];
var result = (0, _1.default)(text, target);
console.log(result);
//test();
//# sourceMappingURL=cli.js.map