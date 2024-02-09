/*
  Context-API

  Multiple Context-Provider
*/
import React, { ReactElement, useContext } from 'react';
import { SubTitle } from '../app/components/Headline';

const ThemeContext = React.createContext({
	theme: 'light',
});

const MyContext = React.createContext({
	foo: 'bar',
});

const Child1 = () => {
	const { theme } = useContext(ThemeContext);
	const { foo } = useContext(MyContext);

	return (
		<div>
			Child1:
			<span>
				Theme: {theme} | Foo: {foo}
			</span>
		</div>
	);
};

const Child2 = ({ children }: { children: ReactElement }) => {
	return (
		<>
			<div>Child2</div>
			{children}
		</>
	);
};

const Child3 = () => {
	const valueOutOfContext = useContext(MyContext);

	return <div>Child3: {JSON.stringify(valueOutOfContext)}</div>;
};

export default function UseContext() {
	return (
		<>
			<SubTitle>useContext (multiple provider)</SubTitle>

			<ThemeContext.Provider value={{ theme: 'light' }}>
				<>
					<Child1 />
					<Child2>
						<MyContext.Provider value={{ foo: 'mein bar' }}>
							<Child3 />
						</MyContext.Provider>
					</Child2>
				</>
			</ThemeContext.Provider>
		</>
	);
}
