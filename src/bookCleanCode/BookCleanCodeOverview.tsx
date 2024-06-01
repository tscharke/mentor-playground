import { ErrorBoundary } from 'react-error-boundary';
import { BookPage } from './BookPage';
import { BookError } from './components/BookError';

export const BookCleanCodeOverview = () => (
	<ErrorBoundary fallbackRender={({ error }) => <BookError {...error} />}>
		<BookPage />
	</ErrorBoundary>
);
