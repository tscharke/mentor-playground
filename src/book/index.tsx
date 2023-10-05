import { Provider } from 'react-redux';
import BookList from './BookList';
import createApplicationStore from './reduxStore';
import '../app/styles.css';

// Redux Store
const appStore = createApplicationStore();

export default function () {
  return (
    <>
      <Provider store={appStore}>
        <BookList />
      </Provider>
    </>
  );
}
