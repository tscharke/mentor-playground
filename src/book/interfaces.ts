export interface ApplicationState {
	book: BookState;
}

export interface BookState {
	loading: boolean;
	error: string | null;
	bookList: ReadonlyArray<Book>;
}

export interface Book {
	isbn: number;
	title: string;
}

/*
  Actions are Javascript-Objects with minimum
  one property - `type`.

  Redux-Action sometimes called FAS = Flux Standard Action
  FAS = Flux Standard Action

  {
    type: string
    payload?: any
    error?: boolean
  }

*/
export interface Action {
	type: string;
	payload?: unknown;
	error?: boolean;
	[key: string]: unknown;
}

export type Dispatch = (action: Action) => void;

/*
  A Thunk-Action is an action that returns a functions
  instead of an object (Action-Object or better a JavaScript-Object)
  with one argument only - `dispatch`.

  This Thunk-Action is async. Means the Thunk-Action returns a
  function that returns a Promise.
*/
export type ThunkAction = (dispatch: Dispatch) => Promise<void>;
