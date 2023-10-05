import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Overview } from './Overview';
import SimpleComponentsOverview from '../simpleComponents';
import HooksOverview from '../hooks/HooksOverview';
import SyledComponentOverview from '../style/';
import PlaygroundsOverview from '../playgrounds/PlaygroundsOverview';
import FormsExample from '../forms';
import ErrorHandlingDemo from '../errorHandling/ErrorHandlingDemo';
import { SuspenseDemo } from '../suspense/SuspenseDemo';
import BookApp from '../book';

export default function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="components" element={<SimpleComponentsOverview />} />
          <Route path="hooks" element={<HooksOverview />} />
          <Route
            path="styled-components"
            element={<SyledComponentOverview />}
          />
          <Route path="playgrounds" element={<PlaygroundsOverview />} />
          <Route path="forms" element={<FormsExample />} />
          <Route path="errors" element={<ErrorHandlingDemo />} />
          <Route path="suspense" element={<SuspenseDemo />} />
          <Route path="book-app" element={<BookApp />} />
        </Route>
      </Routes>
    </Router>
  );
}
