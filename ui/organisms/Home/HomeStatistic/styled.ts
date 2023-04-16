import styled from "styled-components";
import { container } from "styles";

export const StatisticContainer = styled.div`
  ${container}
  background-color: transparent;
  background: ${({ theme }) => theme.colors.linearGradientBg};
`;
