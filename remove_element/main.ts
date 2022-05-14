import { expect } from "https://deno.land/x/simple_expect@1.0.0/mod.ts";

const removeElement = (nums: number[], val: number): number => {
  const initialLength = nums.length;
  const badBigNum = Math.max(...nums) + 1;
  let badNumsCount = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === val) {
      nums[index] = badBigNum;
      badNumsCount++;
    }
  }

  nums.sort((a, b) => a - b);

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === badBigNum) {
      delete nums[index];
    }
  }

  return initialLength - badNumsCount;
};

const input1 = [3, 2, 2, 3];
expect(removeElement).withParams(input1, 3).toBe(2);
console.log(input1);

const input2 = [0, 1, 2, 2, 3, 0, 4, 2];
expect(removeElement).withParams(input2, 2).toBe(5);
console.log(input2);
