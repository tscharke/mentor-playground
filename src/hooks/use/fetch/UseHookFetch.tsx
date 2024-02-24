// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { use } from 'react';
import { Task } from '../interfaces';

type UseHookFetchProperties = {
	waitTime: number;
};

type PromiseToFetchDataProperties = UseHookFetchProperties & {
	data: Task[];
};

const VALUES_RETURNED_FOR_LOADING: Task[] = [
	{ id: 1, label: '1. Task', progress: 'open' },
	{ id: 2, label: '2. Task', progress: 'in_progress' },
	{ id: 3, label: '3. Task', progress: 'done' },
];

/**
 * Creates a promise that resolves after a specified wait time and returns the provided data.
 *
 * @param properties - The properties for configuring the promise.
 * @returns A promise that resolves after the specified wait time and returns the provided data.
 */
const promiseToFetchData = ({ waitTime, data }: PromiseToFetchDataProperties): Promise<Task[]> => {
	// Create a new Promise that resolves after the waitTime
	const timeoutPromise = new Promise((resolve) => setTimeout(resolve, waitTime));

	// Return a function that awaits the timeoutPromise and then returns the data
	return timeoutPromise.then(() => {
		// The promise resolved and we want to return the data
		return data;
	});
};

export const UseHookFetch = (properties: UseHookFetchProperties) => {
	// Using the Hook with a Promise
	const fetchedData = use(promiseToFetchData({ ...properties, data: VALUES_RETURNED_FOR_LOADING }));

	return <code>{JSON.stringify(fetchedData, null, 2)}</code>;
};
