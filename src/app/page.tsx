'use client'
import { DndContext } from "@dnd-kit/core";
import TaskTable from "../components/TaskTable";
import { useState } from "react";
import { DragEndEvent } from "@dnd-kit/core";

export default function Home() {
  const initialTasks = [
    {id: 1, status: "Not Started", title: "Task One", description: "Description for Task One"},
    {id: 2, status: "In Progress", title: "Task Two", description: "Description for Task Two"},
    {id: 3, status: "Not Started", title: "Task Three", description: "Description for Task Three"},
    {id: 4, status: "Not Started", title: "Task Four", description: "Description for Task Four"},
    {id: 5, status: "Not Started", title: "Task Five", description: "Description for Task Five"},
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const [, setIsOver] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    console.log(tasks)
    const taskId = event.active.id;
    const updatedTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {...task, status: event.over?.data.current?.status ?? task.status};
      }
      return task;
    });
    setTasks(updatedTasks);
    setIsOver(true);
  }
  
  return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">React To-Do List</h1>
        <p className="text-lg text-gray-600">
          Created by Jonathan Moore
        </p>
        <DndContext onDragEnd={handleDragEnd}>
          <TaskTable tasks={tasks} />
        </DndContext>
      </div>
  );
}