import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import axios from 'axios';
import { BookServerModel } from '../interfaces';
import { BooksPage } from './BooksPage';

const mockedBookFromTheServer: BookServerModel = {
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
};

const GETRequest = jest.spyOn(axios, 'get');

describe('BookMonkey Books', () => {
	it('loads and shows a list of books', async () => {
		GETRequest.mockResolvedValueOnce({ data: [mockedBookFromTheServer] });
		render(<BooksPage />);

		expect(screen.queryByText(/java web scraping handbook/i)).not.toBeInTheDocument();

		// Click the loading-Button to fetch the books
		await userEvent.click(screen.getByRole('button'));

		// Displays the data of the book (title, isbn, author)
		expect(screen.queryByText(/java web scraping handbook/i)).toBeInTheDocument();
		expect(screen.queryByText(/1001606140805/i)).toBeInTheDocument();
		expect(screen.queryByText(/kevin sahin/i)).toBeInTheDocument();
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		jest.clearAllMocks();
	});
});
