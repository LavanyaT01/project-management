import React from 'react';
import '../styles/Projects.css';

const statusClass = {
    'In Progress': 'status-active',
    'Completed': 'status-completed',
    'Pending': 'status-pending',
};

const Projects = () => {
    const projects = [
        { id: 1, title: 'Project Alpha', deadline: '2023-12-01', status: 'In Progress', progress: 60 },
        { id: 2, title: 'Project Beta', deadline: '2023-11-15', status: 'Completed', progress: 100 },
        { id: 3, title: 'Project Gamma', deadline: '2023-10-30', status: 'Pending', progress: 20 },
    ];

    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <table className="projects-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Progress</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map(project => (
                        <tr key={project.id}>
                            <td>{project.title}</td>
                            <td>{project.deadline}</td>
                            <td>
                                <span className={`project-status ${statusClass[project.status]}`}>
                                    {project.status}
                                </span>
                            </td>
                            <td>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${project.progress}%` }}></div>
                                </div>
                            </td>
                            <td>
                                <button className="view-details">View Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Projects;
