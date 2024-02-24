/*
  Context-API

  Read values out of the Context
*/
import { createContext, ReactElement, useContext } from 'react';
import { SubTitle } from '../app/components/Headline';

const defaultValue = {
	foo: 'default foo',
};

const MyContext = createContext(defaultValue);

const Child1 = () => {
	const valueOutOfContext = useContext(MyContext);

	return <div>Child1: {JSON.stringify(valueOutOfContext)}</div>;
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
			<SubTitle>useContext (read)</SubTitle>
			{/* Children consuming context without Provider*/}
			{/*}
      <>
        <Child1 />
        <Child2>
          <Child3 />
        </Child2>
      </>
      */}
			{/* Children consuming context with Provider*/}
			<MyContext.Provider value={{ ...defaultValue }}>
				<Child1 />
				<Child2>
					<Child3 />
				</Child2>
			</MyContext.Provider>
		</>
	);
}
