import dynamic from "next/dynamic";
import { ComponentProps } from "react";

const ReactQuill = dynamic(() => import("react-quill"), {
  loading: () => <div>loading</div>,
  ssr: false,
});

const TextEditor = (props: ComponentProps<typeof ReactQuill>) => {
  return <ReactQuill theme="snow" {...props} />;
};

export default TextEditor;
