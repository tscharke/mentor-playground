import { useState } from 'react';
import { booksAdapterFactory } from '../adapter/booksAdapter';
import type { BookServerModel } from '../interfaces';
import { createBooks } from '../services/BooksService';

export const useBooks = () => {
	const [books, setBooks] = useState<BookServerModel[]>([]);
	const [error, setError] = useState<Error>();
	const createBookAdapter = booksAdapterFactory();
	const loadAllBooksFromServer = createBookAdapter();

	const loadAllBooks = async () => {
		try {
			const books = await loadAllBooksFromServer();
			setBooks(books);
		} catch (error) {
			setError(error as Error);
		}
	};

	return [createBooks(books), loadAllBooks, error] as const;
};
