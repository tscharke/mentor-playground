console.log('---[Promises|Start]---');

/* Promises */
const sleep = (result: object, milliseconds: number) => {
	return new Promise((resolve) => {
		console.log('Start promise with time:', milliseconds);
		return setTimeout(() => resolve(result), milliseconds);
	});
};

const p1 = sleep({ promise: '1' }, 3000);
const p2 = sleep({ promise: '2' }, 1000);

/*
fetch('url')
  .then(() => {
    return {}
  })
  .then(() => {})
  .then(() => {})
  .then(() => {})
  .then(() => {})
  .then(() => {})
  .then(() => {})
*/

Promise.all([p1, p2]).then((r) => {
	console.log(`Promise.all is fulfilled with value: ${JSON.stringify(r)}`);
});

Promise.race([p1, p2]).then((r) => {
	console.log(`Promise.race is fulfilled with value: ${JSON.stringify(r)}`);
});

Promise.allSettled([p1, p2]).then((r: unknown) => {
	console.log(`Promise.allSettled is done with value: ${JSON.stringify(r)}`);
});

console.log('---[Promises|Start]---');
