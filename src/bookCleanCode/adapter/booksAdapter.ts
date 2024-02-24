import axios, { AxiosError } from 'axios';
import { Adapter, BookServerModel, Factory } from '../interfaces';
import { BookAdapterError } from './BookAdapterError';

const URL = 'http://localhost:4730/books';

export const booksAdapterFactory = (): Factory => {
	return (): Adapter => {
		return async () => {
			try {
				const response = await axios.get<BookServerModel[]>(URL, {
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				});
				return response.data;
			} catch (error) {
				throw BookAdapterError(error as AxiosError, URL);
			}
		};
	};
};
