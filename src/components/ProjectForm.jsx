import React, { useState } from 'react';
import './ProjectForm.css';

const ProjectForm = ({ onSubmit, initialData }) => {
    const [title, setTitle] = useState(initialData ? initialData.title : '');
    const [deadline, setDeadline] = useState(initialData ? initialData.deadline : '');
    const [description, setDescription] = useState(initialData ? initialData.description : '');
    const [status, setStatus] = useState(initialData ? initialData.status : 'Pending');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, deadline, description, status });
    };

    return (
        <form className="project-form" onSubmit={handleSubmit}>
            <h2>{initialData ? 'Edit Project' : 'Add Project'}</h2>
            <div className="form-group">
                <label htmlFor="title">Project Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="deadline">Deadline</label>
                <input
                    type="date"
                    id="deadline"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
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
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button type="submit">{initialData ? 'Update Project' : 'Add Project'}</button>
        </form>
    );
};

export default ProjectForm;