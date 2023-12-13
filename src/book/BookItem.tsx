import { Book } from '../interfaces';

interface Properties {
	book: Book;
}

const BookItem = ({ book: { isbn, title } }: Properties): JSX.Element => {
	return (
		<div>
			<div>ISBN: {isbn}</div>
			<div>Name: {title}</div>
		</div>
	);
};

export default BookItem;
