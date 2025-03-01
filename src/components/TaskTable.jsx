import TaskCard from './TaskCard';
import PropTypes from 'prop-types';

export default function TaskTable({ tasks }) {
    return (
        <section>
            <h2>Tasks</h2>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h3>Not Started</h3>
                    {tasks.filter(task => task.status === 'Not Started').map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
                <div>
                    <h3>In Progress</h3>
                    {tasks.filter(task => task.status === 'In Progress').map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
                <div>
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
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            status: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};