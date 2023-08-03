import { openDB } from 'idb';

const initdb = async () => {
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
}

// puts the editor value to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const result = await store.put({ content: content });
  console.log('Data saved to the database', result);
  deleteDb(result);
}

// gets the editor value from the database
export const getDb = async () => {
  console.log('GET from the DB');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const result = await store.getAll();
  return result.length > 0 ? result[0].content : null;
}

// deletes the editor value from the database and returns the id of the deleted item
const deleteDb = async (id) => {
  console.log('Delete from the DB', id);
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.delete(id - 1);
}

initdb();