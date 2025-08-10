const nestedArray = [1, [2, 'a', [3, false]], 'b', [4, null, [5, [6, 7]]]];

// Step 1: Flatten the array (fully, regardless of depth)
const flattened = nestedArray.flat(Infinity);

// Step 2: Filter by type (e.g., keep only numbers)
const numbersOnly = flattened.filter(item => typeof item === 'number');

console.log(numbersOnly); // Output: [1, 2, 3, 5, 6, 7]