import { Footer, Header } from "@ui/organisms";
import { PropsWithChildren } from "react";

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
