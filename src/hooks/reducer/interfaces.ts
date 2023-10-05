// Type-Definitions
type ActionType = 'OPEN' | 'IN_PROGRESS' | 'DONE';
export type Action = { type: ActionType; id: number };

type TaskProgress = 'open' | 'work' | 'done';
export type TaskId = number;
export type Task = {
  id: TaskId;
  label: string;
  progress: TaskProgress;
  availableProgresses: TaskProgress[];
};
export type Tasks = Task[];
