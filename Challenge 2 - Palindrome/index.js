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
  'The largest palindrome made from the product of two 3-digit numbers is\n'
)
for (let x = 999; x > 99; x--) {
  for (let y = 999; y > 99; y--) {
    if (isPalindrome(x * y)) return console.log(`${x * y} = ${x} * ${y}`)
  }
}
