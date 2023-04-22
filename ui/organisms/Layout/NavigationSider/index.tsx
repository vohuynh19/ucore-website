import { CloseOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Button } from "ui/atoms";
import { HeaderMenu } from "ui/molecules";
import { SiderProfileContainer, StyledSider } from "./styled";

type Props = {
  collapsed: boolean;
  closeHandler: () => void;
};

const NavigationSider = ({ collapsed, closeHandler }: Props) => {
  const { t } = useTranslation("common");

  return (
    <StyledSider
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={0}
      width="330px"
    >
      <SiderProfileContainer>
        <Button
          style={{ float: "right", marginBottom: 16 }}
          type="text"
          icon={<CloseOutlined />}
          onClick={closeHandler}
        />
        <Button isFullWidth size="large" type="primary">
          {t("signIn")}
        </Button>
        <Button isFullWidth size="large">
          {t("register")}
        </Button>
      </SiderProfileContainer>

      <HeaderMenu mode="vertical" onMenuPress={closeHandler} />
    </StyledSider>
  );
};

export default NavigationSider;
