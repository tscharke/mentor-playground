import React, { useEffect, useState } from 'react';

// const URL = 'http://localhost:4730/books';
const URL =
  'https://jsonplaceholder.typicode.com/users?https://jsonplaceholder.typicode.com/users?id=1&id=2&id=3';
/*
const fetchBooks = async () => {
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};
*/

/*
const useFetchAllBooksFromServer = (url: string): ReadonlyArray<any> => {
  const [result, setResult] = useState<any>([]);

  useEffect(() => {
    (async () => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setResult(data);
        })
        .catch((error) => {
          console.log("This error occurred: ", error);
        });
    })();
  }, [url]);

  return result;
};
*/

/*
enum Status {
  PENDING,
  SUCCESS,
  ERROR
}

const useFetchAllBooksFromServerExtended = (
  url: string
): ReadonlyArray<[Status, ReadonlyArray<any>]> => {
  const [status, setStatus] = useState<Status>(Status.PENDING);
  const [result, setResult] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        setStatus(Status.PENDING);
        const response = await fetch(url);
        const results = await response.json();
        setTimeout(() => {
          setStatus(Status.SUCCESS);
          setResult(results);
        }, 5000);
      } catch (error) {
        setStatus(Status.ERROR);
        setResult([]);
      }
    })();
  }, [url]);

  return [status, result];
};

const DisplayStatus = ({ status }: { status: Status }) => {
  if (status === Status.PENDING) {
    return <div>Loading</div>;
  }
  
  if (status === Status.ERROR) {
    return <div>An error occurred!!!</div>;
  }
  
  return null;
};

*/

export const useToggle = (initValue: boolean) => {
  const [displayModal, setDisplayModal] = useState<boolean>(initValue);

  useEffect(() => {});
  return [
    displayModal,
    () => {
      setDisplayModal((preValue) => !preValue);
    }
  ];
};

const ComponentUseEffect = () => {
  const [count, setCount] = useState<number>(0);
  const [books, setBooks] = useState([]);
  // Fetch data from server with a Custom-Hook
  //const books = useFetchAllBooksFromServer(URL);
  /*
  const [status, books] = useFetchAllBooksFromServerExtended(
    URL
  );
  */

  // Default usage of Hook
  useEffect(() => {
    console.log('Call side-effect');

    return () => {
      console.log(
        'Called if component was unmount or before calling this hook again'
      );
    };
  }, []);

  // Default usage of Hook to fetch data from server
  useEffect(() => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((allBooks: any) => {
        setBooks(allBooks);
      });
  }, []);

  // Usage of Hook to fetch data from server with async-function
  /*
  useEffect(() => {
    (async () => {
      const books = await fetchBooks();
      setBooks(books);
    })();
  }, []);
  */

  console.log('Render ComponentUseEffect');

  return (
    <div>
      <div>ComponentUseEffect with count {count}</div>

      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        Count
      </button>
      <h2>Result:</h2>
      {/*<DisplayStatus status={status} />*/}
      <code>{JSON.stringify(books)}</code>
    </div>
  );
};

export default ComponentUseEffect;
