import { expect } from "https://deno.land/x/simple_expect@1.1.0/mod.ts";

const isPalindrome = function (x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;

  const xStr = x.toString();
  for (let i = 0; i < xStr.length / 2; i++) {
    if (xStr[i] !== xStr[xStr.length - i - 1]) return false;
  }

  return true;
};

expect(isPalindrome).run(({ withParams }) => {
  withParams(121).toBeTrue();
  withParams(-121).toBeFalse();
  withParams(10).toBeFalse();
  withParams(5).toBeTrue();
  withParams(22).toBeTrue();
});
