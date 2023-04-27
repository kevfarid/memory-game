/**
 * Create random numbers with a limit of times that a number can be repeated
 * @param {number} size - Size of the array, must be pair
 * @param {number} timesCanRepeats - How many times a number can be repeated, must be pair
 * @returns {number[]} - Array of random numbers
 * @example
 * createRandomNumbers(4, 2) // [1, 2, 2, 1]
 * createRandomNumbers(4, 1) // [1, 4, 2, 3]
 */
export function createRandomNumbers(size, timesCanRepeats) {
  if (size % 2 !== 0) throw new Error('Size must be pair');
  if (timesCanRepeats % 2 !== 0)
    throw new Error('Times can repeat for number must be pair');

  const numbers = [];
  const dict = {};

  const max = timesCanRepeats === 1 ? size : size / 2;
  const min = 1;

  while (numbers.length < size) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    dict[randomNumber] = (dict[randomNumber] || 0) + 1;

    if (dict[randomNumber] <= timesCanRepeats) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}
