import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookApp from '../book';
import ErrorHandlingDemo from '../errorHandling/ErrorHandlingDemo';
import FormsExample from '../forms';
import { HooksOverview } from '../hooks/HooksOverview';
import PlaygroundsOverview from '../playgrounds/PlaygroundsOverview';
import SimpleComponentsOverview from '../simpleComponents';
import StyledComponentOverview from '../style';
import { SuspenseDemo } from '../suspense/SuspenseDemo';
import { WebWorker } from '../webWorker/WebWorker';
import { AppOverview } from './AppOverview';
import { Layout } from './components/Layout';
import './styles.css';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<AppOverview />} />
					<Route path="components" element={<SimpleComponentsOverview />} />
					<Route path="hooks" element={<HooksOverview />} />
					<Route path="styled-components" element={<StyledComponentOverview />} />
					<Route path="playgrounds" element={<PlaygroundsOverview />} />
					<Route path="forms" element={<FormsExample />} />
					<Route path="errors" element={<ErrorHandlingDemo />} />
					<Route path="suspense" element={<SuspenseDemo />} />
					<Route path="book-app" element={<BookApp />} />
					<Route path="webworker" element={<WebWorker />} />
				</Route>
			</Routes>
		</Router>
	);
}
