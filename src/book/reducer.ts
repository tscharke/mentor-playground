import { FETCH_BOOK_LIST_ERROR, FETCH_BOOK_LIST_PENDING, FETCH_BOOK_LIST_SUCCESS } from './actions';
import { Action, Book, BookState } from './interfaces';

const INITIAL_STATE: BookState = {
	loading: false,
	error: null,
	bookList: [],
};

export default function (state = INITIAL_STATE, action: Action) {
	switch (action.type) {
		case FETCH_BOOK_LIST_PENDING:
			return {
				...state,
				loading: true,
			};

		case FETCH_BOOK_LIST_SUCCESS:
			console.log('[Reducer] Fetching books was successful. Now update the Redux-Store');
			return {
				...state,
				bookList: action.books,
				loading: false,
			};

		case FETCH_BOOK_LIST_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case 'DELETE_BOOK':
			const newBookList = state.bookList.reduce((newBookList: ReadonlyArray<Book>, availableBook: Book) => {
				const isBookToDelete = availableBook.isbn === action.payload;

				return isBookToDelete ? newBookList : newBookList.concat(availableBook);
			}, []);

			return {
				...state,
				bookList: newBookList,
			};
		default:
			return state;
	}
}
