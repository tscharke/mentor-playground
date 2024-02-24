import { ErrorBoundary } from 'react-error-boundary';
import { BooksError } from './BooksError';
import { BooksPage } from './BooksPage';

export const BookCleanCodeOverview = () => (
	<ErrorBoundary fallbackRender={({ error }) => <BooksError {...error} />}>
		<BooksPage />
	</ErrorBoundary>
);
