type FactorialFunction = (value: number) => number;

const factorialNaiveApproach = (value: number): number => {
	let result = 1;
	for (let i = value; i > 0; i--) {
		result *= i;
	}
	return result;
};

const factorialRecursive = (value: number): number => {
	if (value === 0) {
		return 1;
	}
	const result = factorialRecursive(value - 1);
	// We don't need this check here, because we limit the `value` outside of this function.
	// So we will never reach the condition where the result would be Infinity.
	/*
	if (result === Infinity) {
		return Infinity;
	}
	*/
	return value * result;
};

const createFactorial = (factorialImplementation: FactorialFunction): FactorialFunction => {
	/**
	 * Calculates the factorial of a given number.
	 * @param {number} startValue - The number to calculate the factorial for.
	 * @throws {Error} Throws an error if startValue is greater than 170.
	 * @returns {number} The factorial of startValue.
	 */
	return (startValue: number): number => {
		/*
		 * The typical Call-Stack limit in JavaScript is approximately 10,000, and this limit cannot be surpassed.
		 * Should this limit be exceeded, an error will be thrown:
		 * ```
		 * RangeError: Maximum call stack size exceeded
		 * ```
		 * To avoid this, this function has been limited to computing factorials of numbers up to 170.
		 * JavaScript starts to lose precision when handling numbers larger than this,
		 * and as mentioned, the Call-Stack limit would be reached.
		 */
		if (startValue > 170) {
			throw new Error('Input value is out of range! The value must be less than or equal to 170');
		}
		if (startValue < 0) {
			throw new Error('Cannot calculate factorial of negative numbers!');
		}
		if (startValue === 0) {
			return 1;
		}
		return factorialImplementation(startValue);
	};
};

describe.each([
	['Naive Approach', factorialNaiveApproach],
	['Recursive', factorialRecursive],
])('Factorial Implementation: %s', (_, factorialImplementation) => {
	const factorial = createFactorial(factorialImplementation);

	test.each([
		[4, 24],
		[3, 6],
		[2, 2],
		[1, 1],
		[0, 1],
	])('factorial of %i', (startValue, expectedResult) => {
		const result = factorial(startValue);
		expect(result).toBe(expectedResult);
	});

	test('factorial of max. value', () => {
		const startValue = Number.MAX_SAFE_INTEGER;
		expect(() => factorial(startValue)).toThrow(
			'Input value is out of range! The value must be less than or equal to 170',
		);
	});

	// https://math.stackexchange.com/questions/927382/what-does-the-factorial-of-a-negative-number-signify
	test('factorial of negative number', () => {
		const startValue = -1;
		expect(() => factorial(startValue)).toThrow('Cannot calculate factorial of negative numbers!');
	});
});
