import styled from "styled-components";
import { container, flexCenter, getScaledText } from "styles";

export const Container = styled.div`
  ${container}
  ${flexCenter}
`;

export const ContentContainer = styled.div`
  width: ${({ theme }) => theme.utils.pxToCalc(540)};
  text-align: center;
  padding: 80px 0;

  h1 {
    ${getScaledText(28)}
    font-weight: 400;
    margin-top: 24px;
    margin-bottom: 48px;
  }

  .ant-input-affix-wrapper {
    border-radius: 16px !important;
    padding: 8px 8px 8px 24px;
    ${getScaledText(14)}

    button {
      ${getScaledText(14)}
    }
  }

  .textinput {
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    margin-top: 12px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 24px;
    padding-bottom: 80px;
  }
`;
