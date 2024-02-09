export type Strategy = 'fetchData' | 'contextChangeable' | 'contextLocked';

export type Task = {
	id: number;
	label: string;
	progress: 'open' | 'in_progress' | 'done';
};

export type BackgroundColorMode = 'light' | 'dark';

export type BackgroundColorContextValue = {
	mode: BackgroundColorMode;
	toggleMode: () => void;
};
