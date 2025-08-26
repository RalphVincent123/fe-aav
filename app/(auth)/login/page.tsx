import LoginForm from "@/components/LoginForm";
import { verifyAuth } from "@/libs/authentication/auth";
import { redirect } from "next/navigation";

export default async function Login({
  searchParams,
}: {
  searchParams?: Promise<{ mode?: "login" | "signup" }>;
}) {
  const params = await searchParams; // ✅ await here
  const formMode = params?.mode === "signup" ? "signup" : "login";

  const result = await verifyAuth();

  if (result.user) {
    return redirect("/dashboard");
  }

  return (
    <main
      id="main"
      style={{
        width: "100%",
        height: "100%",
        position: "sticky",
        background: "#E5E4E3",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <LoginForm mode={formMode} />
    </main>
  );
}
