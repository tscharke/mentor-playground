import { TaskProgress } from './interfaces';

export const calculateAvailableProgresses = (progress: TaskProgress): TaskProgress[] => {
	switch (progress) {
		case 'open':
			return ['work'];
		case 'work':
			return ['open', 'done'];
		default:
			return ['open'];
	}
};
