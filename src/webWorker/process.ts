const MAX_COUNT = 10_000_000_000;

/**
 * This function simulates a long-running process and returns the result of this (fake)process.
 */
export const longRunningProcess = () => {
	console.log('🏃 Starts long-running process…');

	let result = 0;
	for (; result < MAX_COUNT; result++) {
		// Nothing special to do here. It simulates a long-running process by
		// incrementing a counter to consuming the power of your machine. 🤷
	}
	console.log('🆗 Finish long-running process!');

	return result;
};
