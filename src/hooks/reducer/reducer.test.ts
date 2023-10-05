import { Action, Tasks } from './interfaces';
import { reducer } from './reducer';

describe('useReducer', () => {
	it('returns the initial state if no responsible action is available', () => {
		const state: Tasks = [
			{
				id: 1,
				label: '1. Task',
				progress: 'open',
				availableProgresses: ['work'],
			},
		];
		const action = { type: 'UNKNOWN_ACTION' } as unknown as Action;
		expect(reducer(state, action)).toEqual(state);
	});

	it('dispatches OPEN and returns a state without changing the progress', () => {
		const state: Tasks = [
			{
				id: 1,
				label: '1. Task',
				progress: 'open',
				availableProgresses: ['work'],
			},
		];
		expect(reducer(state, { type: 'OPEN', id: 1 })).toEqual(state);
	});

	it('dispatches OPEN and returns a state with progress "open" and "done"', () => {
		const state: Tasks = [
			{
				id: 1,
				label: '1. Task',
				progress: 'work',
				availableProgresses: ['open', 'done'],
			},
		];
		expect(reducer(state, { type: 'OPEN', id: 1 })).toEqual([
			{
				id: 1,
				label: '1. Task',
				progress: 'open',
				availableProgresses: ['work'],
			},
		]);
	});

	it('dispatches IN_PROGRESS and returns a state with progress "open" and "done"', () => {
		const state: Tasks = [
			{
				id: 1,
				label: '1. Task',
				progress: 'open',
				availableProgresses: ['open', 'done'],
			},
		];
		expect(reducer(state, { type: 'IN_PROGRESS', id: 1 })).toEqual([
			{
				id: 1,
				label: '1. Task',
				progress: 'work',
				availableProgresses: ['open', 'done'],
			},
		]);
	});

	it('dispatches DONE and returns a state with progress "open"', () => {
		const state: Tasks = [
			{
				id: 1,
				label: '1. Task',
				progress: 'work',
				availableProgresses: ['open', 'done'],
			},
		];
		expect(reducer(state, { type: 'DONE', id: 1 })).toEqual([
			{
				id: 1,
				label: '1. Task',
				progress: 'done',
				availableProgresses: ['open'],
			},
		]);
	});
});
