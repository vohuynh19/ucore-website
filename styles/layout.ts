import styled, { css } from "styled-components";

/**
 *
 * Styled Plugin
 *
 */

export const flex = css`
  display: flex;
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexCenterEnd = css`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const container = css`
  width: 100%;
  padding: 0 64px;
`;

export const horizontalSpaceBetween = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const fullScreen = css`
  width: 100vw;
  height: 100vh;
`;

export const fullScreenAbsolute = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

/**
 *
 *  Styled Components
 *
 */

export const Container = styled.div`
  ${container}
`;
