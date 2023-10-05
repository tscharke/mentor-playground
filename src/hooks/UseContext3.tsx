/*
  Context-API

  Mutiple Context-Provider
*/
import React, { useContext } from 'react';
import { SubTitle } from '../Headline';

const ThemeContext = React.createContext({
  theme: 'light'
});

const MyContext = React.createContext({
  foo: 'bar'
});

const Child1 = () => {
  const { theme } = useContext(ThemeContext);
  const { foo } = useContext(MyContext);

  return (
    <div>
      Child1:
      <span>
        Theme: {theme} | Foo: {foo}
      </span>
    </div>
  );
};

const Child2 = ({ children }: any) => {
  return (
    <>
      <div>Child2</div>
      {children}
    </>
  );
};

const Child3 = () => {
  const valueOutOfContext = useContext(MyContext);

  return <div>Child3: {JSON.stringify(valueOutOfContext)}</div>;
};

export default function () {
  return (
    <>
      <SubTitle>useContext (mutilple provider)</SubTitle>

      <ThemeContext.Provider value={{ theme: 'light' }}>
        <>
          <Child1 />
          <Child2>
            <MyContext.Provider value={{ foo: 'mein bar' }}>
              <Child3 />
            </MyContext.Provider>
          </Child2>
        </>
      </ThemeContext.Provider>
    </>
  );
}
