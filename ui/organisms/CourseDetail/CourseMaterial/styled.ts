import { Card } from "antd";
import styled from "styled-components";

export const Container = styled.div``;

export const StyledCard = styled(Card).withConfig({
  shouldForwardProp: (prop) => !["isHighlight"].includes(prop),
})<{ isHighlight?: boolean }>`
  .ant-card-head {
    text-align: center;
    padding: 24px;
    background-color: ${({ theme, isHighlight }) =>
      isHighlight && theme.colors.cardHighlightHeader};
    span {
      font-weight: 400 !important;
    }
    h3 {
      margin: 0;
      text-align: start;
    }
    h4 {
      margin: 0;
      text-align: start;
      font-weight: 400 !important;
      font-size: 14px;
    }

    .center {
      width: 100%;
    }
    button {
      margin: 16px 0 8px 0;
    }
  }

  .criteria {
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    margin-top: 12px;
  }
`;
