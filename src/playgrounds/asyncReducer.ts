/*
  An example to demonstrate the `Array.reducer`-function calling
  async-functions inside.

  Steps:
    1. We're loading/fetching a list of 100 posts.
    2. We're transforming/reducing the whole list of posts to a
    new lists only with the `titles`.
*/
import { Post, Reducer } from './reducer';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const outlineReducerFunction: Reducer<Post, Promise<ReadonlyArray<string>>> = async (
	accumulatorPromise,
	currentValue,
): Promise<string[]> => {
	// Here's there the magic happens. 🤩
	const accumulator = await accumulatorPromise;

	const singlePost = await fetch(`${BASE_URL}/${currentValue.id}`);
	const { title } = await singlePost.json();

	return [...accumulator, title];
};

(async () => {
	// Fetch all posts
	const response = await fetch(`${BASE_URL}`);
	const wholeData: ReadonlyArray<Post> = await response.json();

	// Transform the posts (do all inline)
	const transformedResultsInline = await wholeData.reduce(
		// Inline function
		async (accumulatorPromise, currentValue): Promise<string[]> => {
			// Here's there the magic happens. 🤩
			const accumulator = await accumulatorPromise;

			const singlePost = await fetch(`${BASE_URL}/${currentValue.id}`);
			const { title } = await singlePost.json();

			return [...accumulator, title];
		},
		// Initial value
		Promise.resolve([]) as Promise<string[]>,
	);

	// There are the following two differences to sync reducer-example…
	// 1. Wait for the whole `Array.reducer` function ---+
	//                                                   |
	//                                        v----------+
	const transformedResultsOutline = await wholeData.reduce(
		// External/Outline function
		outlineReducerFunction,
		// 2. Use a `Promise` as "Initial value"
		Promise.resolve([]),
	);

	console.log('Async reducer playground', {
		wholeData,
		transformdedResultsInline: transformedResultsInline,
		transformdedResultsOutline: transformedResultsOutline,
	});
})();
