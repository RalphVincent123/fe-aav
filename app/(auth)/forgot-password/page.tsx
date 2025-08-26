import ForgotPasswordForm from "@/components/ForgotPasswordForm";

export default function ForgotPassword() {
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
      <ForgotPasswordForm />
    </main>
  );
}
