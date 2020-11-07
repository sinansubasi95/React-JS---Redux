import React from 'react';
import { connect } from 'react-redux';
import { selectTask, deleteTask } from '../actions';

const Task = ({task, selectTask, deleteTask}) => {
    return (
        <div>
            <li className="list-item">
                <span>{task.title}</span>
                <div>
                    <button onClick={() => deleteTask(task.id)} className="btn-delete task-btn">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    <button onClick={() => selectTask(task)} className="btn-edit task-btn">
                        <i className="fas fa-pen"></i>
                    </button>
                </div>
            </li>
        </div>
    )
}

export default connect(
    null,
    { selectTask, deleteTask }
)(Task);