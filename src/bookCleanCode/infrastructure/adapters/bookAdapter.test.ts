import axios from 'axios';
import type { RawBook } from '../models';
import { bookAdapterFactory } from './bookAdapter';

const mockedBooksFromTheServer: RawBook[] = [
	{
		id: '9780071494618',
		title: 'Hacking Exposed Web 2.0',
		subtitle: 'Web 2.0 Security Secrets and Solutions',
		isbn: '9780071494618',
		abstract:
			'Protect your Web 2.0 architecture against the latest wave of cybercrime using expert tactics from Internet security professionals. Hacking Exposed Web 2.0 shows how hackers perform reconnaissance, choose their entry point, and attack Web 2.0 - based services, and reveals detailed countermeasures and...',
		author: 'Rich Cannings, Himanshu Dwivedi, Zane Lackey',
		publisher: 'McGraw-Hill',
		price: '$12.03',
		numPages: 258,
		cover: 'http://localhost:4730/covers/9780071494618.png',
		userId: 1,
	},
];

const GETRequest = jest.spyOn(axios, 'get');

describe('Book Adapter', () => {
	it('loads a list of books from the server', async () => {
		GETRequest.mockResolvedValue({ data: [mockedBooksFromTheServer] });

		const createBookAdapter = bookAdapterFactory();
		const { loadAllBooksFromServer } = createBookAdapter();

		const result = await loadAllBooksFromServer();
		expect(result).toEqual([mockedBooksFromTheServer]);
		// Make sure that all books have actually been requested from the API
		expect(GETRequest).toHaveBeenCalledWith(expect.stringContaining('/books'), expect.anything());
	});

	it('handles an error while loads a list of books from the server', async () => {
		const errorMessage = 'An error occurred while loading a list of books';
		GETRequest.mockRejectedValue(new Error(errorMessage));

		const createBookAdapter = bookAdapterFactory();
		const { loadAllBooksFromServer } = createBookAdapter();

		await expect(loadAllBooksFromServer()).rejects.toMatchObject({
			// Make sure that it is the correct instance of an error
			name: 'BookAdapterError',
			// And make sure that the correct error-message was provided
			message: errorMessage,
		});
	});

	it('loads a single book from the server', async () => {
		GETRequest.mockResolvedValue({ data: mockedBooksFromTheServer[1] });

		const createBookAdapter = bookAdapterFactory();
		const { loadBookFromServer } = createBookAdapter();
		const isbn = '1001606140805';

		const result = await loadBookFromServer(isbn);
		expect(result).toEqual(mockedBooksFromTheServer[1]);
		// Make sure that this specific book (with the isbn) has actually been requested from the API
		expect(GETRequest).toHaveBeenCalledWith(expect.stringContaining(`/books/${isbn}`), expect.anything());
	});

	it('handles an error while loads a single book without an ISBN', async () => {
		const createBookAdapter = bookAdapterFactory();
		const { loadBookFromServer } = createBookAdapter();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const isbn: any = undefined;

		await expect(loadBookFromServer(isbn)).rejects.toMatchObject({
			// Make sure that it is the correct instance of an error
			name: 'BookAdapterError',
			// And make sure that the correct error-message was provided
			message: 'Cannot fetch a single book without an ISBN from the API',
		});
	});

	it('handles an error while loads a single book from the server', async () => {
		const errorMessage = 'An error occurred while loading a single book';
		GETRequest.mockRejectedValue(new Error(errorMessage));

		const createBookAdapter = bookAdapterFactory();
		const { loadBookFromServer } = createBookAdapter();
		const isbn = '1001606140805';

		await expect(loadBookFromServer(isbn)).rejects.toMatchObject({
			// Make sure that it is the correct instance of an error
			name: 'BookAdapterError',
			// And make sure that the correct error-message was provided
			message: errorMessage,
		});
		// Make sure that this specific book (with the isbn) has actually been requested from the API
		expect(GETRequest).toHaveBeenCalledWith(expect.stringContaining(`/books/${isbn}`), expect.anything());
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		jest.clearAllMocks();
	});
});
