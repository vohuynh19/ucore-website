import { Card, Typography } from "antd";
import styled from "styled-components";

type Props = {
  name: string;
  role: string;
  img: string;
};

type InstructorImgProps = {
  src: string;
};
const InstructorImg = styled.div<InstructorImgProps>`
  width: 100%;
  height: ${({ theme }) => theme.utils.pxToCalc(160)};
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 992px) {
    height: ${({ theme }) => theme.utils.pxToCalc(300)};
  }
`;

const InstructorCard = ({ name, role, img }: Props) => {
  return (
    <Card style={{ overflow: "hidden" }} cover={<InstructorImg src={img} />}>
      <Typography>
        <Typography.Title level={4}>{name}</Typography.Title>
        <Typography.Text>{role}</Typography.Text>
      </Typography>
    </Card>
  );
};

export default InstructorCard;
