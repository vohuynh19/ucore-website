import { Row } from "antd";
import { Button } from "ui/atoms";

import { ActionContainer, StyledCard } from "./styled";
import { IMAGES_URL } from "@constants";
import { FC } from "react";

type InstructorCardProps = {
  name: string;
  imgLink: string;
  discordLink: string;
  category: string;
  follower: number;
  youtubeFollower: number;
  facebookFollower: number;
};

// Todo: Translation
const InstructorCard: FC<InstructorCardProps> = ({
  name,
  imgLink,
  discordLink,
  follower,
  youtubeFollower,
  facebookFollower,
  category,
}) => {
  return (
    <StyledCard
      cover={<img alt="example" src={imgLink} />}
      actions={[
        <ActionContainer key={1}>
          <Button ghost href={discordLink}>
            Try Chat Discord
          </Button>
        </ActionContainer>,
      ]}
    >
      <StyledCard.Meta
        title={name}
        description={
          <div>
            <div>{category}</div>
            {}
            <div> {follower} Vicodemy follower</div>
            <Row>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <img
                  alt="logo"
                  src={IMAGES_URL.FACEBOOK_CIRCLE}
                  width={32}
                  height={32}
                />
                <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
                  {facebookFollower}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <img
                  alt="logo"
                  src={IMAGES_URL.YOUTUBE_CIRCLE}
                  width={32}
                  height={32}
                />
                <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
                  {youtubeFollower}
                </span>
              </div>
            </Row>
          </div>
        }
      />
    </StyledCard>
  );
};

export default InstructorCard;
