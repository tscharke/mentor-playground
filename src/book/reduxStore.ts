import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
// import logger from "redux-logger";
import booksReducer from './reducer';
import thunk from 'redux-thunk';

// Add Redux Dev-Tools
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  book: booksReducer
});

// Create a list of middlewares
const middleware = [thunk];

// Create own Application Store
export default function () {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
}
