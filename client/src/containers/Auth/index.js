import authService from "./auth.service";
import LoginForm from "../../components/Auth/LoginForm";

export default function Auth() {
  return (
    <>
      <h1>Auth page</h1>

      <LoginForm login={authService.login} />
    </>
  );
}

