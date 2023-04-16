import { Container } from "styles";
import { ForgotPasswordAction, ForgotPasswordForm } from "ui/molecules";

const ForgotPassword = () => {
  return (
    <Container>
      <ForgotPasswordForm />
      <ForgotPasswordAction />
    </Container>
  );
};

export default ForgotPassword;
