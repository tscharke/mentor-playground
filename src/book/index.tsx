import { Provider } from 'react-redux';
import BookList from './BookList';
import { appStore } from './reduxStore';
import '../app/styles.css';

export default function BookWithReduxProvider() {
	return (
		<>
			<Provider store={appStore}>
				<BookList />
			</Provider>
		</>
	);
}
