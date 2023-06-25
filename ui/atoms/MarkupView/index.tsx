import { FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type MarkupViewProps = {
  html: string;
};

const MarkupView: FC<MarkupViewProps> = ({ html }) => {
  return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{html}</ReactMarkdown>;
};

export default MarkupView;
