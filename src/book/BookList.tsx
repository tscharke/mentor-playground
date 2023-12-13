import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ApplicationState, Book } from '../interfaces';
import { deleteBookAction, fetchBookList } from './actions';
import BookItem from './BookItem';
import Spinner from './Spinner';

interface Properties {
	bookList: ReadonlyArray<Book>;
	loading: boolean;
	error: string | null;
	fetchBookList: () => void;
	deleteBookAction: (isbn: number) => void;
}

const BookList = ({ bookList, fetchBookList, loading, deleteBookAction, error }: Properties) => {
	useEffect(() => {
		fetchBookList();
	}, []);

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
									deleteBookAction(book.isbn);
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

const mapStateToProps = (state: ApplicationState) => ({
	bookList: state.book.bookList,
	loading: state.book.loading,
	error: state.book.error,
});

const mapDispatchToProps = {
	deleteBookAction,
	fetchBookList,
};

const ConnectedBookList = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default ConnectedBookList;
