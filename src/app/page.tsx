'use client'
import { DndContext } from "@dnd-kit/core";
import TaskTable from "../components/TaskTable";
import TaskForm from "@/components/TaskForm";
import { useState } from "react";
import { DragEndEvent } from "@dnd-kit/core";
import Task from "@/interfaces/Task.interface";

export default function Home() {
  const initialTasks: Task[] = [
    {id: '1', status: "Not Started", title: "Task One", description: "Description for Task One"},
    {id: '2', status: "In Progress", title: "Task Two", description: "Description for Task Two"},
    {id: '3', status: "Not Started", title: "Task Three", description: "Description for Task Three"},
    {id: '4', status: "Not Started", title: "Task Four", description: "Description for Task Four"},
    {id: '5', status: "Not Started", title: "Task Five", description: "Description for Task Five"},
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const [, setIsOver] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
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

  const updateTasks = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  }

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">React To-Do List</h1>
        <p className="text-lg text-gray-600">
          Created by Jonathan Moore
        </p>
        <TaskForm updateTasks={updateTasks} />
        <DndContext onDragEnd={handleDragEnd}>
          <TaskTable tasks={tasks} />
        </DndContext>
      </div>
  );
}