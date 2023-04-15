import styled from "styled-components";
import { container, verticalCenter } from "styles";
import { pxToCalc } from "styles/helper";

export const Container = styled.section`
  ${container}
  ${verticalCenter}
  height: ${pxToCalc(440)};
  background-image: url("/images/home-cover.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
