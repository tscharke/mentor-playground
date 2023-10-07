// Type-Definitions
export type Action = {
	// Derived from Redux it must be a string.
	// I use union-types to ensure that it can only be one of these strings.
	type: 'OPEN' | 'IN_PROGRESS' | 'DONE';
	payload: {
		id: number;
	};
};

export type Task = {
	id: number;
	label: string;
	// Please note that these values have nothing to do with the values in Action.
	// To make this clear, I've  chosen to write the values in lower case.
	progress: 'open' | 'in_progress' | 'done';
};

export type ProgressOfTask = Task['progress'];
