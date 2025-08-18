"use client";
import style from "@/styles/LoginForm.module.scss";
import Link from "next/link";
import { useActionState } from "react";
import { auth } from "@/libs/actions/auth-actions";
import { iFormstate } from "@/libs/actions/auth-actions";

interface LoginFormProps {
  mode: "login" | "signup";
}

export default function LoginForm({ mode }: LoginFormProps) {
  const [formState, formAction] = useActionState<iFormstate, FormData>(
    auth.bind(null, mode),
    {
      errors: {},
    }
  );
  return (
    <form className={style.container} action={formAction}>
      <div className={style.logForm}>
        <div className={style.title}>Log in to continue</div>
        <div className={style.formsFields}>
          <label htmlFor="email" className={style.emailLabel}>
            Email
          </label>
          <input
            type="text"
            className={style.emailFields}
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <label htmlFor="email" className={style.passwordLabel}>
            Password
          </label>
          <input
            type="password"
            className={style.passwordFields}
            name="password"
            id="password"
            placeholder="*******"
          />
        </div>
        {formState.errors && (
          <ul>
            {Object.keys(formState.errors).map((error) => (
              <li key={error}>{formState.errors[error]}</li>
            ))}
          </ul>
        )}
        <div className={style.submitButton}>
          <button className={style.buttonLogin}>
            {mode === "login" ? "Login" : "Create account"}
          </button>
        </div>
        <p className={style.loginExisting}>
          {mode === "login" && (
            <Link href="/login?mode=signup">Create An account.</Link>
          )}
          {mode === "signup" && (
            <Link href="/login?mode=login">Login with existing account.</Link>
          )}
        </p>
      </div>
    </form>
  );
}
