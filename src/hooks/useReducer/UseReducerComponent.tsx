import React, { useReducer } from 'react';
import { SubTitle } from '../../Headline';
import { ProgressOfTask, Task } from './interfaces';
import { reducer } from './reducer';
import './useReducerStyle.css';

/*
	Create a list with three tasks within different progresses.
	We use this list as the initial-state of the `useReducer`-Hook.
*/
const initialListOfTasks: Task[] = [
	{ id: 1, label: '1. Task', progress: 'open' },
	{ id: 2, label: '2. Task', progress: 'in_progress' },
	{ id: 3, label: '3. Task', progress: 'done' },
];

/*
	A function that, based on the current progress of a task, returns the further possible switching-progress
	according to the described logic.

	Used to activate or deactivate the buttons to change the progress of a task.
*/
const availableSwitchingProgress = (progressOfTask: ProgressOfTask): ProgressOfTask[] => {
	switch (progressOfTask) {
		case 'open':
			return ['in_progress'];
		case 'in_progress':
			return ['open', 'done'];
		case 'done':
			return ['open'];
		default:
			return ['open'];
	}
};

export const UseReducerComponent = () => {
	const [listOfTasks, dispatch] = useReducer(reducer, initialListOfTasks);

	// Dispatch an Action within a separate function
	const changeProgressOfTaskToOpen = (id: number) => dispatch({ type: 'OPEN', payload: { id } });

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
					{listOfTasks.map(({ id, label, progress }) => {
						const switchingProgresses = availableSwitchingProgress(progress);

						return (
							<tr key={id}>
								<td>{label}</td>
								<td>{progress}</td>
								<td>
									<button
										onClick={() => {
											// Invoke the separate function to send/dispatch an Action
											changeProgressOfTaskToOpen(id);
										}}
										disabled={!switchingProgresses.includes('open')}
									>
										Open
									</button>
									<button
										onClick={() => {
											// Send/Dispatch the Action direct/inline
											dispatch({ type: 'IN_PROGRESS', payload: { id } });
										}}
										disabled={!switchingProgresses.includes('in_progress')}
									>
										In progress
									</button>
									<button
										onClick={() => dispatch({ type: 'DONE', payload: { id } })}
										disabled={!switchingProgresses.includes('done')}
									>
										Close
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};
