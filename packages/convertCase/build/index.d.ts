#!/usr/bin/env node
export declare type Casing = "camel" | "pascal" | "snake" | "kebab" | "capital" | "human";
/**
 *
 */
export declare const convertCase: {
    (text: string, target: Casing): string;
    config: {
        draft: boolean;
        generateCli: boolean;
        price: number;
    };
};
export declare const camelCase: (text: string) => string;
export declare const pascalCase: (text: string) => string;
export declare const snakeCase: (text: string) => string;
export declare const kebabCase: (text: string) => string;
export declare const capitalCase: (text: string) => string;
export declare const humanCase: (text: string) => string;
export default convertCase;
export declare const test: () => void;
//# sourceMappingURL=index.d.ts.map