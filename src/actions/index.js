export const addTask = title => {
    return {
        type: 'ADD_TASK',
        payload: title
    };
};

export const deleteTask = id => {
    return {
        type: 'DELETE_TASK',
        payload: id
    };
};

export const selectTask = task => {
    return {
        type: 'SELECT_TASK',
        payload: task
    };
};

export const updateTask = task => {
    return {
        type: 'UPDATE_TASK',
        payload: task
    };
};

export const clearTaskList = () => {
    return {
        type: 'CLEAR_TASKLIST',
    };
};