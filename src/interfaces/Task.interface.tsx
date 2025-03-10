export type TaskStatus = 'Not Started' | 'In Progress' | 'Complete' | '';

export default interface Task {
    id: string;
    status: TaskStatus;
    title: string;
    description: string;
}