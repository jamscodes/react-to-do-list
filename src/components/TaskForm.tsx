'use client'
import { useState } from 'react';
import Button from './Button';
import Task, {TaskStatus} from '../interfaces/Task.interface';

interface TaskFormProps {
    updateTasks: (newTask: Task) => void;
}

export default function TaskForm({updateTasks}: TaskFormProps) {
    const [state, setState] = useState({
        open: false,
        formData: {
            title: '',
            description: '',
            status: '' as TaskStatus,
        }
    });

    const toggleDialog = () => {
        setState(prevState => ({
            ...prevState,
            open: !prevState.open,
        }));
    }

    const formUpdateHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setState(prevState => ({
            ...prevState,
            formData: {
                ...prevState.formData,
                [event.target.name]: event.target.value,
            }
        }));
    }

    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTask = {
            id: Math.random().toString(36).substring(2, 9),
            ...state.formData,
        };
        updateTasks(newTask);
        setState({
            open: false,
            formData: {
                title: '',
                description: '',
                status: '',
            }
        });
    }
    
    return (
        <>
            <Button text="Create Task" handler={toggleDialog} />
            <dialog {...(state.open ? { open: true } : {})}>
                <h2>Create Task</h2>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={state.formData.title} onChange={formUpdateHandler} />
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={state.formData.description} onChange={formUpdateHandler} />
                    <label htmlFor="status">Status</label>
                    <select id="status" name="status" value={state.formData.status} onChange={formUpdateHandler}>
                        <option selected disabled>Select a status</option>
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Complete">Complete</option>
                    </select>
                    <button type="submit">Create Task</button>
                </form>
            </dialog>
        </>
    )
}