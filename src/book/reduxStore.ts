import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './reducer';

const createApplicationStore = () =>
	configureStore({
		reducer: {
			book: booksReducer,
		},
		devTools: true,
	});

export const appStore = createApplicationStore();

export type AppStore = ReturnType<typeof createApplicationStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
