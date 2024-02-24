/**
 * Represents a book retrieved from the server.
 * In our case, it means the full book with all available keys.
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

export type Factory = () => Adapter;

export type Adapter = () => Promise<RawBook[]>;
