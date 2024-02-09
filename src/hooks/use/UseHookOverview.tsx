/*
	Usage of the `use`-Hook

	In your developer-console you will find this kind of warning then you're using a Promise within the `use`-Hook:

		Warning: A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is
		not yet supported, except via a Suspense-compatible library or framework.

	This error message is from React and indicates that a Promise was created within a client component or hook, which
	is not currently supported.

	Keep in mind: As of today, the `use`-Hook is only available in an experimental version of React (see `package.json').
	In addition, it seems that it will be a Hook used on the server, and not in a Single Page Application (SPA) -
	i.e., on the client. And for what may come next, you should take a look at React Server Components (RSC).

	You can find out more here:
		- `use`-Hook: https://react.dev/reference/react/use
		- React Server Components (RSC): https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components
 */
import { Suspense, useState } from 'react';
import { SubTitle } from '../../app/components/Headline.tsx';
import { BackgroundColorContextProvider } from './context/BackgroundColorContextProvider.tsx';
import { UseHookContext } from './context/UseHookContext.tsx';
import { Loader } from './fetch/Loader.tsx';
import { UseHookFetch } from './fetch/UseHookFetch.tsx';
import { Strategy } from './interfaces.ts';

const WAIT_TIME = 1_000;

export const UseHookOverview = () => {
	const [strategy, setStrategy] = useState<Strategy>('contextChangeable');
	const changeableMode = strategy === 'contextChangeable';

	return (
		<section>
			<SubTitle>use</SubTitle>
			<section>
				<button onClick={() => setStrategy('fetchData')}>Fetch data</button>
				<button onClick={() => setStrategy('contextChangeable')}>Context changeable</button>
				<button onClick={() => setStrategy('contextLocked')}>Context locked</button>
			</section>

			<h2>Result:</h2>
			{strategy === 'fetchData' && (
				<Suspense fallback={<Loader waitTime={WAIT_TIME} />}>
					<UseHookFetch waitTime={WAIT_TIME} />
				</Suspense>
			)}
			{strategy !== 'fetchData' && (
				<BackgroundColorContextProvider>
					<UseHookContext changeableMode={changeableMode} />
				</BackgroundColorContextProvider>
			)}
		</section>
	);
};
