import { Database } from "sqlite3";
import { runSql } from "./runSql";


export const unlockDatabase = (db: Database, key: string) => {
  return runSql(db, "PRAGMA key = `${key}`");
};
