import { SubTitle } from '../../app/components/Headline';
import { useFunctionsToMutateStoreValue, useStoreValue } from './store';

export const UseExternalStoreComponent = () => {
	const { changeValue, resetValue } = useFunctionsToMutateStoreValue();

	return (
		<section>
			<SubTitle>useSyncExternalStore</SubTitle>
			<p>
				An attempt to implement an own store that contains a value that can be read and changed. Only components that
				are intersected with the value themselves should be re-rendered.
			</p>
			<p>
				The motivation to try out this type of store was my experience with&nbsp;
				<a href="https://github.com/pmndrs/zustand" target="_blank" rel="noreferrer">
					Zustand
				</a>
				&nbsp;and curiosity about how Zustand implemented its kind of store and behavior.
			</p>
			<nav>
				<button onClick={changeValue}>Change value</button>
				<button onClick={resetValue}>Rest value</button>
			</nav>
			<section>
				<StoreValueConsumer1 />
				<NoStoreValueConsumer />
				<StoreValueConsumer2 />
			</section>
		</section>
	);
};

const StoreValueConsumer1 = () => {
	const value = useStoreValue();

	return (
		<section>
			<header>Child1</header>
			<pre>Value: {value}</pre>
		</section>
	);
};

const NoStoreValueConsumer = () => (
	<section>
		<header>Child2</header>
		<pre>Value: Consume no value</pre>
	</section>
);

const StoreValueConsumer2 = () => {
	const value = useStoreValue();

	return (
		<section>
			<header>Child3</header>
			<pre>Value: {value}</pre>
		</section>
	);
};
