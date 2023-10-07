import { useState } from 'react';
import CustomHook from './CustomHook';
import UseCallback from './UseCallback';
import UseContext1 from './UseContext1';
import UseContext2 from './UseContext2';
import UseContext3 from './UseContext3';
import UseMemo from './UseMemo';
import { UseReducerComponent } from './useReducer/UseReducerComponent';
import UseRef from './UseRefHook';
import UseState from './UseState';

export {
	UseRef,
	UseState,
	UseContext1,
	UseContext2,
	UseContext3,
	CustomHook,
	UseMemo,
	UseCallback,
	UseReducerComponent,
};

export const useCounterHook = (initalValue: number = 0): [number, () => void] => {
	const [counter, setCounter] = useState<number>(initalValue);

	const increment = () => setCounter((prevCounter: number) => prevCounter + 1);

	return [counter, increment];
};
