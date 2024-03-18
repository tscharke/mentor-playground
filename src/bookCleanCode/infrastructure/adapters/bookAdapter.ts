import axios, { AxiosError } from 'axios';
import type { Adapter, Factory, RawBook } from '../models';
import { BookAdapterError } from './BookAdapterError';

const BASE_URL = 'http://localhost:4730';
const URL = `${BASE_URL}/books`;

const fetch = async <T>(url: string): Promise<T> => {
	try {
		const response = await axios.get<T>(url, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});
		return response.data;
	} catch (error) {
		throw BookAdapterError(error as AxiosError, url);
	}
};

/**
 * Retrieves a list of books from the server.
 *
 * @returns {Promise<RawBook[]>} - A promise that resolves a list of raw book data.
 * @throws {BookAdapterError} - If something happened reaching the server.
 */
const loadAllBooksFromServer = async (): Promise<RawBook[]> => fetch<RawBook[]>(URL);

/**
 * Retrieves a book's detailed information from the server based on its ISBN.
 *
 * @param {string} isbn - The ISBN of the book.
 * @returns {Promise<RawBook>} - A Promise that resolves to the raw book data retrieved from the server.
 * @throws {BookAdapterError} - If no ISBN is provided, an error is thrown.
 */
const loadBookFromServer = async (isbn: RawBook['isbn']): Promise<RawBook> => {
	if (!isbn) {
		throw BookAdapterError(new Error('Cannot fetch a single book without an ISBN from the API') as AxiosError, URL);
	}
	return fetch<RawBook>(`${URL}/${isbn}`);
};

/**
 * The Adapter provides an object with methods to interact with the functionality of the server.
 *
 * @typedef {Adapter} Adapter
 * @property {Function} loadBookFromServer - Function to load a single book, via ISBN, from server.
 * @property {Function} loadAllBooksFromServer - Function to load all books from server.
 */
const adapter = (): Adapter => ({
	loadBookFromServer,
	loadAllBooksFromServer,
});

/**
 * A Factory, that's a function, to create an instance of an Adapter.
 *
 * @returns {Factory} The book adapter factory.
 */
export const bookAdapterFactory = (): Factory => adapter;
