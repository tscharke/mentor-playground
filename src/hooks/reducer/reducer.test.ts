import { reducer } from './reducer';
import { Tasks, Action } from './interfaces';

describe('useReducer', () => {
  let initialState: Tasks;

  it('returns the initial state if no responsible action is available', () => {
    const action = ({ type: 'UNKNOWN_ACTION' } as unknown) as Action;

    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  beforeEach(() => {
    initialState = [
      {
        id: 1,
        label: '1. Task',
        progress: 'open',
        availableProgresses: ['work']
      },
      {
        id: 2,
        label: '2. Task',
        progress: 'work',
        availableProgresses: ['open', 'done']
      },
      {
        id: 3,
        label: '3. Task',
        progress: 'done',
        availableProgresses: ['open']
      }
    ];
  });
});
