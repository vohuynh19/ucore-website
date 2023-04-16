import { PAGE_ROUTES } from "@constants";
import { Divider } from "antd";
import Link from "next/link";
import { Button } from "ui/atoms";
import { Container } from "./styled";

const LoginAction = () => {
  return (
    <Container>
      <Button isFullWidth type="primary" size="large">
        Sign in
      </Button>

      <div>
        or <Link href={PAGE_ROUTES.FORGOT_PASSWORD}>Forgot Password</Link>
      </div>

      <Divider />

      <div>
        Do not have an account?{" "}
        <Link href={PAGE_ROUTES.REGISTER}>Register</Link>
      </div>
    </Container>
  );
};

export default LoginAction;
