const sleep = (delay: number) =>
	new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, delay);
	});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const wrapPromise = (promise: Promise<any>, delay: number) => {
	let status = 'pending';
	let result: unknown;

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
		},
	};
};
