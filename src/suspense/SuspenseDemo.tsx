/*
  Demo to show an implementation of "Fetching data" with React-Suspense.
  
  The idea:
   - Fetching data from an endpoint using `fetch`.
   - Using React's `Suspense` to show up a spinner while data loading.
   - Displaing the data, if loaded.
*/

import { Suspense, useEffect, useState } from 'react';
import { UserList } from './UserList';
import { Headline } from '../Headline';
import { wrapPromise } from './helper';
import { ContentLayout } from '../ContentLayout';

const usersWrappedPromise = wrapPromise(
  fetch('https://jsonplaceholder.typicode.com/users'),
  3000
);

const UserListWrapper = () => {
  // This is there the magic happends 💫
  const users = usersWrappedPromise.read();

  return <UserList users={users} />;
};

const FetchDataWithSuspense = () => {
  return (
    <>
      <Headline>Results (with Suspense):</Headline>
      <Suspense fallback={<div>Loading data from API…</div>}>
        <UserListWrapper />
      </Suspense>
    </>
  );
};

const FetchDataWithUseEffectHook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <>
      <Headline>Results (with useEffect):</Headline>
      <UserList users={data} />
    </>
  );
};

export const SuspenseDemo = () => (
  <ContentLayout headline="SuspenseDemo">
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <FetchDataWithSuspense />
      <FetchDataWithUseEffectHook />
    </div>
  </ContentLayout>
);
