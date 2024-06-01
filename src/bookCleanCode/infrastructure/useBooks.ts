import { useState } from 'react';
import type { Book, BookDetail } from '../domain/models';
import { createBookDetail, createListOfBooks } from '../domain/services/bookService';
import { bookAdapterFactory } from './adapters/bookAdapter';
import type { RawBook } from './models';

type UseBookHook = {
	// A list of books, loaded from the server.
	books: Book[];
	// A single book, loaded by its ISBN from the server or `null` if no book is available.
	book: BookDetail | null;
	// An error that occurs when interacting with the server or `undefined` if no error occurred.
	error: Error | undefined;
	// A function to load a list of books from the server.
	loadAllBooks: () => void;
	// A function to load a single book, by its ISBN, from the server.
	loadBook: (isbn: string) => void;
};

/**
 * Business-Logic-Layer for managing books.
 *
 * This custom React-Hook provides functions to load a list of books and a single book from a server.
 * It uses the `Adapter`, via its factory-function, to interact with the server.
 * And it uses the `Service` to provide the domain-specific models to the Representation-Layer (Component).
 *
 * @returns {UseBookHook}
 */
export const useBooks = (): UseBookHook => {
	const [books, setBooks] = useState<RawBook[]>([]);
	const [book, setBook] = useState<RawBook>();
	const [error, setError] = useState<Error>();
	const createBookAdapter = bookAdapterFactory();
	const { loadAllBooksFromServer, loadBookFromServer } = createBookAdapter();

	const loadAllBooks = async () => {
		try {
			const books = await loadAllBooksFromServer();
			setBooks(books);
		} catch (error) {
			setError(error as Error);
		}
	};

	const loadBook = async (isbn: RawBook['isbn']) => {
		try {
			const book = await loadBookFromServer(isbn);
			setBook(book);
		} catch (error) {
			setError(error as Error);
		}
	};

	return {
		books: createListOfBooks(books),
		book: createBookDetail(book),
		error,
		loadAllBooks,
		loadBook,
	};
};
