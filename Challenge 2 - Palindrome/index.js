/**
 * Determine if the given string or number is a palindrome.
 * Non-integer numbers will be truncated.
 *
 * @param {number|string} source
 *
 * @returns {boolean}
 */
function isPalindrome (source) {
  const cleanSource =
    typeof source === 'number'
      ? String(Math.floor(source))
      : source.toLowerCase().replace(/[\W]/g, '')
  const halfLength = Math.floor(cleanSource.length)
  const leftFlip = cleanSource
    .slice(0, halfLength)
    .split('')
    .reverse()
    .join('')
  return cleanSource.endsWith(leftFlip)
}

console.log(
  '---\nThe largest palindrome made from the product of two 3-digit numbers is\n'
)
let solution = {
  x: 0,
  y: 0,
  product: 0
}
for (let x = 999; x > 99; x--) {
  for (let y = 999; y > 99; y--) {
    const product = x * y
    if (product > solution.product && isPalindrome(product)) {
      solution = { x, y, product }
    }
  }
}
console.log(`${solution.product} = ${solution.x} * ${solution.y}`)
