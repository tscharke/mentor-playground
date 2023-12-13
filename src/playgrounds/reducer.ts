/*
  An example to demonstrate the `Array.reducer`-function.

  We're initializing an array of `PlaygroundData` and filter all PlaygroundData's
  with the `id` of `4712`.
*/

// Type definition
export type Reducer<I, O> = (accumulator: O, currentValue: I, currentIndex: number, iterable: ReadonlyArray<I>) => O;

export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const wholeData: ReadonlyArray<Post> = [
	{ id: 4711, userId: 2311, title: 'First post', body: 'foo bar 1' },
	// This is PlaygroundData we are looking for 😃
	{ id: 4712, userId: 2312, title: 'Second post', body: 'foo bar 2' },
	{ id: 4713, userId: 2313, title: 'Third post', body: 'foo bar 3' },
];

const reducerFunction: Reducer<Post, ReadonlyArray<Post>> = (accumulator, currentValue) => {
	if (currentValue.id === 4712) {
		return [...accumulator, currentValue];
	}
	return accumulator;
};

// Typical usage of the `reduce` with an inline function (aka the reducer-function)
const filteredResultInline = wholeData.reduce((accumulator: ReadonlyArray<Post>, currentValue: Post) => {
	if (currentValue.id === 4712) {
		return [...accumulator, currentValue];
	}
	return accumulator;
}, []);

// Usage of the `reduce` with an external function
const filteredResultOutline = wholeData.reduce(
	// External/Outline function
	reducerFunction,
	// Initial value
	[],
);

console.log('Reducer playground', {
	wholeData,
	filteredResultInline,
	filteredResultOutline,
});
