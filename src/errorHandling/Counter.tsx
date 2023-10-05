import { useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { Mode } from './ErrorHandlingDemo';

type CounterProperties = {
	maxCount: number;
};

const CounterNormalMode = ({ maxCount }: CounterProperties) => {
	const [counter, setCounter] = useState(0);
	const handleError = (error: any) => console.error('CounterNormalMode', error);

	const incrementCounter = () => {
		try {
			if (counter === maxCount) {
				throw Error('The Counter-Component reached the max count');
			} else {
				setCounter((c) => c + 1);
			}
		} catch (error) {
			handleError(error);
		}
	};

	return <button onClick={incrementCounter}>Count {counter}</button>;
};

const CounterExtendedMode = ({ maxCount }: CounterProperties) => {
	const [counter, setCounter] = useState(0);
	const { showBoundary } = useErrorBoundary();

	const incrementCounter = () => {
		try {
			if (counter === maxCount) {
				throw Error('The CounterExtendedMode-Component reached the max count');
			} else {
				setCounter((c) => c + 1);
			}
		} catch (error) {
			showBoundary(error);
		}
	};

	return <button onClick={incrementCounter}>Count {counter}</button>;
};

export default function ({ mode, ...props }: CounterProperties & { mode: Mode }) {
	return mode === 'normal' ? <CounterNormalMode {...props} /> : <CounterExtendedMode {...props} />;
}
