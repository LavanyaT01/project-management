import React from 'react';
import '../styles/DashboardHome.css';

const DashboardHome = () => {
    const totalProjects = 25;
    const completedTasks = 15;
    const pendingTasks = 10;
    const activeTeamMembers = 8;
    const notifications = 5;

    const recentActivity = [
        { id: 1, text: 'Person 1 completed "Design Homepage"', time: '2 hours ago' },
        { id: 2, text: 'Person 2 created new project "Mobile App"', time: '5 hours ago' },
        { id: 3, text: 'Person 3 updated task "API Integration"', time: '1 day ago' },
    ];

    return (
        <div className="dashboard-home container">
            <div className="welcome-banner">
                Welcome back! Here’s your project overview.
            </div>
            <h1 className="dashboard-title">Dashboard</h1>

            
            <div className="widgets-grid">
                <div className="widget widget-blue">
                    <div className="widget-icon">📁</div>
                    <div>
                        <h2>Total Projects</h2>
                        <p>{totalProjects}</p>
                    </div>
                </div>
                <div className="widget widget-green">
                    <div className="widget-icon">✅</div>
                    <div>
                        <h2>Completed Tasks</h2>
                        <p>{completedTasks}</p>
                    </div>
                </div>
                <div className="widget widget-yellow">
                    <div className="widget-icon">⏳</div>
                    <div>
                        <h2>Pending Tasks</h2>
                        <p>{pendingTasks}</p>
                    </div>
                </div>
                <div className="widget widget-purple">
                    <div className="widget-icon">👥</div>
                    <div>
                        <h2>Active Team Members</h2>
                        <p>{activeTeamMembers}</p>
                    </div>
                </div>
                <div className="widget widget-red">
                    <div className="widget-icon">🔔</div>
                    <div>
                        <h2>Notifications</h2>
                        <p>{notifications}</p>
                    </div>
                </div>
            </div>

            <div className="quick-actions card">
                <h2>Quick Actions</h2>
                <div className="button-group">
                    <button className="button">+ New Project</button>
                    <button className="button">+ New Task</button>
                    <button className="button">Invite Team Member</button>
                </div>
            </div>

            
            <div className="recent-activity card">
                <h2>Recent Activity</h2>
                <ul>
                    {recentActivity.map(activity => (
                        <li key={activity.id} style={{ marginBottom: 8 }}>
                            <span className="activity-text">{activity.text}</span>
                            <span className="activity-time">{activity.time}</span>
                        </li>
                    ))}
                </ul>
            </div>

            
            <div className="summary-chart card">
                <h2>Project Progress Overview</h2>
                <div className="chart-placeholder">
                    [Chart Placeholder]
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
