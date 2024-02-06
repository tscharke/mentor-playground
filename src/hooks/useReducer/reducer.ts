/*
	This reducer contains no sanity-check if the given action may/should be executed or not.
 */
import { Action, Task } from './interfaces';

export const reducer = (state: Task[], { type, payload: { id } }: Action): Task[] => {
	switch (type) {
		case 'IN_PROGRESS':
			// Here I choose the approach to create a new array first.
			// Into it, I copy all the objects (Tasks) of the current array.
			const newState = [...state];
			newState.map((task) => {
				// If it's the task-object to be modifying
				if (task.id === id && task.progress !== 'in_progress') {
					// Adjusted progress
					task.progress = 'in_progress';
					return task;
				}
				return task;
			});
			// Return the new array within the modified task-objects
			return newState;
		case 'DONE':
			// Here I use the `reduce()`-function
			return state.reduce<Task[]>(
				(result, task) =>
					// If it's the task-object to be modifying
					task.id === id && task.progress !== 'done'
						? // Create and add a new task-object
							result.concat({
								...task,
								// Adjusted progress
								progress: 'done',
							})
						: // Add the unmodified task-object
							result.concat(task),
				[], // Initiated with a new array
			);
		case 'OPEN':
			// Same approach as in the case of "DONE
			return state.reduce<Task[]>(
				(result, task) =>
					task.id === id && task.progress !== 'open'
						? result.concat({
								...task,
								progress: 'open',
							})
						: result.concat(task),
				[],
			);
		// Returns the same given state if no suitable action is found
		default:
			return state;
	}
};
