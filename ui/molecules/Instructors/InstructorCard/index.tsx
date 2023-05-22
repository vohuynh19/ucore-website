// import { Card, Typography } from "antd";
// import styled from "styled-components";

// type Props = {
//   name: string;
//   role: string;
//   img: string;
// };

// type InstructorImgProps = {
//   src: string;
// };
// const InstructorImg = styled.div<InstructorImgProps>`
//   width: 100%;
//   height: ${({ theme }) => theme.utils.pxToCalc(160)};
//   background-image: ${({ src }) => `url(${src})`};
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;

//   @media (max-width: 992px) {
//     height: ${({ theme }) => theme.utils.pxToCalc(300)};
//   }
// `;

// const InstructorCard = ({ name, role, img }: Props) => {
//   return (
//     <Card style={{ overflow: "hidden" }} cover={<InstructorImg src={img} />}>
//       <Typography>
//         <Typography.Title level={4}>{name}</Typography.Title>
//         <Typography.Text>{role}</Typography.Text>
//       </Typography>
//     </Card>
//   );
// };

// export default InstructorCard;

import { PAGE_ROUTES } from "@constants";
import { Rate, Row } from "antd";
import { useRouter } from "next/router";
import { Button } from "ui/atoms";
import Image from "next/image";

import { ActionContainer, StyledCard } from "./styled";
import { IMAGES_URL } from "@constants";

const InstructorCard = () => {
  const router = useRouter();

  const Description = () => (
    <div>
      <div>Game Developer</div>
      <div>5 Vicodemy follower</div>
      <Row>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
        >
          <img
            alt="logo"
            src={IMAGES_URL.FACEBOOK_CIRCLE}
            width={32}
            height={32}
          />
          <span style={{ marginLeft: "5px", fontWeight: "bold" }}>10k</span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
        >
          <img
            alt="logo"
            src={IMAGES_URL.YOUTUBE_CIRCLE}
            width={32}
            height={32}
          />
          <span style={{ marginLeft: "5px", fontWeight: "bold" }}>10k</span>
        </div>
      </Row>
    </div>
  );

  return (
    <StyledCard
      cover={
        <img
          onClick={() => router.push(PAGE_ROUTES.COURSE_DETAIL("1"))}
          alt="example"
          src="https://vicodemy.com/wp-content/uploads/2023/03/0901df4f8a204c7e1531.jpeg"
        />
      }
      actions={[
        <ActionContainer key={1}>
          <Button ghost>Try Chat Discord</Button>
        </ActionContainer>,
      ]}
    >
      <StyledCard.Meta title="Hoang Hiep" description={<Description />} />
    </StyledCard>
  );
};

export default InstructorCard;
