import LoginForm from "@/components/LoginForm";
export default function Login() {
  return (
    <main id="main" style={{ position: "sticky" }}>
      <div
        style={{
          background: "#F0890A",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LoginForm />
      </div>
    </main>
  );
}
