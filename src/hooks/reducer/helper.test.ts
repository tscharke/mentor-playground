import { calculateAvailableProgresses } from './helper';
import { TaskProgress } from './interfaces';

describe('Calculate available progresses', () => {
	it('returns the default progresses with a faulty value', () => {
		expect(calculateAvailableProgresses('FAULTY_TASK_PROGRESS' as TaskProgress)).toEqual(['open']);
	});

	it('returns the available progresses in case of OPEN', () => {
		expect(calculateAvailableProgresses('open')).toEqual(['work']);
	});

	it('returns the available progresses in case of WORK', () => {
		expect(calculateAvailableProgresses('work')).toEqual(['open', 'done']);
	});

	it('returns the available progresses in case of DONE', () => {
		expect(calculateAvailableProgresses('done')).toEqual(['open']);
	});
});
