import React, { useState, useMemo } from 'react';
import { SubTitle } from '../Headline';

const syncWait = (ms: number = 1000) => {
  const end = Date.now() + ms;
  while (Date.now() < end) continue;
};

// Keeps track of all created values during the app's life
const values: Set<any> = new Set();

export default function () {
  const [counter, setCounter] = useState<number>(0);
  const increment = () => setCounter((prevCounter: number) => prevCounter + 1);

  // The value inside the "dependency list" never changes (is the same), so no need
  // to re-run the "expensiv" function. React use the memorized result (store in the
  // variable `memorizedResult`).
  const memorizedResult = useMemo<number>(() => {
    console.log('[UseMemo] Caluclate the expensive value (1)');
    const result = 1 + 1;

    return result;
  }, []);

  // The value inside the "dependency list" changes on very click, so we've to
  // re-run the "expensiv" function. React calculates a new memorized result andstores
  // it nn the variable `memorizedResult2`).
  const memorizedResult2 = useMemo<number>(() => {
    console.log('[UseMemo] Caluclate the expensive value (2)');
    //syncWait();
    const result = counter + 1;

    return result;
  }, [counter]);

  // Register the values so we can count them
  values.add(memorizedResult);
  values.add(memorizedResult2);

  return (
    <>
      <SubTitle>useMemo</SubTitle>
      <div onClick={increment} role="button">
        Counter: <span>{counter}</span>
      </div>
      <br />
      <div>Newly created values: {values.size} </div>
    </>
  );
}
