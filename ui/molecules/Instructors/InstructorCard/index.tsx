import { Row } from "antd";
import { Button } from "ui/atoms";

import { ActionContainer, StyledCard } from "./styled";
import { IMAGES_URL } from "@constants";
import { FC, useRef } from "react";

type InstructorCardProps = {
  name: string;
  imgLink: string;
  discordLink: string;
  category: string;
  follower: number;
  youtubeFollower: number;
  facebookFollower: number;
};

const defaultAvatar =
  "https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png";

// Todo: Translation
const InstructorCard: FC<Partial<InstructorCardProps>> = ({
  name,
  imgLink,
  discordLink,
  follower,
  youtubeFollower,
  facebookFollower,
  category,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const onError = () => {
    if (imgRef.current) imgRef.current.src = defaultAvatar;
  };

  return (
    <StyledCard
      cover={
        <img
          className="cover"
          ref={imgRef}
          alt="example"
          src={imgLink || defaultAvatar}
          onError={onError}
        />
      }
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
