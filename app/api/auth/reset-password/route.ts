import db from "@/libs/database/db.mjs";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { hashUserPassword } from "@/libs/database/hash.mjs";


type UserRow = {
  id: number;
  email: string;
  password: string;
  reset_token: string;
  reset_token_expiry: number;
};

export async function POST(req: Request) {
    
    const { password, token} =  await req.json();

      const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

     const stmt = db
    .prepare("SELECT * FROM users WHERE reset_token = ?")
    .get(hashedToken) as UserRow | undefined;

  if (!stmt || !stmt.reset_token_expiry || stmt.reset_token_expiry < Date.now()) {
    return Response.json({ message: "Invalid or expired token" }, { status: 400 });
  }


     const hashPassword = hashUserPassword(password);

      db.prepare(`
    UPDATE users 
    SET password = ?, reset_token = NULL, reset_token_expiry = NULL 
    WHERE id = ?
  `).run(hashPassword, stmt.id);


  return Response.json({ message: "Password has been reset successfully!" });

}

