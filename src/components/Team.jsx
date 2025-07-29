import React from 'react';
import '../styles/Team.css';

const Team = () => {
    const teamMembers = [
        { id: 1, name: 'Alice Johnson', role: 'Project Manager', tasks: 5 },
        { id: 2, name: 'Bob Smith', role: 'Developer', tasks: 3 },
        { id: 3, name: 'Charlie Brown', role: 'Designer', tasks: 4 },
        { id: 4, name: 'Diana Prince', role: 'Tester', tasks: 2 },
    ];

    return (
        <div className="team-container">
            <h2>Team Members</h2>
            <table className="team-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Assigned Tasks</th>
                    </tr>
                </thead>
                <tbody>
                    {teamMembers.map(member => (
                        <tr key={member.id}>
                            <td>{member.name}</td>
                            <td>{member.role}</td>
                            <td>{member.tasks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Team;