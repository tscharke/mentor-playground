import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import axios from 'axios';
import { ErrorBoundary } from 'react-error-boundary';
import { BookPage } from './BookPage';
import { BookError } from './components/BookError';
import type { RawBook } from './infrastructure/models';

const mockedBookFromTheServer: RawBook = {
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

describe('Book Page', () => {
	it('loads and shows a list of books', async () => {
		GETRequest.mockResolvedValueOnce({ data: [mockedBookFromTheServer] });

		render(<BookPage />);
		expect(screen.queryByText(/java web scraping handbook/i)).not.toBeInTheDocument();

		await userEvent.click(screen.getByRole('button'));
		expect(screen.queryByText(/java web scraping handbook/i)).toBeInTheDocument();
		expect(screen.queryByText(/1001606140805/i)).toBeInTheDocument();
		expect(screen.queryByText(/kevin sahin/i)).toBeInTheDocument();
		expect(screen.queryByText(/book details/i)).not.toBeInTheDocument();
	});

	it('shows the error that occurred while loading all books', async () => {
		GETRequest.mockRejectedValue(new Error('Force an error'));

		render(
			<ErrorBoundary fallbackRender={({ error }) => <BookError {...error} />}>
				<BookPage />
			</ErrorBoundary>,
		);
		await userEvent.click(screen.getByRole('button'));
		expect(screen.queryByText(/Force an error/i)).toBeInTheDocument();
	});

	it('selects a single book, loads and display it details', async () => {
		GETRequest.mockResolvedValueOnce({ data: [mockedBookFromTheServer] });
		GETRequest.mockResolvedValueOnce({ data: mockedBookFromTheServer });

		render(<BookPage />);
		expect(screen.queryByText(/book details/i)).not.toBeInTheDocument();

		await userEvent.click(screen.getByRole('button'));
		await userEvent.click(screen.getByRole('button', { name: /details/i }));
		expect(screen.queryByText(/book details/i)).toBeInTheDocument();
		expect(screen.queryByText(/isbn: 1001606140805/i)).toBeInTheDocument();
		expect(screen.queryByText('Learn advanced Web Scraping techniques')).toBeInTheDocument();
		expect(
			screen.queryByText(
				'Web scraping or crawling is the art of fetching data from a third party website by downloading and parsing the HTML code to extract the data you want. It can be hard. From bad HTML code to heavy Javascript use and anti-bot techniques, it is often tricky. Lots of companies use it to obtain knowledge ...',
			),
		).toBeInTheDocument();
		expect(screen.queryByText('$0.00')).toBeInTheDocument();
	});

	const log = console.log;

	beforeAll(() => {
		console.error = jest.fn();
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		console.log = log;
		jest.clearAllMocks();
	});
});