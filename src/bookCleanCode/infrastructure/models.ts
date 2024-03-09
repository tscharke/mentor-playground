/**
 * Represents a book retrieved from the server.
 * In our case, it means the full book with all available information.
 */
export type RawBook = {
	id: string;
	title: string;
	subtitle: string;
	isbn: string;
	abstract: string;
	author: string;
	publisher: string;
	price: string;
	numPages: number;
	cover: string;
	userId: number;
};

/**
 * A Factory, that's a function, to create an instance of an Adapter.
 * It takes no arguments and returns an Adapter object.
 *
 * @typedef {function} Factory
 * @returns {Adapter} An instance of an Adapter object.
 */
export type Factory = () => Adapter;

/**
 * The Adapter object provides methods to interact with the functionality of the server.
 *
 * @typedef {Object} Adapter
 * @property {Function} loadAllBooksFromServer - A function that loads all books from the server.
 * @property {Function} loadBookFromServer - A function that loads a book from the server based on its isbn.
 */
export type Adapter = {
	loadAllBooksFromServer: () => Promise<RawBook[]>;
	loadBookFromServer: (isbn: RawBook['isbn']) => Promise<RawBook>;
};
