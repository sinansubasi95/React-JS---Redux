import React from 'react';
import { connect } from 'react-redux';
import Task from './Task'

const TaskList = ({tasks}) => {
    return (
        <div>
            <ul className="list">
                {tasks.length ? tasks.map((task) => {
                    return (
                        <Task task={task} key={task.id} />
                    );
                }) : (
                    <div className="no-tasks">No Tasks</div>
                )}
            </ul>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {tasks: state.tasks.tasks};
};

export default connect(mapStateToProps)(TaskList);