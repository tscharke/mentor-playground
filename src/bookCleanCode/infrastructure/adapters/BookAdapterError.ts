import { AxiosError } from 'axios';

export interface BookAdapterError extends AxiosError {
	name: 'BookAdapterError';
	url: string;
}

export const BookAdapterError = (
	{ message, code, config, request, response, stack, status }: AxiosError,
	url: string,
) => {
	const error = new AxiosError(message, code, config, request, response) as BookAdapterError;
	error.name = 'BookAdapterError';
	error.stack = stack;
	error.status = status;
	error.url = url;

	return error;
};
