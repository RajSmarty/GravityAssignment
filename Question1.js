function lengthOfLIS(nums) {
    const tails = []; // It stores the smallest tail for all increasing subsequences

    for (const num of nums) {
        let left = 0;
        let right = tails.length;

        // Binary search to find the position
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1; // Move to right
            } else {
                right = mid; // Move to left
            }
        }

        // If left is equal to the length of tails, append num.
        if (left === tails.length) {
            tails.push(num);
        } else {
            // Otherwise replace the value at left index.
            tails[left] = num;
        }
    }

    return tails.length; // The length of the tails array is the length of LIS
}

// Example
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output will be 4
