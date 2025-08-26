"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import style from "@/styles/ForgotPasswordForm.module.scss";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const tokenFromUrl = searchParams.get("token");

  useEffect(() => {
    if (tokenFromUrl) {
      setToken(tokenFromUrl); // auto fill token from URL
    }
  }, [tokenFromUrl]);

  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, token }),
    });
    const data = await res.json();
    alert(data.message);
  }

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <div className={style.forgotForm}>
        <div className={style.title}>Reset Password</div>
        <div className={style.formsFields}>
          <label htmlFor="email" className={style.emailLabel}>
            Password
          </label>
          <input
            type="password"
            className={style.emailFields}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          {/* <label htmlFor="email" className={style.emailLabel}>
            Token
          </label>
          <input
            type="text"
            className={style.emailFields}
            placeholder="Password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          /> */}
        </div>
        <div className={style.submitButton}>
          <button className={style.buttonLogin}>Reset Password</button>
        </div>
      </div>
    </form>
  );
}
