'use strict'

/**
 * Determine if two input strings are anagrams for each other.
 *
 * @param {string} string1
 * @param {string} string2
 *
 * @returns {boolean}
 */
function isAnagram (string1, string2) {
  const source1 = normalizeString(string1)
  const source2 = normalizeString(string2)

  if (source1.length === source2.length) {
    for (let i = 0; i < source1.length; i++) {
      if (source1[i] !== source2[i]) return false
    }

    return true
  }

  return false
}

/**
 * Convert a source string to a sorted array of lowercase characters.
 * All non-alphanumeric characters are removed.
 *
 * @param {string} string
 *
 * @returns {string[]}
 */
function normalizeString (string) {
  return string
    .replace(/[\W]/g, '') // remove all non-alphanumeric characters
    .toLowerCase() // normalize case for comparison
    .split('') // convert to array
    .sort() // normalize character order for comparison
}

// Examples
console.log('---\nAnagram examples ...\n')
console.log('Debit Card, Bad Credit => ', isAnagram('Debit Card', 'Bad Credit'))
console.log(
  'These churn air, The Hurricanes => ',
  isAnagram('These churn air', 'The Hurricanes')
)
console.log(
  'Astronomer, Moun starer => ',
  isAnagram('Astronomer', 'Moun starer')
) // same length, not anagram
console.log(
  'Dormitory',
  'Dirty rooms => ',
  isAnagram('Dormitory', 'Dirty rooms')
) // not same length
