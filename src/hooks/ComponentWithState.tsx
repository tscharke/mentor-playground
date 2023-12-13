import { useState } from 'react';

export default function ComponentWithState() {
	const [counter, setCounter] = useState<number>(0);

	const increment = () => setCounter((prevCounter: number) => prevCounter + 1);

	return (
		<div onClick={increment} role="button">
			Counter: <span>{counter}</span>
		</div>
	);
}
