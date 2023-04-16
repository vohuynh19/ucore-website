import { Container } from "./styled";
import { ForgotPasswordAction, ForgotPasswordForm } from "ui/molecules";
import { Card } from "antd";

const ForgotPassword = () => {
  return (
    <Container>
      <Card>
        <h2>Forgot Password</h2>
        <ForgotPasswordForm />
        <ForgotPasswordAction />
      </Card>
    </Container>
  );
};

export default ForgotPassword;
