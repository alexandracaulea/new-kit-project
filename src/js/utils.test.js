import { helloWorld } from "./utils";

test("helloWorld function should be define", () => {
  expect(helloWorld).toBeDefined();
});

test("helloWorld should return a string", () => {
  const result = helloWorld();
  expect(result).toBe("Hello World!");
});
