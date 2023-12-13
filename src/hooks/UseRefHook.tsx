/* eslint-disable react/display-name */
import { forwardRef, useEffect, useRef } from 'react';

// Not possible -> Prints a warning
/*
const Component = ({ ref }: any) => {
  return <div>A component we catch the reference</div>;
};
*/

const Component = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<div ref={ref} {...props}>
			A component we catch the reference
		</div>
	);
});

export default function UseRefHook() {
	const element = useRef<HTMLDivElement>(null);
	const component = useRef<HTMLDivElement>(null);
	const stateWithoutReRendering = useRef({ foo: 'bar' });
	console.log('Inside the Refs:', {
		element,
		component,
		stateWithoutReRendering,
	});

	useEffect(() => {
		element.current?.setAttribute('style', 'background-color: green');
		component.current?.setAttribute('style', 'background-color: aqua');
	}, [element, component]);

	useEffect(() => {
		console.log('Update Component!');
	}, [stateWithoutReRendering]);

	return (
		<>
			<h2
				onClick={() => {
					stateWithoutReRendering.current = {
						...stateWithoutReRendering.current,
						foo: 'baz',
					};
					console.log('Inside the Refs: after click', {
						element,
						component,
						stateWithoutReRendering,
					});
				}}
			>
				<pre style={{ display: 'inline-block' }}>useRef</pre>-Component
				<div ref={element}>An element we catch the reference</div>
				<Component ref={component} />
				<div>Ref. as state: {JSON.stringify(stateWithoutReRendering)}</div>
			</h2>
		</>
	);
}
