import type { RawBook } from '../../infrastructure/models';
import type { Book, BookDetail } from '../models';

/**
 * Creates a new domain-specific book model with the provided information from the server.
 *
 * @param {RawBook} rawBook - The raw book from the server containing the book's information.
 * @returns {Book} The newly created domain-specific book model.
 */
const createBook = ({ isbn, title, author }: RawBook): Book => ({ isbn, title, author });

/**
 * Creates a list of domain-specific book models based on data from the server.
 *
 * @param {RawBook[]} books - An optional array of raw books from the server.
 * @returns {Book[]} - A list of domain-specific book models or an empty list if no books available
 */
export const createListOfBooks = (books?: RawBook[]): Book[] => (books ? books.map(createBook) : []);

/**
 * Creates a domain-specific BookDetail model based on data from the server.
 *
 * @param {RawBook} book - The specific raw book from the server.
 * @returns {BookDetail | null} A domain-specific book model or `null` if no specific book is available.
 */
export const createBookDetail = (book?: RawBook): BookDetail | null => {
	if (!book) {
		return null;
	}

	const { isbn, title, author, subtitle, abstract, price } = book;
	return { isbn, title, author, subtitle, abstract, price };
};
