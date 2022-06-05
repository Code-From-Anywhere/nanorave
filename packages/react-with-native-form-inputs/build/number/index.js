"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberInputType = exports.NumberInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var text_1 = __importDefault(require("../text"));
var NumberInput = function (_a) {
    var extra = _a.extra, onChange = _a.onChange, value = _a.value, props = __rest(_a, ["extra", "onChange", "value"]);
    var newExtra = __assign(__assign({}, extra), { type: "number" });
    return ((0, jsx_runtime_1.jsx)(text_1.default, __assign({}, props, { value: String(value), onChange: function (value) {
            onChange(Number(value));
        }, extra: newExtra })));
};
exports.NumberInput = NumberInput;
var NumberInputType = /** @class */ (function () {
    function NumberInputType() {
    }
    return NumberInputType;
}());
exports.NumberInputType = NumberInputType;
exports.NumberInput.defaultInitialValue = null;
exports.default = exports.NumberInput;
//# sourceMappingURL=index.js.map