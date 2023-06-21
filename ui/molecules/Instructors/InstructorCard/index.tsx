import { Row } from "antd";
import { Button } from "ui/atoms";

import { ActionContainer, StyledCard } from "./styled";
import { IMAGES_URL, PAGE_ROUTES } from "@constants";
import { FC, useRef } from "react";
import router from "next/router";

const defaultAvatar =
  "https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png";

// Todo: Translation
const InstructorCard = (props: User) => {
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
          src={props.avatar || defaultAvatar}
          onError={onError}
          onClick={() => router.push(PAGE_ROUTES.USER_PROFILE(props.id))}
        />
      }
    >
      <StyledCard.Meta
        description={
          <div>
            <div> {props.profileSubscriber} Vicodemy follower</div>
            <Row>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              ></div>
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
                  {props?.profileYoutubeCount || 0}K
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
