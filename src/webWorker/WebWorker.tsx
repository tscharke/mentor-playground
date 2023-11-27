import { useMemo } from 'react';
import { SubTitle } from '../Headline';
import { Explanation } from './Explanation';
import { longRunningProcess } from './process';
import './styles.css';
import { useChangeBackgroundColor } from './useChangeBackgroundColor';

const LIST_OF_COLORS = ['aqua', 'lightgreen', 'gold', 'lightblue', 'silver'];

export const WebWorker = () => {
	const { reference, changeBackgroundColor } = useChangeBackgroundColor(LIST_OF_COLORS);
	const worker: Worker = useMemo(() => {
		// Creates a new WebWorker with an implementation you'll find inside this folder
		return new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
	}, []);

	// Runs the function directly/synchronously. This blocks the main-thread!
	const startLongRunningProcessSynchronous = () => longRunningProcess();

	// Runs the function asynchronously via the WebWorker. This doesn't block the main-thread!
	const startLongRunningProcessAsynchronous = () => {
		// Creates an Event-Handler to respond to the `onmessage`-Event from the WebWorker
		worker.onmessage = (event: MessageEvent<number>) => {
			console.log('🙆‍ The result of the long-running process is: ', event.data);
		};

		// To "invoke" the WebWoker (the function `onmessage` inside the WebWorker),
		// dispatch a message to whom. In this case, with a payload - a start command 😉
		worker.postMessage('start');
	};

	return (
		<section className="WebWorker" ref={reference}>
			<SubTitle>WebWorker</SubTitle>
			<Explanation />
			<nav>
				<button onClick={changeBackgroundColor}>Change color</button>
				<button onClick={startLongRunningProcessSynchronous}>Start process (blocking)</button>
				<button onClick={startLongRunningProcessAsynchronous}>Start process (non blocking)</button>
			</nav>
		</section>
	);
};
