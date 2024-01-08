describe('Iterators', () => {
	test('Iterator over a string', () => {
		const iterableString = 'ABC';

		// Call the iterator of the string
		const iterator = iterableString[Symbol.iterator]();
		// Expect a `next`-function
		expect.objectContaining({
			next: expect.any(Function),
		});
		/*
			The result of the `next`-function is an object with the following structure:
				{
					value: any | undefined;
					done: boolean;
				}
		*/
		expect(iterator.next()).toEqual({ value: 'A', done: false });
		expect(iterator.next()).toEqual({ value: 'B', done: false });
		expect(iterator.next()).toEqual({ value: 'C', done: false });
		// Check if there are no more values to iterate over
		expect(iterator.next()).toEqual({ value: undefined, done: true });

		// That's not a test. It's only to show the usage of an iterator for a string.
		for (const letter of iterableString) {
			console.log(letter);
		}

		// We can convert this string into an array containing the individual letters
		const arrayOfLetters = [...iterableString];
		expect(arrayOfLetters).toEqual(['A', 'B', 'C']);

		const extendedArrayOfLetters = [...iterableString, 'D', 'E', 'F'];
		expect(extendedArrayOfLetters).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
	});

	test('Create iterator within own object', () => {
		const ownObject = {
			foo: 'bar',
			[Symbol.iterator]: function () {
				let counter = 0;

				return {
					next: () => {
						if (counter === this.foo.length) {
							return { value: undefined, done: true };
						}
						return { value: this.foo[counter++], done: false };
					},
				};
			},
		};

		// Call the iterator of the string
		const iterator = ownObject[Symbol.iterator]();
		// Expect a `next`-function
		expect.objectContaining({
			next: expect.any(Function),
		});
		/*
			The result of the `next`-function is an object with the following structure:
			{
				value: any | undefined;
				done: boolean;
			}
		*/
		expect(iterator.next()).toEqual({ value: 'b', done: false });
		expect(iterator.next()).toEqual({ value: 'a', done: false });
		expect(iterator.next()).toEqual({ value: 'r', done: false });
		// Check if there are no more values to iterate over
		expect(iterator.next()).toEqual({ value: undefined, done: true });

		// That's not a test. It's only to show the usage of an iterator for a string.
		for (const singleLetterOfFoo of ownObject) {
			console.log(singleLetterOfFoo);
		}

		// We can convert this string into an array containing the individual letters
		const arrayOfLetters = [...ownObject];
		expect(arrayOfLetters).toEqual(['b', 'a', 'r']);

		const extendedArrayOfLetters = [...ownObject, 'b', 'a', 'z'];
		expect(extendedArrayOfLetters).toEqual(['b', 'a', 'r', 'b', 'a', 'z']);
	});

	test('Iterator over own object without iterator', () => {
		const ownObjectWithoutIterator = {
			foo: 'bar',
		};

		const iteratingOverOwnObjectAndThrowError = () => {
			// @ts-expect-error Type '{ foo: string; }' must have a '[Symbol.iterator]()' method that returns an iterator
			for (const letter of ownObjectWithoutIterator) {
				console.log(letter);
			}
		};

		expect(() => {
			iteratingOverOwnObjectAndThrowError();
		}).toThrow('ownObjectWithoutIterator is not iterable');
	});

	const log = console.log;

	beforeEach(() => {
		console.log = jest.fn();
	});

	afterAll(() => {
		console.log = log;

		jest.resetAllMocks();
	});
});
