import { BookList } from './BookList';
import { useBooks } from './infrastructure/useBooks';
import { SuspenseWithErrorHandling } from './SuspenseWithErrorHandling';

export const BookPage = () => {
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
