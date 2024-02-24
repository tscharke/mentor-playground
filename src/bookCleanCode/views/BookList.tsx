import { isEmpty } from 'lodash';
import { BookViewModel } from '../interfaces';

type BookListProperties = {
	books: BookViewModel[];
};

export const BookList = ({ books }: BookListProperties) => {
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
				</tr>
			</thead>
			<tbody>
				{books.map(({ isbn, title, author }) => (
					<tr key={isbn}>
						<td>{isbn}</td>
						<td>{title}</td>
						<td>{author}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
