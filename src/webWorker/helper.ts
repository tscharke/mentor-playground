/**
 * Returns a random number till the max value.
 *
 * @param max {number} The end of the range
 * @returns {number} A random number
 */
export const random = (max: number): number => Math.floor(Math.random() * max);
