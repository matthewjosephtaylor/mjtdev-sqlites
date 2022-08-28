import { Database } from "sqlite3";


export const openDatabase = (filename: string): Promise<Database> => {
  return new Promise((resolve, reject) => {
    const db = new Database(filename, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(db);
    });
  });
};
