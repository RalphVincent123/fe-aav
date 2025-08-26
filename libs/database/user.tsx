import db from "./db.mjs";
import crypto from "crypto";

type User = {
  id: number;
  email: string;
  password: string;
};
export function createUser(email: string, password: string) {
  const token = crypto.randomBytes(32).toString("hex");
  const expiry = Date.now() + 1000 * 60 * 15;

  const result = db
    .prepare(
      "INSERT INTO users (email, password,reset_token,reset_token_expiry) VALUES (?, ?,?,?)"
    )
    .run(email, password, token, expiry);

  return result.lastInsertRowid;
}

export function getUserByEmail(email: string): User | undefined {
  const res = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
  // return res;
  return res as User | undefined;
}
