'use client'
import React from 'react';
import cx from 'classnames';
import { taskPropType } from '../propTypes';
import { useDraggable } from '@dnd-kit/core';

export default function TaskCard({ task }) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: task.id,
    });
    
    const cardClasses = cx('task-card', {
        'bg-red-200 border-3 border-red-400': task.status === 'Not Started',
        'bg-yellow-200 border-3 border-yellow-400': task.status === 'In Progress',
        'bg-green-200 border-3 border-green-400': task.status === 'Complete',
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div className={cardClasses} ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
    );
}

TaskCard.propTypes = {
    task: taskPropType.isRequired,
};