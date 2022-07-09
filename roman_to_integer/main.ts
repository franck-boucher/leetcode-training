import { expect } from "https://deno.land/x/simple_expect@1.1.0/mod.ts";

const romanToInt = function (s: string): number {
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const exceptions: { [key: string]: string[] } = {
    I: ["V", "X"],
    X: ["L", "C"],
    C: ["D", "M"],
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = i < s.length - 1 ? s[i + 1] : "";
    let value: number;

    if (
      Object.keys(exceptions).includes(current) &&
      exceptions[current].includes(next)
    ) {
      value = romanMap[next] - romanMap[current];
      i++;
    } else {
      value = romanMap[current];
    }

    sum += value;
  }

  return sum;
};

expect(romanToInt).run(({ withParams }) => {
  withParams("III").toBe(3);
  withParams("LVIII").toBe(58);
  withParams("MCMXCIV").toBe(1994);
});
