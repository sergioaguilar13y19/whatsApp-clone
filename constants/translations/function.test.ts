import { language } from "./function";
describe("language", () => {
  it("should return the translated string for a given key", () => {
    // Mock the il8n.t function
    const il8n = {
      t: jest.fn((key: string) => {
        if (key === "hello") {
          return "Hola";
        } else if (key === "goodbye") {
          return "Adiós";
        }
      }),
    };

    // Call the language function with a key
    const result = language("read");

    // Assert that the result is the expected translated string
    expect(result).toBe("Read our");
  });

  it("should return an empty string if the key is not found", () => {
    // Mock the il8n.t function to return undefined
    const il8n = {
      t: jest.fn((key: string) => undefined),
    };

    // Call the language function with a key
    const result = language("unknown");

    // Assert that the result is an empty string
    expect(result).toBe("");
  });
});
