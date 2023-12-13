import { Action, Book, Dispatch, ThunkAction } from '../interfaces';

const BOOKS_URL = 'http://localhost:4730/books';

export const FETCH_BOOK_LIST_PENDING = 'FETCH_BOOK_LIST_PENDING';
export const FETCH_BOOK_LIST_SUCCESS = 'FETCH_BOOK_LIST_SUCCESS';
export const FETCH_BOOK_LIST_ERROR = 'FETCH_BOOK_LIST_ERROR';

export const fetchBookListPending = (): Action => {
	return { type: FETCH_BOOK_LIST_PENDING };
};

export const fetchBookListSuccess = (books: ReadonlyArray<Book>): Action => {
	return { type: FETCH_BOOK_LIST_SUCCESS, books };
};

export const fetchBookListError = (error: string): Action => {
	return { type: FETCH_BOOK_LIST_ERROR, payload: error };
};

/*
  Async Redux-Function

  Redux Thunk allows you to write `action creators` that return a
  function instead of an Action.
*/

export const fetchBookList = (): ThunkAction => {
	return async (dispatch: Dispatch) => {
		console.log('[Redux] Start fetching books.');
		dispatch(fetchBookListPending());

		try {
			console.log('[Redux] Fetching books from the API.');

			const response = await fetch(BOOKS_URL);
			const books = await response.json();

			console.log('[Redux] Successfully fetched books.');
			// dispatch(fetchBookListSuccess(books));
			setTimeout(() => {
				dispatch(fetchBookListSuccess(books));
			}, 3000);
		} catch (error) {
			console.log('[Redux] Error while fetching books.', error);
			dispatch(fetchBookListError((error as Error).toString()));
		}
	};
};

export const deleteBookAction = (isbn: number): Action => ({
	type: 'DELETE_BOOK',
	payload: isbn,
});

export const addBook = (book: Book, createTime: Date, userName: string): Action => {
	return {
		type: 'ADD_BOOK',
		book: {
			...book,
			createDate: createTime,
			modifyDate: createTime,
			user: {
				name: userName,
			},
		},
	};
};

export const createAddDummyAction = (): Action => ({
	type: 'ADD_DUMMY',
});
