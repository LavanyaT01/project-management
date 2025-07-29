import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-title">Project Management</div>
        <ul className="navbar-links">
            <li>
                <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/projects"
                    activeClassName="active"
                >
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/tasks"
                    activeClassName="active"
                >
                    Tasks
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/team"
                    activeClassName="active"
                >
                    Team
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;
