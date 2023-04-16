import { Input } from "antd";
import { Button } from "ui/atoms";
import { Container, ContentContainer } from "./styled";

const HomeSubscribe = () => {
  return (
    <Container>
      <ContentContainer>
        <h1>Hãy để lại email để chúng tôi cập nhập thông tin mới nhất.</h1>

        <Input
          placeholder="Your email address here"
          suffix={
            <Button type="primary" size="large">
              Subcribe
            </Button>
          }
        />
      </ContentContainer>
    </Container>
  );
};

export default HomeSubscribe;
