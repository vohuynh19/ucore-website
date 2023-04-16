import { Container } from "./styled";
import { RegisterAction, RegisterForm } from "ui/molecules";
import { Card } from "antd";

const Register = () => {
  return (
    <Container>
      <Card>
        <h2>Sign up and start learning</h2>
        <RegisterForm />
        <RegisterAction />
      </Card>
    </Container>
  );
};

export default Register;
