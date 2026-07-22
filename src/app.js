import { formatDate, validateTask, mergeTaskUpdate, createTask, TaskValidationError } from './utils.js';
import { fetchSampleUsers } from './api.js';

const testDate = new Date("2026-07-22");
const result1 = formatDate(testDate);
console.log(result1); 

const result2 = validateTask({ title: "Complete project", dueDate: testDate });
console.log(result2); 

const original = { title: "Old" };
const updated = { title: "New" };
const result3 = mergeTaskUpdate(original, updated);
console.log(result3); 

const main = async () => {
    const users = await fetchSampleUsers();
    console.log(users);

    try {
        const newTask = createTask({ title: "Complete project", dueDate: testDate });
        console.log(newTask);
    } catch (error) {
        if (error instanceof TaskValidationError) {
            console.log(error.name, error.message);
        } else {
            console.log(error);
        }
    }

    try {
        const badTask = createTask({ title: "Missing due date" });
        console.log(badTask);
    } catch (error) {
        if (error instanceof TaskValidationError) {
            console.log(error.name, error.message);
        } else {
            console.log(error);
        }
    }
};

main();

console.log('Server starting...');