type Replacer = {
    search: string | RegExp;
    replace: string | ((...args: any[]) => string | Promise<string>);
    flags?: string;
};
type Options = {
    debug?: boolean;
    flags?: string;
};
declare function asyncStrReplace(string: string, replacers: Replacer[] | Replacer, options?: Options): Promise<string>;

export { asyncStrReplace as default };
