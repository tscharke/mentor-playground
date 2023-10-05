import React, { useState } from 'react';

export default function (props: any) {
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<number>(4711);
  const [person, setPerson] = useState({
    firstName: 'Thomas',
    lastName: 'Scharke',
    address: {
      houseNumber: 42, // -> 23
      street: '',
      citiy: ''
    }
  });

  return (
    <div>
      <p>
        Current state of this Component: {value} | Person:
        <code>{JSON.stringify(person)}</code>
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
          setValue(23);
          setPerson({
            ...person,
            address: {
              ...person.address,
              houseNumber: 23,
              street: 'xxx'
            }
          });
        }}
      >
        Rest state!
      </button>
      <button
        onClick={() => {
          setValue(() => {
            return 4712;
          });
        }}
      >
        Change state (primitive type)
      </button>
      <button
        onClick={() => {
          setValue((prevState) => {
            console.log('Prev. State:', prevState);
            return 4713;
          });
        }}
      >
        Change state (function)
      </button>
    </div>
  );
}
