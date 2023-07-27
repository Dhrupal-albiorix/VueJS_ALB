// db.js
const DB_NAME = 'taskDB';
const DB_VERSION = 1;
const TASK_STORE_NAME = 'tasks';

export async function openDB() {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => {
            reject('Error opening database');
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(TASK_STORE_NAME)) {
                db.createObjectStore(TASK_STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
    });
}


