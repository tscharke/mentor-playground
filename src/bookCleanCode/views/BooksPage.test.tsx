import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { BooksPage } from './BooksPage';

describe('BookMonkey Books', () => {
	it('loads and shows a list of books', async () => {
		render(<BooksPage />);

		expect(screen.queryByText(/java web scraping handbook/i)).not.toBeInTheDocument();

		// Click the loading-Button to fetch the books
		await userEvent.click(screen.getByRole('button'));

		// Displays the data of the book (title, isbn, author)
		expect(screen.queryByText(/java web scraping handbook/i)).toBeInTheDocument();
		expect(screen.queryByText(/1001606140805/i)).toBeInTheDocument();
		expect(screen.queryByText(/kevin sahin/i)).toBeInTheDocument();
	});
});
