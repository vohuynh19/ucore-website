import IMAGES_URL from "@constants/images";
import Image from "next/image";
import { RingLoader } from "react-spinners";
import styled from "styled-components";
import { flexCenter, theme, fullScreenAbsolute } from "styles";

const Container = styled.div`
  ${flexCenter}
  ${fullScreenAbsolute}
`;

const AppLoading = () => {
  return (
    <Container>
      <Image
        style={{ position: "absolute" }}
        alt="logo"
        src={IMAGES_URL.LOGO}
        width={75}
        height={75}
      />

      <RingLoader color={theme.colors.primary} size={160} />
    </Container>
  );
};

export default AppLoading;
