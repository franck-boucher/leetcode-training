import { expect } from "https://deno.land/x/simple_expect@1.1.0/mod.ts";

const isStrValid = function (s: string): boolean {
  const stack = [];

  const openings = new Set(["(", "{", "["]);
  const match = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (const char of s) {
    const lastChar = stack.length > 0 ? stack[stack.length - 1] : "";

    if (openings.has(char)) stack.push(char);
    else if (match.has(char)) {
      if (lastChar === match.get(char)) stack.pop();
      else return false;
    }
  }

  if (stack.length !== 0) return false;
  return true;
};

expect(isStrValid).run(({ withParams }) => {
  withParams("()").toBeTrue();
  withParams("()[]{}").toBeTrue();
  withParams("(]").toBeFalse();
  withParams("((()))").toBeTrue();
  withParams("((())").toBeFalse();
  withParams("(([]){})").toBeTrue();
  withParams(")").toBeFalse();
});
