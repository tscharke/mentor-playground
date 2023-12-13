/*
  The first parameter of the arrow function (`props`) is an object
  and contains all passed properties as keys and values.

  This object is immutable, so the values cannot change!

  E.g.
  ```
   {
    prop1: "Value1",
    foo: "bar",
    bar: "baz",
    funcToCall: () => …
   }
  ```
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChildComponent = (props: any) => {
	return (
		<>
			<div>
				ChildComponent with props: <br />
				{JSON.stringify(props)}
			</div>
			<div onClick={props.funcToCall}>
				Clickable ChildComponent with props - <strong>See console</strong>
			</div>
		</>
	);
};

const ParentComponent = () => {
	const callableFunctionAtParentComponent = () => {
		console.log('Callable function @ Parent-Component was called!');
	};

	return <ChildComponent prop1="Value1" foo="bar" bar="baz" funcToCall={callableFunctionAtParentComponent} />;
};

export default function PassProperties() {
	return <ParentComponent />;
}
