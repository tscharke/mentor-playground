import CustomHook from './CustomHook';
import UseContext1 from './UseContext1';
import UseContext2 from './UseContext2';
import UseContext3 from './UseContext3';
import UseState from './UseState';
import UseRef from './UseRefHook';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';
import UseReducer from './reducer/UseReducer';
import { useState } from 'react';

export {
  UseRef,
  UseState,
  UseContext1,
  UseContext2,
  UseContext3,
  CustomHook,
  UseMemo,
  UseCallback,
  UseReducer
};

export const useCounterHook = (
  initalValue: number = 0
): [number, () => void] => {
  const [counter, setCounter] = useState<number>(initalValue);

  const increment = () => setCounter((prevCounter: number) => prevCounter + 1);

  return [counter, increment];
};
