import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import TasksPage from './pages/TasksPage';
import TeamPage from './pages/TeamPage';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="main-content">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/projects" component={ProjectsPage} />
                        <Route path="/tasks" component={TasksPage} />
                        <Route path="/team" component={TeamPage} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
