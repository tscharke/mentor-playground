describe('Iterators', () => {
	test('`for-of` over an array of letters', () => {
		const arrayOfLetters = ['A', 'B', 'C'];

		for (const letter of arrayOfLetters) {
			console.log(letter);
		}

		expect(console.log).toHaveBeenCalledTimes(3);
		expect(console.log).toHaveBeenNthCalledWith(1, 'A');
		expect(console.log).toHaveBeenNthCalledWith(2, 'B');
		expect(console.log).toHaveBeenNthCalledWith(3, 'C');
	});

	test('iterator over an array of letters', () => {
		const arrayOfLetters = ['A', 'B', 'C'];

		const iterator = arrayOfLetters[Symbol.iterator]();
		expect(iterator).toEqual(expect.objectContaining({ next: expect.any(Function) }));
		expect(iterator.next()).toEqual({ value: 'A', done: false });
		expect(iterator.next()).toEqual({ value: 'B', done: false });
		expect(iterator.next()).toEqual({ value: 'C', done: false });
		expect(iterator.next()).toEqual({ value: undefined, done: true });
	});

	test('`for-of` over letters of a string', () => {
		const iterableString = 'ABC';

		for (const letter of iterableString) {
			console.log(letter);
		}

		expect(console.log).toHaveBeenCalledTimes(3);
		expect(console.log).toHaveBeenNthCalledWith(1, 'A');
		expect(console.log).toHaveBeenNthCalledWith(2, 'B');
		expect(console.log).toHaveBeenNthCalledWith(3, 'C');
	});

	test('iterator over letters of a string', () => {
		const iterableString = 'ABC';

		const iterator = iterableString[Symbol.iterator]();
		expect(iterator.next()).toEqual({ value: 'A', done: false });
		expect(iterator.next()).toEqual({ value: 'B', done: false });
		expect(iterator.next()).toEqual({ value: 'C', done: false });
		expect(iterator.next()).toEqual({ value: undefined, done: true });
	});

	test('iterator over our own defined object, without `Symbol.iterator`', () => {
		const ownObject = { foo: 'bar' };

		expect(() => {
			try {
				// @ts-expect-error Type '{ foo: string; }' must have a '[Symbol.iterator]()' method that returns an iterator
				for (const letter of ownObject) {
					console.log(letter);
				}
			} catch (error) {
				const err = error as Error;
				throw new Error(`This error occurred while trying to iterate over ownObject: ${err.message}`);
			}
		}).toThrow('This error occurred while trying to iterate over ownObject: ownObject is not iterable');
	});

	test('iterator over our own defined object, with its own `Symbol.iterator`', () => {
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

		const iterator = ownObject[Symbol.iterator]();
		expect(iterator.next()).toEqual({ value: 'b', done: false });
		expect(iterator.next()).toEqual({ value: 'a', done: false });
		expect(iterator.next()).toEqual({ value: 'r', done: false });
		expect(iterator.next()).toEqual({ value: undefined, done: true });
	});

	const log = console.log;

	beforeAll(() => {
		console.log = jest.fn();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		console.log = log;
		jest.restoreAllMocks();
	});
});
