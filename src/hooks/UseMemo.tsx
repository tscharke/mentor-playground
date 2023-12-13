import { useMemo, useState } from 'react';
import { SubTitle } from '../Headline';

/*
const syncWait = (ms: number = 1000) => {
	const end = Date.now() + ms;
	while (Date.now() < end) continue;
};
 */

// Keeps track of all created values during the app's life
const values: Set<number> = new Set();

export default function UseMemoHook() {
	const [counter, setCounter] = useState<number>(0);
	const increment = () => setCounter((prevCounter: number) => prevCounter + 1);

	// The value inside the "dependency list" never changes (is the same), so no need
	// to re-run the "expensive" function. React uses the memorized result (store in the
	// variable `memorizedResult`).
	const memorizedResult = useMemo<number>(() => {
		console.log('[UseMemo] Calculate the expensive value (1)');
		const result = 1 + 1;

		return result;
	}, []);

	// The value inside the "dependency list" changes on very click, so we've to
	// re-run the "expensive" function. React calculates a new memorized result and stores
	// it nn the variable `memorizedResult2`).
	const memorizedResult2 = useMemo<number>(() => {
		console.log('[UseMemo] Calculate the expensive value (2)');
		//syncWait();
		const result = counter + 1;

		return result;
	}, [counter]);

	// Register the values so we can count them
	values.add(memorizedResult);
	values.add(memorizedResult2);

	return (
		<>
			<SubTitle>useMemo</SubTitle>
			<div>Counter is {counter}</div>
			<br />
			<div>
				<button onClick={increment}>Increment UseMemo-Counter</button>
			</div>
			<br />
			<div>Newly created values: {values.size} </div>
		</>
	);
}
