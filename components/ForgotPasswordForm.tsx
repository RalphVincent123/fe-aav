"use client";
import { useState } from "react";
import style from "@/styles/ForgotPasswordForm.module.scss";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Failed to send reset email");
      }

      const data = await res.json();
      alert(data.message);
    } catch (err: any) {
      alert(err.message);
    }
  }
  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <div className={style.forgotForm}>
        <div className={style.title}>Reset Password</div>
        <div className={style.formsFields}>
          <label htmlFor="email" className={style.emailLabel}>
            Email Address
          </label>
          <input
            type="text"
            className={style.emailFields}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
        </div>
        <div className={style.submitButton}>
          <button className={style.buttonLogin}>Reset Password</button>
        </div>
      </div>
    </form>
  );
}
