import { openDB } from 'idb';

const initdb = async () =>
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

//PUTdb
export const putDb = async (content) => {
  const jateDB = await openDB('jate',1);
  const tx = jateDB.transaction('jate','readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({data: content});
  const result = await request;
  console.log('Data saved to database',result);
};

//Getdb
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate','readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
   result
   ? console.log('Found content')
   : console.log('Content not found.');
  return result?.value;
};

initdb();
