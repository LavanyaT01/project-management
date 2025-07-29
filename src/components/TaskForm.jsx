import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onSubmit, initialData }) => {
    const [taskName, setTaskName] = useState(initialData ? initialData.name : '');
    const [description, setDescription] = useState(initialData ? initialData.description : '');
    const [dueDate, setDueDate] = useState(initialData ? initialData.dueDate : '');
    const [priority, setPriority] = useState(initialData ? initialData.priority : 'normal');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ taskName, description, dueDate, priority });
        resetForm();
    };

    const resetForm = () => {
        setTaskName('');
        setDescription('');
        setDueDate('');
        setPriority('normal');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>{initialData ? 'Edit Task' : 'Add Task'}</h2>
            <div className="form-group">
                <label htmlFor="taskName">Task Name</label>
                <input
                    type="text"
                    id="taskName"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="dueDate">Due Date</label>
                <input
                    type="date"
                    id="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                </select>
            </div>
            <button type="submit">{initialData ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;