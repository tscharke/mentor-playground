export type BookViewModel = {
	isbn: string;
	title: string;
	author: string;
};

export type BookServerModel = {
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

export type Adapter = () => Promise<BookServerModel[]>;
