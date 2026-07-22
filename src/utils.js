export const formatDate = (date) => { 
    const formattedDate = date.toLocaleDateString(); 
    return `Due: ${formattedDate}`; };

export const validateTask = ({ title, dueDate} = {}) => {
    if (!title || !dueDate) {
        return false;
    }
    return true;
};

export const mergeTaskUpdate = (original, ...updates) => {
    return Object.assign({}, original, ...updates);
};

export class TaskValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "TaskValidationError";
    }
}

export const createTask = (taskData) => {
    const isValid = validateTask(taskData);
    if (!isValid) {
        throw new TaskValidationError("Invalid task data");
    }
    return { id: Date.now(), completed: false, ...taskData };
};