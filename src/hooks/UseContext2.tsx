/*
  Context-API

  Read and modify values 
*/
import React, { useContext, useState } from 'react';
import { SubTitle } from '../Headline';

const defaultValue = {
  foo: 'bar',
  changeValue: () => {}
};

const MyContext = React.createContext(defaultValue);

const MyContextProvider = ({ children }: any) => {
  const valueOutOfContext = useContext(MyContext);
  const [counter, setCounter] = useState(0);

  return (
    <MyContext.Provider
      value={{
        foo: `${valueOutOfContext.foo} - ${counter}`,
        changeValue: () => {
          setCounter((prevState) => prevState + 3);
        }
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const Child1 = () => {
  const valueOutOfContext = useContext(MyContext);

  return (
    <div onClick={valueOutOfContext.changeValue}>
      Child1 (click me): {JSON.stringify(valueOutOfContext)}
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
      <SubTitle>useContext (modify)</SubTitle>
      <MyContextProvider>
        <Child1 />
        <Child2>
          <Child3 />
        </Child2>
      </MyContextProvider>
    </>
  );
}
