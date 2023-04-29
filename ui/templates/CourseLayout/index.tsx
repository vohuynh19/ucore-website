import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  HeaderComponent: ReactNode;
  RightComponent: ReactNode;
}>;

const CourseLayout = ({}: Props) => {
  return <div></div>;
};

export default CourseLayout;
