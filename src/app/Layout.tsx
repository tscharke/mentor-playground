import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Layout = () => {
	const navigation = useNavigate();
	let { pathname } = useLocation();
	return (
		<>
			<div className="App">
				<h1>React & TypeScript</h1>
				<h2>Mentor Playground</h2>
			</div>
			{pathname !== '/' && (
				<nav>
					<div
						onClick={() => {
							navigation('/');
						}}
					>
						Go home
					</div>
				</nav>
			)}
			<div className="Outlet">
				<Outlet />
			</div>
		</>
	);
};
