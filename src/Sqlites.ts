import { openDatabase } from "./openDatabase";
import { runSql } from "./runSql";
import { unlockDatabase } from "./unlockDatabase";

export const Sqlites = {
  openDatabase,
  unlockDatabase,
  runSql,
};
