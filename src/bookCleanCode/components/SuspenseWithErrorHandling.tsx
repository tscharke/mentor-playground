import { SuspenseProps } from 'react';

type SuspenseWithErrorHandlingProperties = SuspenseProps & {
	error?: Error;
};

export const SuspenseWithErrorHandling = ({ error, children }: SuspenseWithErrorHandlingProperties) => {
	if (error) throw error;

	return children;
};
