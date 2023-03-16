const asyncStrReplace = require("../dist");

describe("asyncStrReplace", () => {
  test("should replace a single string", async () => {
    const input = "Hello, World!";
    const output = await asyncStrReplace(input, {
      search: "Hello",
      replace: "Hi",
    });
    expect(output).toBe("Hi, World!");
  });

  test("should replace a string with a promise-based function", async () => {
    const input = "Hello, World!";
    const output = await asyncStrReplace(input, {
      search: "Hello",
      replace: async () => "Hi",
    });
    expect(output).toBe("Hi, World!");
  });

  test("should replace multiple strings with an array of replacements", async () => {
    const input = "Hello, World!";
    const output = await asyncStrReplace(input, [
      { search: "Hello", replace: "Hi" },
      { search: "World", replace: "Universe" },
    ]);
    expect(output).toBe("Hi, Universe!");
  });

  test("should replace a string with a regex search", async () => {
    const input = "Hello, World!";
    const output = await asyncStrReplace(input, {
      search: /world/i,
      replace: "Universe",
    });
    expect(output).toBe("Hello, Universe!");
  });

  test("should throw an error if no string is provided", async () => {
    await expect(asyncStrReplace()).rejects.toThrow(TypeError);
  });

  test("should throw an error if no replacement is provided", async () => {
    const input = "Hello, World!";
    const replacers = [{ search: "Hello" }];
    await expect(asyncStrReplace(input, replacers)).rejects.toThrow(TypeError);
  });
});
