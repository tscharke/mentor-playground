import { useEffect } from 'react';
import { deleteBookAction, fetchBookList } from './actions';
import BookItem from './BookItem';
import { Book } from './interfaces';
import { useAppDispatch, useAppSelector } from './hooks';
import Spinner from './Spinner';

const BookList = () => {
	const dispatch = useAppDispatch();
	const { bookList, loading, error } = useAppSelector((state) => state.book);

	useEffect(() => {
		void dispatch(fetchBookList());
	}, [dispatch]);

	if (error) {
		return (
			<div style={{ textAlign: 'center' }}>
				Folgender Fehler ist beim Laden der Bücher aufgetreten:
				<pre>{error}</pre>
			</div>
		);
	}

	return (
		<>
			<Spinner message="Bücher werden geladen…" show={loading} />
			<div>
				{bookList.map((book: Book) => {
					return (
						<div key={`Book-${book.isbn}`}>
							<BookItem book={book} />
							<button
								onClick={() => {
									dispatch(deleteBookAction(book.isbn));
								}}
							>
								Delete
							</button>
							<hr />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default BookList;
