/*
  A component with children.
  Toggles value on the level of the parent component and use
  this modified values as props of the Child-Component.
*/
import React, { useState } from 'react';

export interface Person {
  firstName: string;
  lastName: string;
}

export const ComponentWithStateAndChildren = () => {
  const [person, setPerson] = useState<Person>({
    firstName: 'Thomas',
    lastName: 'Scharke'
  });

  const toggleValues = () => {
    setPerson(({ firstName, lastName }) => ({
      firstName: lastName,
      lastName: firstName
    }));
  };

  return (
    <div>
      <h3>ComponentWithStateAndChildren</h3>
      <button onClick={toggleValues}>Toggle Values…</button>

      <Child firstName={person.firstName} lastName={person.lastName}>
        <div>Hello from Child</div>
      </Child>
    </div>
  );
};

interface ChildProps {
  firstName: string;
  lastName: string;
  children: any;
}

const Child: React.FC<ChildProps> = (props: any) => {
  const { firstName, lastName, children } = props;
  const Comp = <div>jhe</div>;

  return (
    <div>
      <h2>Child Component</h2>
      <p>Diese Komponente zeigt die Daten der Person an…</p>
      <div>Firstname: {firstName}</div>
      <div>Lastname: {lastName}</div>

      {children}
      {/*      <Comp foo="bar" bar="baz" />*/}
    </div>
  );
};
