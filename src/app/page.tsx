import TaskTable from "../components/TaskTable";

export default function Home() {
  return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">React To-Do List</h1>
        <p className="text-lg text-gray-600">
          Created by Jonathan Moore
        </p>
        <TaskTable tasks={[{id: 1, status: "Not Started", title: "Task One", description: "Description for Task One"}]} />
      </div>
  );
}
