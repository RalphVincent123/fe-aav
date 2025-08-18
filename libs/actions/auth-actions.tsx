"use server";
import { createUser, getUserByEmail } from "../database/user";
import { hashUserPassword, verifyPassword } from "../database/hash.mjs";
import { redirect } from "next/navigation";
import { createAuthSession } from "../authentication/auth";
import { errors } from "playwright";

export type AuthMode = "login" | "signup";

export type iFormstate = {
  errors: Record<string, string>; // remove the '?'
  mode?: AuthMode;
};

export async function Signup(
  prevState: any,
  formData: FormData
): Promise<iFormstate> {
  const email = (formData?.get("email") as string) || "";
  const password = (formData?.get("password") as string) || "";

  let errors: Record<string, string> = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const hashPassword = hashUserPassword(password);

  try {
    const id = createUser(email, hashPassword);

    await createAuthSession(String(id));
    redirect("/");
  } catch (error: any) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "it seems like an account has been exisiting",
        },
      };
    }
    throw error;
  }
}
export async function login(
  prevState: iFormstate,
  formData?: FormData
): Promise<iFormstate> {
  const email = formData?.get("email");
  const password = formData?.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return {
      errors: {
        form: "Invalid form submission",
      },
    };
  }

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        email: " Could not authenticate user, please check your credentials",
      },
    };
  }
  const isvalidPassword = verifyPassword(existingUser.password, password);

  if (!isvalidPassword) {
    return {
      errors: {
        password: "Could not authenticate user, please check your credentials",
      },
    };
  }
  await createAuthSession(String(existingUser.id));
  redirect("/");
}

export async function auth(
  mode: AuthMode,
  prevState: iFormstate,
  formdata: FormData
) {
  if (mode === "login") {
    return login(prevState, formdata);
  }
  return Signup(prevState, formdata);
}

// export function createAuthHandler(mode: AuthMode) {
//   return async function authHandler(
//     prevState: iFormstate,
//     formData: FormData
//   ): Promise<iFormstate> {
//     if (mode === "login") {
//       return login(prevState, formData);
//     }
//     return Signup(prevState, formData);
//   };
// }

// export async function auth(
//   mode: any,
//   prevState: iFormstate,
//   formData: FormData
// ) {
//   if (mode === "login") {
//     return login(prevState, formData);
//   }
//   return Signup(prevState, formData);
// }
