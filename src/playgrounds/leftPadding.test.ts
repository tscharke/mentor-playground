/**
 * Returns a string representation of the given value with left padding zeros.
 *
 * @param {number} value - The value to be padded with zeros.
 * @param {number} countOfPadding - The desired total length of the resulting string.
 * @returns {string} - The value as a string with left padded zeros.
 */
const leftPadding = (value: number, countOfPadding: number): string => {
	const isNegativeValue = Object.is(value, -0) || value < 0;
	const roundedValue = Math.floor(Math.abs(value));
	const numberOfDigits = roundedValue.toString().split('').length;
	const numberOfPaddingZeros = countOfPadding - numberOfDigits;
	const paddingZeros = Array(numberOfPaddingZeros < 0 ? 0 : numberOfPaddingZeros).fill(0);
	const resultAsString = [...paddingZeros, roundedValue].join('');
	return isNegativeValue ? `-${resultAsString}` : resultAsString;
};

/**
 * Represents an array of test scenarios.
 *
 * Each test scenario consists of a name and an array of test pairs.
 * The test pairs are represented as arrays with three elements:
 * - The first element is the number of leading zeros to be added to the formatted number.
 * - The second element is the number to be formatted.
 * - The third element is the expected formatted number.
 *
 * @type {Array}
 */
const testScenarios: {
	name: string;
	testPairs: [number, number, string][];
}[] = [
	{
		name: 'with positive integers',
		testPairs: [
			[1, 1, '1'],
			[1, 10, '10'],
			[1, 100, '100'],
			[1, 1_000, '1000'],
			[1, 10_000, '10000'],
			[5, 1, '00001'],
			[5, 10, '00010'],
			[5, 100, '00100'],
			[5, 1_000, '01000'],
			[5, 10_000, '10000'],
			[10, 1, '0000000001'],
			[10, 10, '0000000010'],
			[10, 100, '0000000100'],
			[10, 1_000, '0000001000'],
			[10, 10_000, '0000010000'],
		],
	},
	{
		name: 'with negative integers',
		testPairs: [
			[1, -1, '-1'],
			[1, -10, '-10'],
			[1, -100, '-100'],
			[1, -1_000, '-1000'],
			[1, -10_000, '-10000'],
			[5, -1, '-00001'],
			[5, -10, '-00010'],
			[5, -100, '-00100'],
			[5, -1_000, '-01000'],
			[5, -10_000, '-10000'],
			[10, -1, '-0000000001'],
			[10, -10, '-0000000010'],
			[10, -100, '-0000000100'],
			[10, -1_000, '-0000001000'],
			[10, -10_000, '-0000010000'],
		],
	},
	{
		name: 'with positive floats',
		testPairs: [
			[1, 1.23, '1'],
			[1, 10.23, '10'],
			[1, 100.23, '100'],
			[1, 1_000.23, '1000'],
			[1, 10_000.23, '10000'],
			[5, 1.23, '00001'],
			[5, 10.23, '00010'],
			[5, 100.23, '00100'],
			[5, 1_000.23, '01000'],
			[5, 10_000.23, '10000'],
			[10, 1.23, '0000000001'],
			[10, 10.23, '0000000010'],
			[10, 100.23, '0000000100'],
			[10, 1_000.23, '0000001000'],
			[10, 10_000.23, '0000010000'],
		],
	},
	{
		name: 'with negative floats',
		testPairs: [
			[1, -1.23, '-1'],
			[1, -10.23, '-10'],
			[1, -100.23, '-100'],
			[1, -1_000.23, '-1000'],
			[1, -10_000.23, '-10000'],
			[5, -1.23, '-00001'],
			[5, -10.23, '-00010'],
			[5, -100.23, '-00100'],
			[5, -1_000.23, '-01000'],
			[5, -10_000.23, '-10000'],
			[10, -1.23, '-0000000001'],
			[10, -10.23, '-0000000010'],
			[10, -100.23, '-0000000100'],
			[10, -1_000.23, '-0000001000'],
			[10, -10_000.23, '-0000010000'],
		],
	},
	{
		name: 'with positiv and negative zero and zero-floats',
		testPairs: [
			[1, 0, '0'],
			[5, 0, '00000'],
			[10, 0, '0000000000'],
			[1, -0, '-0'],
			[5, -0, '-00000'],
			[10, -0, '-0000000000'],
			[1, 0.23, '0'],
			[5, 0.23, '00000'],
			[10, 0.23, '0000000000'],
			[1, -0.23, '-0'],
			[5, -0.23, '-00000'],
			[10, -0.23, '-0000000000'],
		],
	},
];

describe('Left Padding', () => {
	testScenarios.forEach(({ name, testPairs }) => {
		describe(name, () => {
			testPairs.forEach(([padding, digit, expectedResult]) => {
				test(`positive count of padding ${padding} with digit: ${digit}`, () => {
					expect(leftPadding(digit, padding)).toBe(expectedResult);
				});
			});
		});
	});

	// TODO: Missing test for…
	// - non-integer padding count (countOfPadding=3.5, countOfPadding="hello World", …)
	// - NaN and Infinity values (value=NaN, value=Infinity)
	// - non-numeric input values (value="hello world", value=()=>{}, value=[])
});
