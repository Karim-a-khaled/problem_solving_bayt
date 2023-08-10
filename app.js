// Question Write a function that determines if a given string has all unique characters. solve it in js without comments

function hasUniqueCharacters(str) {
  const charSet = new Set();
  for (const char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}

console.log(hasUniqueCharacters("abcdef")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
const obj = { object1: { value: 1 }, object2: { value: 2 } };

function findValueInObject(obj, key) {
  for (let value of Object.values(obj)) {
    if (Object.values(value).includes(key)) {
      return { found: true, object: value };
    }
}
  return "not found";
}

console.log(findValueInObject(obj, 1));


