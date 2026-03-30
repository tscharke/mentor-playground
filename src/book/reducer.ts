import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Book, BookState } from './interfaces';

const BOOKS_URL = 'http://localhost:4730/books';

const INITIAL_STATE: BookState = {
	loading: false,
	error: null,
	bookList: [],
};

export const fetchBookList = createAsyncThunk<ReadonlyArray<Book>, void, { rejectValue: string }>(
	'book/fetchBookList',
	async (_, { rejectWithValue }) => {
		console.log('[Redux] Start fetching books.');

		try {
			console.log('[Redux] Fetching books from the API.');

			const response = await fetch(BOOKS_URL);

			if (!response.ok) {
				return rejectWithValue(`Request failed with status ${response.status}`);
			}

			const books = (await response.json()) as ReadonlyArray<Book>;

			console.log('[Redux] Successfully fetched books.');
			await new Promise((resolve) => {
				setTimeout(resolve, 3000);
			});

			return books;
		} catch (error) {
			console.log('[Redux] Error while fetching books.', error);
			return rejectWithValue((error as Error).toString());
		}
	},
);

const bookSlice = createSlice({
	name: 'book',
	initialState: INITIAL_STATE,
	reducers: {
		deleteBookAction: (state, action: PayloadAction<number>) => {
			state.bookList = state.bookList.filter((availableBook) => availableBook.isbn !== action.payload);
		},
		addBook: {
			reducer: (state, action: PayloadAction<Book & { createDate: Date; modifyDate: Date; user: { name: string } }>) => {
				state.bookList = state.bookList.concat(action.payload);
			},
			prepare: (book: Book, createTime: Date, userName: string) => ({
				payload: {
					...book,
					createDate: createTime,
					modifyDate: createTime,
					user: {
						name: userName,
					},
				},
			}),
		},
		addDummy: (state) => state,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBookList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchBookList.fulfilled, (state, action) => {
				console.log('[Reducer] Fetching books was successful. Now update the Redux-Store');
				state.bookList = [...action.payload];
				state.loading = false;
			})
			.addCase(fetchBookList.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload ?? action.error.message ?? 'Unknown error';
			});
	},
});

export const { addBook, addDummy: createAddDummyAction, deleteBookAction } = bookSlice.actions;

export default bookSlice.reducer;
