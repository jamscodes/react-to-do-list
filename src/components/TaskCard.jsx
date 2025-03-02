import React from 'react';
import cx from 'classnames';
import taskPropType from '../prop-types/taskPropType';

export default function TaskCard({ task }) {
    const cardClasses = cx('task-card', {
        'bg-red-200 border-3 border-red-400': task.status === 'Not Started',
        'bg-yellow-200 border-3 border-yellow-400': task.status === 'In Progress',
        'bg-green-200 border-3 border-green-400': task.status === 'Complete',
    });
    return (
        <div className={cardClasses}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
    );
}

TaskCard.propTypes = {
    task: taskPropType.isRequired,
};