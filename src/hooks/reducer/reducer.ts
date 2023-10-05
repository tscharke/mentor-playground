import { calculateAvailableProgresses } from './helper';
import { Action, Tasks } from './interfaces';

export const reducer = (state: Tasks, { type, id }: Action): Tasks => {
	switch (type) {
		case 'OPEN':
			return state.reduce<Tasks>(
				(result, task) =>
					task.id === id
						? result.concat({
								...task,
								progress: 'open',
								availableProgresses: calculateAvailableProgresses('open'),
						  })
						: result.concat(task),
				[],
			);
		case 'IN_PROGRESS':
			const changedState: Tasks = state.map((task) =>
				task.id === id
					? {
							...task,
							progress: 'work',
							availableProgresses: calculateAvailableProgresses('work'),
					  }
					: task,
			);

			// Returns a new array with the modified state
			return [...changedState];
		case 'DONE':
			return state.reduce<Tasks>(
				(result, task) =>
					task.id === id
						? result.concat({
								...task,
								progress: 'done',
								availableProgresses: calculateAvailableProgresses('done'),
						  })
						: result.concat(task),
				[],
			);
		default:
			return state;
	}
};
