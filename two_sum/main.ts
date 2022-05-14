import { expect } from "https://deno.land/x/simple_expect@1.0.0/mod.ts";

const twoSum = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length - 1; i++) {
    const numI = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const numJ = nums[j];
      if (numI + numJ === target) return [i, j];
    }
  }
  return [];
};

expect(twoSum).withParams([2, 7, 11, 15], 9).toBe([0, 1]);
expect(twoSum).withParams([3, 2, 4], 6).toBe([1, 2]);
expect(twoSum).withParams([3, 3], 6).toBe([0, 1]);
