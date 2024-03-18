import { ReactNode } from 'react';
import { BookDetails } from './components/BookDetails';
import { BookList } from './components/BookList';
import { SuspenseWithErrorHandling } from './components/SuspenseWithErrorHandling';
import { useBooks } from './infrastructure/useBooks';

/**
 * Representation-Layer to displaying a list of books, and there details if the User wants this.
 *
 * @returns {ReactNode} The component
 */
export const BookPage = (): ReactNode => {
	const { books, loadAllBooks, error, loadBook, book } = useBooks();

	return (
		<section className="Book">
			<nav>
				<button onClick={loadAllBooks}>Load all books</button>
			</nav>
			<section>
				<SuspenseWithErrorHandling fallback={<div>Loading…</div>} error={error}>
					<BookList books={books} loadBook={loadBook} />
					<BookDetails book={book} />
				</SuspenseWithErrorHandling>
			</section>
		</section>
	);
};
