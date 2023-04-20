import { PropsWithChildren } from "react";
import { BannerContainer } from "./styled";
import { BannerTextBox } from "ui/molecules";
import { title } from "process";

type Props = PropsWithChildren<{
  title: string;
  content: string;
}>;

const BannerLayout = ({ children, title, content }: Props) => {
  return (
    <BannerContainer>
      <BannerTextBox title={title} content={content} />
    </BannerContainer>
  );
};

export default BannerLayout;
