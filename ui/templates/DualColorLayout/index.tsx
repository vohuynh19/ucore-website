import { Col, Row } from "antd";
import { ReactNode } from "react";
import { Padding } from "styles";

type Props = {
  LeftComponent: ReactNode;
  RightComponent: ReactNode;
};

const DualColorLayout = ({ LeftComponent, RightComponent }: Props) => {
  return (
    <Row>
      <Col xs={24} lg={14} span={14}>
        <Padding horizontal={24} vertical={24}>
          {LeftComponent}
        </Padding>
      </Col>

      <Col xs={24} lg={10} span={10}>
        <Padding horizontal={24} vertical={24}>
          {RightComponent}
        </Padding>
      </Col>
    </Row>
  );
};

export default DualColorLayout;
