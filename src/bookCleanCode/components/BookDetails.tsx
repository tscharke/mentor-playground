import { ReactNode } from 'react';
import type { BookDetail } from '../domain/models';

type BookDetailsProperties = {
	book: BookDetail | null;
};

export const BookDetails = ({ book }: BookDetailsProperties): ReactNode => {
	if (!book) {
		return null;
	}

	const { isbn, title, author, subtitle, abstract, price } = book;
	return (
		<section className="BookDetails">
			<h1>Book Details</h1>
			<div>
				<p>{title}</p>
				<p>{subtitle}</p>
				<p>{abstract}</p>
				<p>{author}</p>
				<section>
					<p>ISBN: {isbn}</p>
					<p>
						Price: <strong>{price}</strong>
					</p>
				</section>
			</div>
		</section>
	);
};
