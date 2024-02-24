import { BookAdapterError } from '../adapter/BookAdapterError';

export type BooksErrorProperties = BookAdapterError;

export const BooksError = ({ url, ...error }: BooksErrorProperties) => {
	return (
		<section>
			<p>
				The following error occurred while trying to load a list of books from the <strong>BookMonkey-API</strong>&nbsp;
				at <code>{url}</code>:
			</p>
			<code>{JSON.stringify(error)}</code>
		</section>
	);
};
