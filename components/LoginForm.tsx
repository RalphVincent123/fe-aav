"use client";
import style from "@/styles/LoginForm.module.scss";
import Link from "next/link";
import { useActionState, useState } from "react";
import { auth } from "@/libs/actions/auth-actions";
import { iFormstate } from "@/libs/actions/auth-actions";
import { useEffect } from "react";

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

  const [framer, setFramer] = useState(false);

  useEffect(() => {
    if (formState.errors && Object.keys(formState.errors).length > 0) {
      setFramer(true); // trigger animation/error state
    } else {
      setFramer(false);
    }
  }, [formState.errors]);
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
          <div className={`${style.message} ${framer ? style.shake : ""}`}>
            {Object.keys(formState.errors).map((error) => (
              <span key={error}>{formState.errors[error]}</span>
            ))}
          </div>
        )}
        <div className={style.submitButton}>
          <button className={style.buttonLogin}>
            {mode === "login" ? "Login" : "Create account"}
          </button>
        </div>
        <p className={style.loginExisting}>
          {mode === "login" && (
            <Link href="/login?mode=signup">Create an account.</Link>
          )}
          {mode === "signup" && (
            <Link href="/login?mode=login">Login with existing account.</Link>
          )}
        </p>
      </div>
    </form>
  );
}
