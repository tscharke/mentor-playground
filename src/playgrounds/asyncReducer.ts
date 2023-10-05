/*
  An example to demonstrate the `Array.reducer`-function calling
  async-functions inside.

  Steps:
    1. We're loading/fetching a list of 100 posts.
    2. We're transforming/redcuing the whole list of posts to a
    new lists only with the `titles`.
*/
import { Reducer, Post } from "./reducer";
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const outlineReducerFunction: Reducer<
  Post,
  Promise<ReadonlyArray<string>>
> = async (accumulatorPromise, currentValue): Promise<any> => {
  // Here's there the magic happends 🤩
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
  const transformdedResultsInline = await wholeData.reduce(
    // Inline function
    async (accumulatorPromise, currentValue): Promise<any> => {
      // Here's there the magic happends 🤩
      const accumulator = await accumulatorPromise;

      const singlePost = await fetch(`${BASE_URL}/${currentValue.id}`);
      const { title } = await singlePost.json();

      return [...accumulator, title];
    },
    // Initial value
    Promise.resolve([])
  );

  // There are the follwing two differences to sync reducer-example…
  // 1. Wait for the whole `Array.reducer` function ---+
  //                                                   |
  //                                   v---------------+
  const transformdedResultsOutline = await wholeData.reduce(
    // External/Outline function
    outlineReducerFunction,
    // 2. Use a `Promise` as "Initial value"
    Promise.resolve([])
  );

  console.log("Async reducer playground", {
    wholeData,
    transformdedResultsInline,
    transformdedResultsOutline
  });
})();
