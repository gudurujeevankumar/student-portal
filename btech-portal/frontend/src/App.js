import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/student-dashboard" component={StudentDashboard} />
                <Route path="/admin-dashboard" component={AdminDashboard} />
                <Route path="/" exact component={LoginPage} />
            </Switch>
        </Router>
    );
}

export default App;
