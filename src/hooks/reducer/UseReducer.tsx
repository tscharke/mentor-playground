import React, { useReducer } from 'react';
import './useReducerStyle.css';
import { SubTitle } from '../../Headline';
import { TaskId, Tasks } from './interfaces';
import { reducer } from './reducer';

const initialState: Tasks = [
  { id: 1, label: '1. Task', progress: 'open', availableProgresses: ['work'] },
  {
    id: 2,
    label: '2. Task',
    progress: 'work',
    availableProgresses: ['open', 'done']
  },
  { id: 3, label: '3. Task', progress: 'done', availableProgresses: ['open'] }
];

export default function () {
  const [listOfTasks, dispatch] = useReducer(reducer, initialState);

  const openTaskAction = (id: TaskId) => dispatch({ type: 'OPEN', id });

  return (
    <>
      <SubTitle>useReducer</SubTitle>
      <table className="list">
        <thead>
          <tr>
            <th>Lable</th>
            <th>Progress</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listOfTasks.map(({ id, label, progress, availableProgresses }) => (
            <tr key={id}>
              <td>{label}</td>
              <td>{progress}</td>
              <button
                onClick={() => openTaskAction(id)}
                disabled={!availableProgresses.includes('open')}
              >
                Open
              </button>
              <button
                onClick={() => dispatch({ type: 'IN_PROGRESS', id })}
                disabled={!availableProgresses.includes('work')}
              >
                Work
              </button>
              <button
                onClick={() => dispatch({ type: 'DONE', id })}
                disabled={!availableProgresses.includes('done')}
              >
                Close
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
