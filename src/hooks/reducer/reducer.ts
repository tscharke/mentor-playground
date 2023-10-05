import { Tasks, Action } from './interfaces';

export const reducer = (state: Tasks, { type, id }: Action): Tasks => {
  switch (type) {
    case 'OPEN':
      return state.reduce<Tasks>(
        (result, task) =>
          task.id === id
            ? result.concat({
                ...task,
                progress: 'open',
                availableProgresses: ['work']
              })
            : result.concat(task),
        []
      );
    case 'IN_PROGRESS':
      const changedState: Tasks = state.map((task) =>
        task.id === id
          ? {
              ...task,
              progress: 'work',
              availableProgresses: ['open', 'done']
            }
          : task
      );

      // Returns an new array with the modified state
      return [...changedState];
    case 'DONE':
      return state.reduce<Tasks>(
        (result, task) =>
          task.id === id
            ? result.concat({
                ...task,
                progress: 'done',
                availableProgresses: ['open']
              })
            : result.concat(task),
        []
      );
    default:
      return state;
  }
};
