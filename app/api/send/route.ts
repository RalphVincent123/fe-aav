import { EmailTemplate } from '@/components/SendEmail/Email-Template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import db from "@/libs/database/db.mjs";
import crypto from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  const {email} = await req.json();

   const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);

  if (!user) {
    return Response.json({message:"If the email exists, a reset link has been sent." });
  }

  const token = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");
    const expiry = Date.now() + 1000 * 60 * 15;

    db.prepare(
      "UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE email = ?"
    ).run(hashedToken, expiry, email);

  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;

  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Password Reset",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password. Link valid for 15 mins.</p>`,
  })
  
  if (result.error) {
    console.error("Resend error:", result.error);
    return Response.json(
      { message: "Failed to send reset email." },
      { status: 500 }
    );
  }
  return Response.json({
    message: "If the email exists, a reset link has been sent.",
  });

}
