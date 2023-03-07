type Replacer = {
  search: string | RegExp;
  replace: string | ((...args: any[]) => string | Promise<string>);
  flags?: string;
};

type Options = {
  debug?: boolean;
  flags?: string;
};

export default async function asyncStrReplace(
  string: string,
  replacers: Replacer[] | Replacer,
  options?: Options
): Promise<string> {
  const opts: Options = { debug: false, flags: undefined, ...options };
  const regexEscape = (s: string) =>
    s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const debug = (log: string | TypeError) => {
    if (opts.debug) {
      if (log instanceof TypeError) {
        return console.error(`[asyncStrReplace] ${log.message}`);
      }
      console.log(`[asyncStrReplace] ${log}`);
    }
  };

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

      const matches: [string, ...unknown[]][] = [];

      string.replace(
        search instanceof RegExp
          ? search
          : new RegExp(regexEscape(search), flags || opts.flags),
        (...args: [string, ...unknown[]]) => {
          matches.push(args);
          return args[0]; // retorna a própria string que foi passada como parâmetro
        }
      );

      if (matches.length === 0) debug("No matches found");

      for (const args of matches) {
        const [match] = args;
        const response = async (replacer: any) =>
          typeof replacer === "function"
            ? await replacer(...args)
            : replacer instanceof Promise
            ? await replacer.then(async (replacer) => await response(replacer))
            : replacer;
        const replacer = await response(replace);
        debug(`Replacing "${match}" with "${replacer}"`);
        string = string.replace(match, replacer);
      }
    }
  } catch (error) {
    debug(error);
    throw error;
  }
  return string;
}
