import type { BookAdapterError } from './infrastructure/adapters/BookAdapterError';

export type BooksErrorProperties = BookAdapterError;

export const BookError = ({ url, ...error }: BooksErrorProperties) => (
	<section>
		<p>
			The following error occurred while trying to load a list of books from the <strong>BookMonkey-API</strong>&nbsp;
			at <code>{url}</code>:
		</p>
		<code>{JSON.stringify(error)}</code>
	</section>
);
