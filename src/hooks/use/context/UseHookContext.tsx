// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactNode, use } from 'react';
import { BackgroundColorMode } from '../interfaces';
import { BackgroundColorContext, defaultBackgroundColorContextValue } from './BackgroundColorContextProvider';

type UseHookContextProperties = {
	changeableMode: boolean;
};

const BackgroundColorDefinition: Record<BackgroundColorMode, string> = {
	light: 'var(--color-gray-50)',
	dark: 'var(--color-gray-500)',
};

/**
 * A Component, which uses the `useContext`-Hook, renders a section with a toggleable background-color
 * and shows what's happened "inside" current state of the `BackgroundColorContext`.
 *
 * @param {UseHookContextProperties} props The properties that can be set on this component.
 * @param {boolean} props.changeableMode Whether the mode (and thus the background color) can be changed.
 * @returns {ReactNode} The rendered component.
 */
export const UseHookContext = ({ changeableMode }: UseHookContextProperties): ReactNode => {
	// Creates a default (context) value and set the `mode` to "locked" 🔐
	let valueOutOfContext = { ...defaultBackgroundColorContextValue, mode: 'locked' };

	// If the mode can be changed, usage the `use`-Hook to retrieve the `BackgroundColorContext`.
	// In this case, you can see what we're using the `use`-Hook in a conditional way.
	if (changeableMode) {
		// Using the Hook with a Context
		valueOutOfContext = use(BackgroundColorContext);
	}

	return (
		<section
			style={{
				// Use the background color related to the current mode out of the `BackgroundColorContext`
				backgroundColor: BackgroundColorDefinition[valueOutOfContext.mode as BackgroundColorMode],
			}}
		>
			{/* If the mode can be changed, clicking will toggle the mode between `light` and `dark` (via `BackgroundColorContext`) */}
			<button onClick={valueOutOfContext.toggleMode} disabled={!changeableMode}>
				Toggle background-color
			</button>
			<code>{JSON.stringify(valueOutOfContext, null, 2)}</code>
		</section>
	);
};
