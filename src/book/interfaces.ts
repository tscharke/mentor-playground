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

  A Thunk-Action is an action that returns a function
  instead of an object (Action-Object or better a JavaScript-Object)
  with one argument only - `dispatch`.

  A Thunk-Action is async. Means the Thunk-Action returns a
  function that returns a Promise.
*/
