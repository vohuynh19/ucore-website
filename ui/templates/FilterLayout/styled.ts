import styled from "styled-components";
import { getScaledText } from "styles";

export const Container = styled.section`
  margin: 80px 0;
  .ant-form-item-label label {
    ${getScaledText(16)}
    font-weight: 500;
  }
`;
