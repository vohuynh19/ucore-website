import { Container } from "styles";
import { LoginAction, LoginForm } from "ui/molecules";

const Login = () => {
  return (
    <Container>
      <LoginForm />
      <LoginAction />
    </Container>
  );
};

export default Login;
