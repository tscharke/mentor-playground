import { ErrorBoundary } from 'react-error-boundary';
import { BookError } from './BookError';
import { BookPage } from './BookPage';

export const BookCleanCodeOverview = () => (
	<ErrorBoundary fallbackRender={({ error }) => <BookError {...error} />}>
		<BookPage />
	</ErrorBoundary>
);
