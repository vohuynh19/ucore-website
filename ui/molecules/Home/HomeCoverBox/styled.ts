import styled from "styled-components";

export const Container = styled.div`
  .ant-card {
    width: ${({ theme }) => theme.utils.pxToCalc(500)};
  }
  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.utils.pxToCalc(48)};
  }
  p {
    font-size: ${({ theme }) => theme.utils.pxToCalc(14)};
  }

  @media (max-width: 768px) {
    width: 100%;
    p {
      font-size: 10px;
    }
    br {
      display: none;
    }
    .ant-card-body {
      padding: 8px;
    }
  }

  @media (max-width: 576px) {
    .ant-card {
      width: 100%;
    }
  }
`;
