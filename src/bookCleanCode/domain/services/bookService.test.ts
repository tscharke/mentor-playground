import type { RawBook } from '../../infrastructure/models';
import { createBookDetail, createListOfBooks } from './bookService';

const booksFromServer: RawBook[] = [
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

describe('Book Service', () => {
	describe('Book List', () => {
		it('returns a list of models when books are available', () => {
			const books = createListOfBooks(booksFromServer);
			expect(books).toEqual([
				{
					isbn: '1001606140805',
					title: 'Java Web Scraping Handbook',
					author: 'Kevin Sahin',
				},
			]);
		});

		it('returns an empty list when no books are available', () => {
			const booksFromServer = undefined;

			const books = createListOfBooks(booksFromServer);
			expect(books).toEqual([]);
		});
	});

	describe('Book Details', () => {
		it('returns a model of book-details when a book is available', () => {
			const bookFromServer = booksFromServer[0];

			const book = createBookDetail(bookFromServer);
			expect(book).toEqual({
				isbn: '1001606140805',
				title: 'Java Web Scraping Handbook',
				author: 'Kevin Sahin',
				subtitle: 'Learn advanced Web Scraping techniques',
				abstract:
					'Web scraping or crawling is the art of fetching data from a third party website by downloading and parsing the HTML code to extract the data you want. It can be hard. From bad HTML code to heavy Javascript use and anti-bot techniques, it is often tricky. Lots of companies use it to obtain knowledge ...',
				price: '$0.00',
			});
		});

		it('returns no model of book-detail when no book are available', () => {
			const bookFromServer = undefined;

			const book = createBookDetail(bookFromServer);
			expect(book).toBeNull();
		});
	});
});
