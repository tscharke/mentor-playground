import { useState } from 'react';
import { createListOfBooks } from '../domain/services/bookService';
import { bookAdapterFactory } from './adapters/bookAdapter';
import type { RawBook } from './models';

export const useBooks = () => {
	const [books, setBooks] = useState<RawBook[]>([]);
	const [error, setError] = useState<Error>();
	const createBookAdapter = bookAdapterFactory();
	const loadAllBooksFromServer = createBookAdapter();

	const loadAllBooks = async () => {
		try {
			const books = await loadAllBooksFromServer();
			setBooks(books);
		} catch (error) {
			setError(error as Error);
		}
	};

	return [createListOfBooks(books), loadAllBooks, error] as const;
};
