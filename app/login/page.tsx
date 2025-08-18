import LoginForm from "@/components/LoginForm";

export default async function Login({
  searchParams,
}: {
  searchParams?: Promise<{ mode?: "login" | "signup" }>;
}) {
  const params = await searchParams; // ✅ await here
  const formMode = params?.mode === "signup" ? "signup" : "login";
  return (
    <main id="main" style={{ position: "sticky" }}>
      <div
        style={{
          background: "#F0890A",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LoginForm mode={formMode} />
      </div>
    </main>
  );
}
