import { IMAGES_URL } from "@constants";
import { Typography, message, Modal } from "antd";
import { useTranslation } from "next-i18next";
import { Container } from "./styled";
import { ExclamationCircleFilled } from "@ant-design/icons";

import { Button } from "ui/atoms";
import { useRegisterInstructor } from "hooks";

const { confirm } = Modal;

const BecomeInstructor = () => {
  const { t } = useTranslation("sentence");

  const { mutate, isLoading } = useRegisterInstructor();

  const becomeInstructor = () => {
    confirm({
      title: "Do you want to delete these items?",
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
    });
  };

  return (
    <Container>
      <div className="left-content">
        <Typography.Title>{t("becomeInstructor")}</Typography.Title>

        <Typography.Paragraph type="secondary">
          {t("becomeInstructorDesc")}
        </Typography.Paragraph>

        <Button type="primary" size="large" onClick={becomeInstructor}>
          {t("becomeInstructor")}
        </Button>
      </div>

      <img alt="" src={IMAGES_URL.INSTRUCTOR_DEMO} />
    </Container>
  );
};

export default BecomeInstructor;
