import { useBooks } from '../hooks/useBooks';
import { BookList } from './BookList';
import { SuspenseWithErrorHandling } from './SuspenseWithErrorHandling';

export const BooksPage = () => {
	const [books, loadAllBooks, error] = useBooks();

	return (
		<section>
			<button onClick={loadAllBooks}>Load all books</button>
			<SuspenseWithErrorHandling fallback={<div>Loading…</div>} error={error}>
				<BookList books={books} />
			</SuspenseWithErrorHandling>
		</section>
	);
};
