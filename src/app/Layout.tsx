import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export const Layout = () => {
  const navigation = useNavigate();
  let { pathname } = useLocation();
  return (
    <>
      <div className="App">
        <h1>TypeScript, JavaScript & React</h1>
        <h2>by Thomas Scharke</h2>
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
