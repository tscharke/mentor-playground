/*
	A generator function is a kind of "factory" for producing iterator objects.

	To create a generator function, you have to use the syntax:
	```
		function*() { … }
	```

	Each iterator produced by a generator function is independent of others, has its own state, and can produce a
	potentially unique sequence of results.

	An iterator object contains among others a `next`-function you can call. This `next`-function returns an object with
	the following structure:

		{
			value: any | undefined;
			done: boolean;
		}
*/
describe('Generators', () => {
	/**
	 * This test is responsible for creating a new string generator and then testing the generator function's behavior
	 */
	test('provides one string', () => {
		// This generator function returns the string 'foo'
		function* generatorAnIterableToProvideAString(): Generator {
			return 'foo';
		}

		// The iterator instance is created by invoking the generator function
		const iterator = generatorAnIterableToProvideAString();

		// The function tests if the iterator object has a next function
		expect(iterator).toEqual(
			expect.objectContaining({
				next: expect.any(Function),
			}),
		);

		expect(iterator.next()).toEqual({ value: 'foo', done: true });
		expect(iterator.next()).toEqual({ value: undefined, done: true });
	});

	/**
	 * This test is responsible for generating multiple strings and validating them in sequence.
	 */
	test('provides multiple strings', () => {
		// This generator function yields each of the strings 'foo', 'bar' and 'baz' one at a time
		function* generatorAnIterableToProvideMultipleString(): Generator {
			yield 'foo';
			yield 'bar';
			yield 'baz';

			// We return undefined after all the strings are yielded
			return undefined;
		}

		const iterator = generatorAnIterableToProvideMultipleString();

		expect(iterator.next()).toEqual({ value: 'foo', done: false });
		expect(iterator.next()).toEqual({ value: 'bar', done: false });
		expect(iterator.next()).toEqual({ value: 'baz', done: false });
		expect(iterator.next()).toEqual({ value: undefined, done: true });
	});

	/**
	 * This test creates a counter-generator and interacts with it.
	 * It demonstrates how a generator can maintain internal state and react to values passed into `next`-function.
	 */
	test('counting values depending on the answers from "outside"', () => {
		function* generatorReactingWithTheOutsideWorld(): Generator {
			let counter = 0;
			while (true) {
				const answerFromTheOutsideWorld = yield counter;
				if (answerFromTheOutsideWorld === true) {
					counter++;
				} else {
					return counter;
				}
			}
		}

		// Interacting with the generator function, passing in truthy and falsy values, and validating the responses.
		const iterator = generatorReactingWithTheOutsideWorld();
		expect(iterator.next()).toEqual({ value: 0, done: false });
		expect(iterator.next(true)).toEqual({ value: 1, done: false });
		expect(iterator.next(true)).toEqual({ value: 2, done: false });
		expect(iterator.next(false)).toEqual({ value: 2, done: true });

		// Checking the behavior after the generator is done.
		expect(iterator.next()).toEqual({ value: undefined, done: true });
		expect(iterator.next(true)).toEqual({ value: undefined, done: true });
		expect(iterator.next(false)).toEqual({ value: undefined, done: true });
	});

	/**
	 * This test demonstrates a generator capable of being stopped prematurely using the iterator's return function.
	 */
	test('increases a counter infinitely stops prematurely with a defined value', () => {
		function* generatorAnIterableToEndlessIncreaseCounter(): Generator {
			let counter = 0;
			while (true) {
				yield counter++;
			}
		}

		const iterator = generatorAnIterableToEndlessIncreaseCounter();
		expect(iterator.next()).toEqual({ value: 0, done: false });
		expect(iterator.next()).toEqual({ value: 1, done: false });
		expect(iterator.next()).toEqual({ value: 2, done: false });

		// Iterator.return function is invoked with an input
		// It effectively ends the generator and returns the input as the current value
		expect(iterator.return(42)).toEqual({ value: 42, done: true });

		// Checking the return values after the generator is prematurely ended
		expect(iterator.next()).toEqual({ value: undefined, done: true });
	});

	/**
	 * This test checks a generator which maintains state using closure even after it ends.
	 */
	test('returns always the last counting value, after stopping the iteration', () => {
		const createGeneratorReactingWithTheOutsideWorld = () => {
			let lastValue = 0;

			// The generator function increments the counter based on the input.
			// Uses an outer scope variable to store and yield the last counter-value even after ending.
			function* generatorReactingWithTheOutsideWorld(): Generator {
				let counter = lastValue;
				while (true) {
					const answerFromTheOutsideWorld = yield counter;
					if (answerFromTheOutsideWorld === true) {
						counter++;
						lastValue = counter;
					} else {
						return counter;
					}
				}
			}

			const iteratorInsideTheFactory = generatorReactingWithTheOutsideWorld();

			return {
				next: (param: boolean = true) => {
					const { value, done } = iteratorInsideTheFactory.next(param);
					if (done) {
						return { value: lastValue, done: true };
					}
					return { value, done };
				},
			};
		};

		const iterator = createGeneratorReactingWithTheOutsideWorld();
		expect(iterator.next()).toEqual({ value: 0, done: false });
		expect(iterator.next(true)).toEqual({ value: 1, done: false });
		expect(iterator.next(true)).toEqual({ value: 2, done: false });
		expect(iterator.next(false)).toEqual({ value: 2, done: true });

		// Check if the last value always returned, regardless of the parameters passed
		expect(iterator.next()).toEqual({ value: 2, done: true });
		expect(iterator.next(true)).toEqual({ value: 2, done: true });
		expect(iterator.next(false)).toEqual({ value: 2, done: true });
	});
});
