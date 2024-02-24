import axios, { AxiosError } from 'axios';
import type { Adapter, Factory, RawBook } from '../models';
import { BookAdapterError } from './BookAdapterError';

const URL = 'http://localhost:4730/books';

export const bookAdapterFactory = (): Factory => {
	return (): Adapter => {
		return async () => {
			try {
				const response = await axios.get<RawBook[]>(URL, {
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
