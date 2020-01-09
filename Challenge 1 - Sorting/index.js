'use strict'

/**
 * Returns a new array sorted from lowest to hightest.
 *
 * @param {Number[]} source
 * @returns {Number[]}
 */
function sortNumbers (source) {
  return source.reduce((sorted, el) => {
    if (typeof el === 'number') {
      let index = 0
      while (index < sorted.length && sorted[index] < el) index++
      sorted.splice(index, 0, el)
    }
    return sorted
  }, [])
}

let randomIntegers = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 99) + 1
)

console.log(
  'A sorted array of 100 random numbers between 1 and 99 (inclusive)\n'
)
console.log(sortNumbers(randomIntegers))
