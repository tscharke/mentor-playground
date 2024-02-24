import axios from 'axios';
import type { RawBook } from '../models';
import { bookAdapterFactory } from './bookAdapter';

const mockedBookFromTheServer: RawBook = {
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
};

const GETRequest = jest.spyOn(axios, 'get');

describe('Book Adapter', () => {
	it('loads a book from the server', async () => {
		GETRequest.mockResolvedValueOnce({ data: [mockedBookFromTheServer] });
		const createBookAdapter = bookAdapterFactory();
		const loadAllBooksFromServer = createBookAdapter();

		const result = await loadAllBooksFromServer();
		expect(result).toEqual([mockedBookFromTheServer]);
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	afterAll(() => {
		jest.clearAllMocks();
	});
});
