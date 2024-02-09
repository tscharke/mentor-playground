import { useEffect, useState } from 'react';
import { Book } from '../book/interfaces.ts';

const useFetchDataFromAPI = (url: string, timeout: number = 2000) => {
	const [data, setData] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(url)
			.then((response) => response.json())
			.then((data: Book[]) => {
				const books = data.reduce((result, book) => {
					return result.concat(book.title);
				}, [] as string[]);

				setTimeout(() => {
					setData(books);
					setLoading(false);
				}, timeout);
			});
	}, [url, timeout]);

	return [data, loading];
};

const Children = () => {
	const [data, loading] = useFetchDataFromAPI('http://localhost:4730/books', 5000);

	return (
		<>
			<h2>Value in children</h2>
			<h4>Data: {JSON.stringify(data)}</h4>
			<h4>Loading: {loading ? 'Pending…' : 'Done!'}</h4>
		</>
	);
};

export default function CustomHook() {
	const [data, loading] = useFetchDataFromAPI('http://localhost:4730/books');

	return (
		<>
			<h2>Custom Hook</h2>
			<h4>Data: {JSON.stringify(data)}</h4>
			<h4>Loading: {loading ? 'Pending…' : 'Done!'}</h4>
			<Children />
		</>
	);
}
