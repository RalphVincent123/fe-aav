import db from "./db.mjs";

type User = {
  id: number;
  email: string;
  password: string;
};
export function createUser(email: string, password: string) {
  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);

  return result.lastInsertRowid;
}

export function getUserByEmail(email: string): User | undefined {
  const res = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
  // return res;
  return res as User | undefined;
}
