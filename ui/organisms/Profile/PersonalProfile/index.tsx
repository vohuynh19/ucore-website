import {
  Col,
  Divider,
  Row,
  Space,
  Typography,
  message,
  Modal,
  notification,
} from "antd";
import { Container } from "./styled";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Button, SizeBox } from "ui/atoms";
import { useTranslation } from "react-i18next";
import InfoIcon from "@mui/icons-material/Info";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { ExclamationCircleFilled } from "@ant-design/icons";
import router, { useRouter } from "next/router";
import { useMyProfile, useRegisterInstructor, useUpdateProfile } from "hooks";
import { IMAGES_URL } from "@constants";
import EditProfileModal from "ui/molecules/Profile/EditProfileModal";
import { userQueryKeys } from "src/infra/https/keys/user";
import { queryClientInstance } from "src/infra/https";
import { useRef } from "react";

const { Text, Link, Title, Paragraph } = Typography;
const { confirm } = Modal;

type Props = {
  myProfile: User;
};

const PersonalProfile = (props: Props) => {
  const { t: t } = useTranslation("common");
  const { t: sentence } = useTranslation("sentence");

  const editProfileModalRef = useRef<any>(null);

  const { mutate, isLoading } = useRegisterInstructor();
  const { mutate: editProfile, isLoading: editLoading } = useUpdateProfile();

  const onOpenEditProfileModal = () => editProfileModalRef.current.openModal();
  const onEditProfile = (payload: UserProfilePayload) => {
    payload.email = props.myProfile.name;
    payload.uid = props.myProfile.id;

    editProfile(payload, {
      onSuccess: (res) => {
        message.success("Update profile succes");
        editProfileModalRef.current.closeModal();
        queryClientInstance.invalidateQueries({
          queryKey: userQueryKeys.getSelf().queryKey,
        });
      },
      onError: (err) =>
        message.error(err?.response?.data?.message || "Internal Server Error"),
    });
  };

  const becomeInstructor = () => {
    props.myProfile.role === "USER"
      ? confirm({
          title: sentence("Do you want to become an instructor?"),
          icon: <ExclamationCircleFilled />,
          okText: "Confirm",
          cancelText: "Cancel",
          content: "Some ",
          okButtonProps: {
            loading: isLoading,
          },
          onOk() {
            mutate(undefined, {
              onSuccess() {
                message.success("Become instructor success");
              },
              onError() {
                message.error("Become instructor error");
              },
            });
          },
          onCancel() {},
        })
      : notification.warning({
          message: "You already have been an instructor",
        });
  };

  return (
    <Container>
      <Typography.Title level={3}>{t("profile")}</Typography.Title>
      <div className="cover">
        <img src={IMAGES_URL.PROFILE_PANEL} alt="photo" />
        <Button className="abs-btn" type="primary" icon={<AddAPhotoIcon />}>
          Upload cover photo
        </Button>
      </div>
      <Row>
        <Col lg={6} span={24}>
          <div className="avatar">
            <img
              src={
                "https://vicodemy.com/wp-content/plugins/tutor/assets/images/profile-photo.png"
              }
              alt="avatar"
            />

            <div className="abs-icon">
              <AddAPhotoIcon />
            </div>
          </div>
        </Col>
        <Col span={6}>
          <Title level={3}>
            {props.myProfile?.displayName
              ? props.myProfile.displayName
              : props.myProfile.name}
          </Title>
          <Text type="secondary">
            {props.myProfile?.profileSubscriber || "0"} subscriber .{" "}
            {props.myProfile?.profileTotalCourse || "0"} course
          </Text>
        </Col>
        <Col>
          <SizeBox height={30} />
          <Space direction="vertical">
            <Space>
              <Button onClick={() => onOpenEditProfileModal()} type="primary">
                {t("edit")}
              </Button>
              <Button type="primary" onClick={becomeInstructor}>
                {sentence("becomeInstructor")}
              </Button>
            </Space>
            <Button
              onClick={() => {
                if (props.myProfile?.profileDiscordLink) {
                  window.open(props.myProfile.profileYoutubeLink, "_blank");
                }
              }}
            >
              {t("joinDiscord")}
            </Button>
          </Space>
        </Col>
      </Row>
      <SizeBox height={60} />
      <Divider />
      <Title level={3}>{t("introduce")}</Title>

      <Row>
        <Col span={16}>
          <Space direction="vertical">
            <Paragraph>
              {props.myProfile?.profileStory || "Tell other dudes your story"}
            </Paragraph>

            <Space>
              <InfoIcon color="action" />
              {/* <Text strong>instructor</Text> */}
              <Text>
                {props.myProfile?.profileTitles ||
                  "Người hướng dẫn - Lập trình viên"}
              </Text>
            </Space>
          </Space>
        </Col>
        <Col span={8}>
          <Button
            onClick={() => {
              if (props.myProfile?.profileYoutubeLink) {
                window.open(props.myProfile.profileYoutubeLink, "_blank");
              }
            }}
          >
            <YouTubeIcon />
            <Text strong>Youtube .</Text>
            <Text>{props.myProfile?.profileYoutubeCount || "0"}K</Text>
          </Button>
        </Col>
      </Row>
      <EditProfileModal
        ref={editProfileModalRef}
        onConfirm={onEditProfile}
        confirmLoading={false}
      />
    </Container>
  );
};

export default PersonalProfile;
