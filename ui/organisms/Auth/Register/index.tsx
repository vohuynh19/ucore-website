import { Container } from "styles";
import { RegisterAction, RegisterForm } from "ui/molecules";

const Register = () => {
  return (
    <Container>
      <RegisterForm />
      <RegisterAction />
    </Container>
  );
};

export default Register;
