import { combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    tasks: [
        {id: 1, title: 'Read the book'},
        {id: 2, title: 'Wash the car'},
        {id: 3, title: 'Write some code'}
    ],
    task: {id: -1, title: ''}
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_TASK':
            return {
                tasks: state.tasks.filter(
                    task => task.id !== action.payload
                ), 
                task: state.task
            };
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, { id: uuidv4(), title: action.payload }], 
                task: state.task
            };
        case 'SELECT_TASK':
            return {tasks: state.tasks, task: action.payload}
        case 'UPDATE_TASK':
            return {
                tasks: state.tasks.map(
                    task => (task.id === action.payload.id) ? {id: action.payload.id, title: action.payload.title} : task
                ), 
                task: {id: -1, title: ''}
            };
        case 'CLEAR_TASKLIST':
            return {
                tasks: [],
                task: state.task
            }
        default:
            return state;
    };
};

export default combineReducers({
    tasks: taskReducer
});
  