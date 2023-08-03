function minimumDifference(nums) {
  const n = nums.length / 2;
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  const dp = Array.from({ length: n + 1 }, () => new Set());
  dp[0].add(0);

  for (const num of nums) {
    for (let i = n; i >= 1; i--) {
      for (const sum of dp[i - 1]) {
        dp[i].add(sum + num);
      }
    }
  }

  let minDiff = Infinity;
  for (const sum of dp[n]) {
    const diff = Math.abs(totalSum - 2 * sum);
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}

// Unit tests
console.log(minimumDifference([3, 9, 7, 3])); // Output: 2
console.log(minimumDifference([-36, 36])); // Output: 72
console.log(minimumDifference([2, -1, 0, 4, -2, -9])); // Output: 0
