import { Database, RunResult } from "sqlite3";


export const runSql = (db: Database, sql: string) => {
  return new Promise((resolve, reject) => {
    db.run(sql, (result: RunResult, error: unknown) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
};
