import { PropsWithChildren } from "react";
import { Footer, Header } from "ui/organisms";

const NavigationLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default NavigationLayout;
