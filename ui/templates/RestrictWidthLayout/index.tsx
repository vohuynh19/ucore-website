import { PropsWithChildren } from "react";
import { Container, RestrictContent } from "./styled";

const RestrictWidthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <RestrictContent>{children}</RestrictContent>
    </Container>
  );
};

export default RestrictWidthLayout;
