import { BookServerModel } from '../interfaces';
import { createBooks } from './BooksService';

describe('Books Service', () => {
	it('returns an empty list when no books are available', () => {
		const booksFromServer = undefined;
		const books = createBooks(booksFromServer);
		expect(books).toEqual([]);
	});

	it('returns an model when books available', () => {
		const booksFromServer: BookServerModel[] = [
			{
				id: '1001606140805',
				title: 'Java Web Scraping Handbook',
				subtitle: 'Learn advanced Web Scraping techniques',
				isbn: '1001606140805',
				abstract:
					'Web scraping or crawling is the art of fetching data from a third party website by downloading and parsing the HTML code to extract the data you want. It can be hard. From bad HTML code to heavy Javascript use and anti-bot techniques, it is often tricky. Lots of companies use it to obtain knowledge ...',
				author: 'Kevin Sahin',
				publisher: 'Leanpub',
				price: '$0.00',
				numPages: 115,
				cover: 'http://localhost:4730/covers/1001606140805.png',
				userId: 1,
			},
		];
		const books = createBooks(booksFromServer);
		expect(books).toEqual([
			{
				isbn: '1001606140805',
				title: 'Java Web Scraping Handbook',
				author: 'Kevin Sahin',
			},
		]);
	});
});
