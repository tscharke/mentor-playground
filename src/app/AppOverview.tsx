import { Link } from 'react-router-dom';

const LINKS = [
	{ link: 'components', name: 'Simple Components' },
	{ link: 'hooks', name: 'Hooks' },
	{ link: 'styled-components', name: 'Styled Components' },
	{ link: 'playgrounds', name: 'Playgrounds' },
	{ link: 'forms', name: 'Forms' },
	{ link: 'errors', name: 'Errors' },
	{ link: 'suspense', name: 'Suspense' },
	{ link: 'book-app', name: 'Workshops.de - Book-App' },
	{ link: 'webworker', name: 'WebWorker' },
];

export const AppOverview = () => (
	<ul className="Overview">
		{LINKS.map(({ link, name }) => (
			<li key={link}>
				<Link to={link}>{name}</Link>
			</li>
		))}
	</ul>
);
