import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './reducer';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

// Add Redux Dev-Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	book: booksReducer,
});

// Create a list of middlewares
const middleware = [thunk];

// Create own Application Store
export default function () {
	const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

	return store;
}
