import type { BookServerModel, BookViewModel } from '../interfaces';

export const createBooks = (books?: BookServerModel[]): BookViewModel[] => {
	if (!books) {
		return [];
	}
	return books.map(({ isbn, title, author }) => ({ isbn, title, author }));
};
