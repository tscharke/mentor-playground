import React, { useState, useCallback } from 'react';
import { SubTitle } from '../Headline';

// Keeps track of all created functions during the app's life
const functions: Set<any> = new Set();

export default function () {
  const [delta, setDelta] = useState<number>(1);
  const [c, setC] = useState<number>(0);

  // Create two function to modify the state
  // Version 1 - Naive implementation
  const incrementDelta = () => setDelta((delta) => delta + 1);
  const increment = () => setC((c) => c + delta);
  // Version 2 - Without dependencies
  /*
  const incrementDelta = useCallback(() => setDelta((delta) => delta + 1), []);
  const increment = useCallback(() => setC((c) => c + delta), []);
  */
  // Version 3 - Recreate increment on every change of delta
  /*
  const incrementDelta = useCallback(() => setDelta((delta) => delta + 1), []);
  const increment = useCallback(() => setC((c) => c + delta), [delta]);
  */

  // Register the functions so we can count them
  functions.add(incrementDelta);
  functions.add(increment);

  return (
    <>
      <SubTitle>useCallback</SubTitle>
      <div> Delta is {delta} </div>
      <div> Counter is {c} </div>
      <br />
      <div>
        <button onClick={incrementDelta}>Increment Delta</button>
        <button onClick={increment}>Increment Counter</button>
      </div>
      <br />
      <div>Newly Created Functions: {functions.size - 2} </div>{' '}
    </>
  );
}
