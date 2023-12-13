import { useState } from 'react';
import { Mode } from './ErrorHandlingDemo';

export const Navigation = ({ callback }: { callback: (mode: Mode) => void }) => {
	const [mode, setMode] = useState('normal');

	const changeMode = (mode: Mode) => {
		setMode(mode);
		callback(mode);
	};

	return (
		<>
			<hr />

			<div>
				<pre>Modes</pre>
				<button onClick={() => changeMode('normal')} disabled={mode === 'normal'}>
					Normal
				</button>
				<button onClick={() => changeMode('extended')} disabled={mode === 'extended'}>
					Extended
				</button>
			</div>
		</>
	);
};
