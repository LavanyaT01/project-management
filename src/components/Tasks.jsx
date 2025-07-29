import React, { useState } from 'react';
import '../styles/Tasks.css';

const Tasks = ({ projectId }) => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', status: 'Pending', priority: 'High', assignedTo: 'User A' },
        { id: 2, title: 'Task 2', status: 'Completed', priority: 'Medium', assignedTo: 'User B' },
        
    ]);

    const handleStatusChange = (id, newStatus) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, status: newStatus } : task)));
    };

    const handlePriorityChange = (id, newPriority) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, priority: newPriority } : task)));
    };

    const handleAssignUser = (id, user) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, assignedTo: user } : task)));
    };

    return (
        <div className="tasks-container">
            <h2>Tasks for Project {projectId}</h2>
            <table className="tasks-table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Assigned To</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>
                                <select value={task.status} onChange={(e) => handleStatusChange(task.id, e.target.value)}>
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </td>
                            <td>
                                <select value={task.priority} onChange={(e) => handlePriorityChange(task.id, e.target.value)}>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </td>
                            <td>
                                <input type="text" value={task.assignedTo} onChange={(e) => handleAssignUser(task.id, e.target.value)} />
                            </td>
                            <td>
                                <button onClick={() => console.log(`Task ${task.id} marked as complete`)}>Complete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tasks;
