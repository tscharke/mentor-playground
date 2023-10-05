// Testing with Library: Jest-In-Case
// @see https://github.com/atlassian/jest-in-case
import cases from "jest-in-case";

const sum = (a: number, b: number): number => {
  return a + b;
};

describe("Testing w/ Jest-In-Case", () => {
  test("manualy test", () => {
    const a = 1;
    const b = 2;

    const result = sum(a, b);
    expect(result).toBe(3);
  });
});

cases(
  "sum(first value, second value)",
  ({ a, b, result }: any) => {
    expect(sum(a, b)).toBe(result);
  },
  [
    { name: "1 + 1 = 2", a: 1, b: 1, result: 2 },
    { name: "2 + 1 = 3", a: 2, b: 1, result: 3 },
    { name: "3 + 1 = 4", a: 3, b: 1, result: 4 }
  ]
);
