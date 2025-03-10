'use client'
import TaskCard from './TaskCard';
import { useDroppable } from '@dnd-kit/core';
import cx from 'classnames';
import Task from '../interfaces/Task.interface';

interface TaskTableProps {
    tasks: Task[];
}

export default function TaskTable({ tasks }: TaskTableProps) {
    const droppableConfigs = {
        notStarted: useDroppable({
            id: 'tasks-not-started',
            data: { status: 'Not Started' },
        }),
        inProgress: useDroppable({
            id: 'tasks-in-progress',
            data: { status: 'In Progress' },
        }),
        complete: useDroppable({
            id: 'tasks-complete',
            data: { status: 'Complete' },
        }),
    };

    const classConfigs = {
        notStarted: cx({
            'border border-red-700 bg-red-700/50': droppableConfigs.notStarted.isOver,
        }),
        inProgress: cx({
            'border border-yellow-700 bg-yellow-700/50': droppableConfigs.inProgress.isOver,
        }),
        complete: cx({
            'border border-green-700 bg-green-700/50': droppableConfigs.complete.isOver,
        }),
    };

    return (
        <section>
            <h2>Tasks</h2>
            <div className="grid grid-cols-3 gap-4">
                <div ref={droppableConfigs.notStarted.setNodeRef} className={classConfigs.notStarted}>
                    <h3>Not Started</h3>
                    {tasks.filter(task => task.status === 'Not Started').map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
                <div ref={droppableConfigs.inProgress.setNodeRef} className={classConfigs.inProgress}>
                    <h3>In Progress</h3>
                    {tasks.filter(task => task.status === 'In Progress').map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
                <div ref={droppableConfigs.complete.setNodeRef} className={classConfigs.complete}>
                    <h3>Complete</h3>
                    {tasks.filter(task => task.status === 'Complete').map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            </div>
        </section>
    );
}