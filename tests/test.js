const asyncStrReplace = require("../dist/index");

describe("asyncStrReplace", () => {
  test("replaces a single string with another string", async () => {
    const result = await asyncStrReplace("Hello, world!", {
      search: "world",
      replace: "Universe",
    });
    expect(result).toBe("Hello, Universe!");
  });

  test("replaces multiple strings with another string", async () => {
    const result = await asyncStrReplace(
      "The quick brown fox jumps over the lazy dog.",
      [
        {
          search: "quick",
          replace: "fast",
        },
        {
          search: "brown",
          replace: "red",
        },
        {
          search: "fox",
          replace: "cat",
        },
        {
          search: "lazy",
          replace: "energetic",
        },
      ]
    );
    expect(result).toBe("The fast red cat jumps over the energetic dog.");
  });

  test("replaces a string using a regular expression", async () => {
    const result = await asyncStrReplace("Hello, world!", {
      search: /worl?d/,
      replace: "Universe",
    });
    expect(result).toBe("Hello, Universe!");
  });

  test("replaces a string using a function", async () => {
    const result = await asyncStrReplace("Hello, world!", {
      search: /worl?d/,
      replace: (match) => {
        return match.toUpperCase();
      },
    });
    expect(result).toBe("Hello, WORLD!");
  });

  test("throws an error when 'string' is not a string", async () => {
    await expect(asyncStrReplace(123, {})).rejects.toThrow(
      '"string" must be a string'
    );
  });

  test("throws an error when 'replacers' is not an object or array", async () => {
    await expect(asyncStrReplace("Hello, world!", "world")).rejects.toThrow(
      '"replacers" must be an object or an array'
    );
  });

  test("logs a debug message when no matches are found", async () => {
    console.log = jest.fn();
    const result = await asyncStrReplace(
      "Hello, world!",
      {
        search: "foo",
        replace: "bar",
      },
      { debug: true }
    );
    expect(console.log).toHaveBeenCalledWith(
      "[asyncStrReplace] No matches found"
    );
    expect(result).toBe("Hello, world!");
  });

  test("logs a debug message when a match is found and replaced", async () => {
    console.log = jest.fn();
    const result = await asyncStrReplace(
      "Hello, world!",
      {
        search: "world",
        replace: "Universe",
      },
      { debug: true }
    );
    expect(console.log).toHaveBeenCalledWith(
      '[asyncStrReplace] Replacing "world" with "Universe"'
    );
    expect(result).toBe("Hello, Universe!");
  });
});
