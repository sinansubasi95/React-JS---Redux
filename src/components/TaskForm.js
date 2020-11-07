import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTask, addTask, clearTaskList } from '../actions';

const TaskForm = ({task, updateTask, addTask, clearTaskList}) => {
    const [title, setTitle] = useState('');
    
    const handleChange = e => {
        setTitle(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(task.id === -1) {
            addTask(title);
        } else {
            updateTask({id: task.id, title: title});
        }
    };

    const handleClick = e => {
        e.preventDefault();
        clearTaskList();
    }

    // The React hook useEffect helps in adding componentDidUpdate and componentDidMount combined lifecycle in React’s functional component. It rerenders component once the piece of state is updated
    useEffect(() => {
        if(task.title !== null){
            setTitle(task.title);
        } else {
            setTitle("");
        }
    }, [task.title]);
    // Run this hook when the value of task.title is updated.

    return (
        <form onSubmit={handleSubmit} className="form">
            <input value={title} onChange={handleChange} type="text" className="task-input" placeholder="Add Task..." required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    { task.id === -1 ? "Add Task" : "Edit Task" }
                </button>
                <button onClick={handleClick} className="btn clear-btn">Clear</button>
            </div>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {task: state.tasks.task};
};


export default connect(mapStateToProps, {updateTask, addTask, clearTaskList})(TaskForm);
