import { isEmpty } from 'lodash';
import type { Book } from '../domain/models';

type BookListProperties = {
	books: Book[];
	loadBook: (id: Book['isbn']) => void;
};

export const BookList = ({ books, loadBook }: BookListProperties) => {
	if (isEmpty(books)) {
		return null;
	}

	return (
		<table>
			<thead>
				<tr>
					<th>ISBN</th>
					<th>Title</th>
					<th>Author</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{books.map(({ isbn, title, author }) => (
					<tr key={isbn}>
						<td>{isbn}</td>
						<td>{title}</td>
						<td>{author}</td>
						<td>
							<button onClick={() => loadBook(isbn)}>Details</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
