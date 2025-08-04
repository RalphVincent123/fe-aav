import style from "@/styles/LoginForm.module.scss";
export default function LoginForm() {
  return (
    <form className={style.container}>
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
            placeholder="Email Address"
          />
          <label htmlFor="email" className={style.passwordLabel}>
            Password
          </label>
          <input
            type="password"
            className={style.passwordFields}
            name="email"
            placeholder="*******"
          />
        </div>
        <div className={style.submitButton}>
          <button className={style.buttonLogin}>Login</button>
        </div>
      </div>
    </form>
  );
}
