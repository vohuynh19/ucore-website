import { PropsWithChildren } from "react";
import { Container, RestrictContent } from "./styled";

type Props = PropsWithChildren<{
  maxWidth?: string;
}>;

const RestrictWidthLayout = ({ children, maxWidth }: Props) => {
  return (
    <Container>
      <RestrictContent maxWidth={maxWidth}>{children}</RestrictContent>
    </Container>
  );
};

export default RestrictWidthLayout;
