// In here they're defining domain-specific models only

/**
 * Represents a book.
 */
export type Book = {
	isbn: string;
	title: string;
	author: string;
};

/**
 * Represents an extended version of the book with detailed information.
 */
export type BookDetail = Book & {
	subtitle: string;
	abstract: string;
	price: string;
};
