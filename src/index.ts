import AsyncReplace from "str-async-replace";

type Replacer = {
  search: string | RegExp;
  replace: string | ((...args: any[]) => string | Promise<string>);
  flags?: string;
};

type Options = {
  flags?: string;
};

async function asyncStrReplace(
  string: string,
  replacers: Replacer[] | Replacer,
  options?: Options
): Promise<string> {
  const opts: Options = { flags: "g", ...options };
  const regexEscape = (s: string) =>
    s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

  try {
    if (typeof string !== "string") {
      throw new TypeError('"string" must be a string');
    }

    if (
      !replacers ||
      (typeof replacers !== "object" && !Array.isArray(replacers))
    ) {
      throw new TypeError(
        '"replacers" must be an object or an array of objects'
      );
    }

    if (Array.isArray(replacers)) {
      for (const replacements of replacers) {
        string = await asyncStrReplace(string, replacements, opts);
      }
    } else {
      const { search, replace, flags } = replacers;

      if (!search || !replace) {
        throw new TypeError(
          '"search" and "replace" must be provided in the replacement object'
        );
      }

      return (
        await new AsyncReplace(string).replace(
          search instanceof RegExp
            ? search
            : new RegExp(regexEscape(search), flags || opts.flags),
          replace
        )
      ).toString();
    }
  } catch (error) {
    throw error;
  }
  return string;
}

export = asyncStrReplace;
