import styled from "styled-components";
import { container, flexVerticalCenter } from "styles";
import { pxToCalc } from "styles/helper";

export const Container = styled.section`
  ${container}
  ${flexVerticalCenter}
  height: ${pxToCalc(440)};
  background-image: url("/images/home-cover.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
