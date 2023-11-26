/**
 * Implementation of a WebWorker.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
 */
import { longRunningProcess } from './process';

/**
 * This function executes when the WebWorker receives a message (by calling `postMessage`).
 *
 * @param event {MessageEvent<string>} The event with payload this WebWorker receives
 */
onmessage = (event: MessageEvent<string>) => {
	// The long-running process should only be started if a "command" was sent and is correct.
	// This is my idea and not a must when implementing a WebWorker.
	if (event.data === 'start') {
		// Runs our own function which represents a long-running process
		const result = longRunningProcess();

		// Dispatch the result (back) to implementation of the MessageEvent from the WebWorker.
		// The code of this exists in the function `startLongRunningProcessAsynchronous` of the Component `WebWorker`.
		self.postMessage(result);
	}
};
