import { Button } from "antd";
import { ShadowCard } from "ui/atoms/Card";
import { Container } from "./styled";

const HomeCoverBox = () => {
  return (
    <Container>
      <ShadowCard title={null}>
        <h2>Viet Code Academy</h2>
        <p>Học tập và kết nối Mentor qua các khoá học lập trình trực tuyến.</p>
        <br />
        <p>Để lại Feedback: Hoàng Hiệp – CEO</p>
        <p>Email: hiep.cbla5@gmail.com</p>
        <p>Chúng tôi chưa có cổng thanh toán.— SĐT: 036 908 8090</p>
        <br />

        <Button size="large" type="primary">
          Xem các khoá học
        </Button>
      </ShadowCard>
    </Container>
  );
};

export default HomeCoverBox;
