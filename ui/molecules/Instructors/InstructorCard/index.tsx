import { Card, Col, Popover, Row, Space, Typography } from "antd";
import { Button } from "ui/atoms";
import { IMAGES_URL, PAGE_ROUTES } from "@constants";
import { useEffect, useRef, useState } from "react";
import router from "next/router";
import { UserInstroductionPopover } from "ui/molecules";
import { useTranslation } from "react-i18next";

const defaultAvatar =
  "https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png";

const { Text, Link, Title, Paragraph } = Typography;
// Todo: Translation
const InstructorCard = (props: User) => {
  const { t: t } = useTranslation("common");
  const imgRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onError = () => {
    if (imgRef.current) imgRef.current.src = defaultAvatar;
  };

  const content = <UserInstroductionPopover myProfile={props} />;

  const InstructorCardInner = () => {
    return (
      <Card
        hoverable
        cover={
          <img
            className="cover"
            ref={imgRef}
            alt="instructor"
            src={props.avatar || defaultAvatar}
            onError={onError}
            onClick={() => router.push(PAGE_ROUTES.USER_PROFILE(props.id))}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        }
      >
        <Card.Meta
          title={props.displayName ? props.displayName : props.name}
          description={
            <Space direction="vertical">
              <Row justify="space-between">
                <Col span={12}>
                  <Text>
                    {props.profileTitles
                      ? props.profileTitles
                      : t("instructor")}
                  </Text>
                </Col>
                <Col offset={2} span={10}>
                  <Text>
                    {props.profileSubscriber
                      ? `${props.profileSubscriber} ${t("subscriber")}`
                      : `0 ${t("subscriber")}`}
                  </Text>
                </Col>
              </Row>

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
            </Space>
          }
        />
      </Card>
    );
  };

  if (isMobile) {
    return <InstructorCardInner />;
  }

  return (
    <Popover content={content} trigger="hover" placement="right">
      <div>
        <InstructorCardInner />
      </div>
    </Popover>
  );
};

export default InstructorCard;
