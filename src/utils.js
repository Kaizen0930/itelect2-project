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