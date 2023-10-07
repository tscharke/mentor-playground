import { Action, Task } from './interfaces';
import { reducer } from './reducer';

describe('useReducer - Test of reducer', () => {
	it('returns the same (initial) state if no responsible action is available', () => {
		const action = { type: 'UNKNOWN_ACTION', payload: { id: 4711 } } as unknown as Action;
		const state: Task[] = [{ id: 1, label: '1. Task', progress: 'open' }];

		const newState = reducer(state, action);
		// I use `toStrictEqual()` to make sure that the returned value of the `reducer`-function is the same array
		// and contains the same task-object as given as first parameter to this function.
		expect(newState).toStrictEqual(state);
	});

	it('returns the same state if no progress-changes are necessary', () => {
		const action: Action = { type: 'OPEN', payload: { id: 1 } };
		const state: Task[] = [{ id: 1, label: '1. Task', progress: 'open' }];

		const newState = reducer(state, action);
		// I use `toStrictEqual()` to make sure that the returned value of the `reducer`-function is the same array
		// and contains the same task-object as given as first parameter to this function.
		expect(newState).toStrictEqual(state);
	});

	it('returns a new list within changed progress to "in_progress"', () => {
		const action: Action = { type: 'IN_PROGRESS', payload: { id: 1 } };
		const state: Task[] = [{ id: 1, label: '1. Task', progress: 'open' }];

		const newState = reducer(state, action);
		// I use `toEqual()` to make sure that the returned value of the `reducer`-function is a new array
		// contains an object (type of Task) with new progress.
		expect(newState).toEqual([{ id: 1, label: '1. Task', progress: 'in_progress' }]);
	});

	it('returns a new list within changed progress to "done"', () => {
		const action: Action = { type: 'DONE', payload: { id: 1 } };
		const state: Task[] = [{ id: 1, label: '1. Task', progress: 'in_progress' }];

		const newState = reducer(state, action);
		expect(newState).toEqual([{ id: 1, label: '1. Task', progress: 'done' }]);
	});

	it('returns a new list within changed progress to "open"', () => {
		const action: Action = { type: 'OPEN', payload: { id: 1 } };
		const state: Task[] = [{ id: 1, label: '1. Task', progress: 'done' }];

		const newState = reducer(state, action);
		expect(newState).toEqual([{ id: 1, label: '1. Task', progress: 'open' }]);
	});

	it('returns a new list within changed progress to "open"', () => {
		const action: Action = { type: 'OPEN', payload: { id: 1 } };
		const state: Task[] = [{ id: 1, label: '1. Task', progress: 'in_progress' }];

		const newState = reducer(state, action);
		expect(newState).toEqual([{ id: 1, label: '1. Task', progress: 'open' }]);
	});
});
