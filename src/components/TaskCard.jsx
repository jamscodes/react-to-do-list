export default function TaskCard({ task }) {
    return (
        <div className="task-card">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.status}</p>
        </div>
    );
}