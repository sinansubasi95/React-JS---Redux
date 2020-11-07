import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header';
import '../App.css';

function App() {
    return (
        <div className="container">
            <div className="app-wrapper">
                <Header />
                <div className="main">
                    <TaskForm />
                    <TaskList />
                </div>
            </div>
        </div>
    )
}

export default App;