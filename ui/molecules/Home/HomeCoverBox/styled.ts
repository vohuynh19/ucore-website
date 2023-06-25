import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: ${({ theme }) => theme.utils.pxToCalc(600)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.utils.pxToCalc(48)};
    b {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  p {
    font-size: ${({ theme }) => theme.utils.pxToCalc(24)};
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    width: 100%;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
    }
    br {
      display: none;
    }
  }

  .ant-btn.ant-btn-primary.ant-btn-lg {
    width: ${({ theme }) => theme.utils.pxToCalc(160)};
    height: ${({ theme }) => theme.utils.pxToCalc(48)} !important;
    border-radius: ${({ theme }) => theme.utils.pxToCalc(48)} !important;
    font-size: ${({ theme }) => theme.utils.pxToCalc(16)} !important;
    @media (max-width: 768px) {
      width: 160px;
      height: 48px !important;
      border-radius: 48px !important;
      font-size: 16px !important;
    }
  }
`;
