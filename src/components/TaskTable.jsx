'use client'
import TaskCard from './TaskCard';
import PropTypes from 'prop-types';
import { taskPropType } from '../propTypes';
import { useDroppable } from '@dnd-kit/core';
import cx from 'classnames';

export default function TaskTable({ tasks }) {
    const {isOverNotStarted, setNodeRef: setNotStartedRef} = useDroppable({
        id: 'tasks-not-started',
        data: {status: 'Not Started'},
    });

    const {isOverInProgress, setNodeRef: setInProgressRef} = useDroppable({
        id: 'tasks-in-progress',
        data: {status: 'In Progress'},
    });

    const {isOverComplete, setNodeRef: setCompleteRef} = useDroppable({
        id: 'tasks-complete',
        data: {status: 'Complete'},
    });

    const overNotStartedClasses = cx({
        'border border-red-700 bg-red-700/50': isOverNotStarted,
    })

    const overInProgressClasses = cx({
        'border border-yellow-700 bg-yellow-700/50': isOverInProgress,
    })

    const overCompleteClasses = cx({
        'border border-green-700 bg-green-700/50': isOverComplete,
    })

    return (
        <section>
            <h2>Tasks</h2>
            <div className="grid grid-cols-3 gap-4">
                <div ref={setNotStartedRef} className={overNotStartedClasses}>
                    <h3>Not Started</h3>
                    {tasks.filter(task => task.status === 'Not Started').map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
                <div ref={setInProgressRef} className={overInProgressClasses}>
                    <h3>In Progress</h3>
                    {tasks.filter(task => task.status === 'In Progress').map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
                <div ref={setCompleteRef} className={overCompleteClasses}>
                    <h3>Complete</h3>
                    {tasks.filter(task => task.status === 'Complete').map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            </div>
        </section>
    );
}

TaskTable.propTypes = {
    tasks: PropTypes.arrayOf(taskPropType).isRequired,
};