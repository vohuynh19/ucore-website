import { Card } from "antd";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  .ant-rate {
    margin-bottom: 16px;
  }

  .ant-card-meta-title {
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
`;

export const ActionContainer = styled.div`
  width: 100%;
  padding: 0px 24px;
  button {
    width: 100%;
    height: 40px;
  }
`;
