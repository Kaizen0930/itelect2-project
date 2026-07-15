import { formatDate, validateTask, mergeTaskUpdate } from './utils.js';

const testDate = new Date("2026-07-22");
const result1 = formatDate(testDate);
console.log(result1); 

const result2 = validateTask({ title: "Complete project", dueDate: testDate });
console.log(result2); 

const original = { title: "Old" };
const updated = { title: "New" };
const result3 = mergeTaskUpdate(original, updated);
console.log(result3); 

console.log('Server starting...');