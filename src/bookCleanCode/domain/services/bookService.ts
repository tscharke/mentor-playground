import type { RawBook } from '../../infrastructure/models';
import type { Book } from '../models';

const createBook = ({ isbn, title, author }: RawBook): Book => ({ isbn, title, author });

export const createListOfBooks = (books?: RawBook[]): Book[] => (books ? books.map(createBook) : []);
