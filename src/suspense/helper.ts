const sleep = (delay: number) =>
  new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });

export const wrapPromise = (promise: Promise<any>, delay: number) => {
  let status = 'pending';
  let result: any;

  const suspender = Promise.all([sleep(delay), promise])
    .then((res) => {
      return res[1].json();
    })
    .then((data) => {
      status = 'success';
      result = data;
    })
    .catch((error) => {
      status = 'error';
      result = error;
    });

  return {
    read: () => {
      switch (status) {
        case 'error': {
          throw result;
        }
        case 'success': {
          return result;
        }
        default: {
          throw suspender;
        }
      }
    }
  };
};
