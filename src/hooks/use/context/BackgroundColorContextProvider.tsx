import { createContext, ReactNode, useContext, useState } from 'react';
import { BackgroundColorContextValue, BackgroundColorMode } from '../interfaces';

export const defaultBackgroundColorContextValue: BackgroundColorContextValue = {
	mode: 'light',
	toggleMode: () => {},
};

export const BackgroundColorContext = createContext<BackgroundColorContextValue>(defaultBackgroundColorContextValue);

export const BackgroundColorContextProvider = ({ children }: { children: ReactNode }) => {
	const { mode: modeOutOfThemaContext } = useContext(BackgroundColorContext);
	const [mode, setMode] = useState<BackgroundColorMode>(modeOutOfThemaContext);

	return (
		<BackgroundColorContext.Provider
			value={{
				mode,
				toggleMode: () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
			}}
		>
			{children}
		</BackgroundColorContext.Provider>
	);
};
