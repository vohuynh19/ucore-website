import { Collapse, Form, Input, Select } from "antd";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

type Props = {
  courseIntroVideo: string;
};

const DropdownVideo = ({ courseIntroVideo }: Props) => {
  const { t } = useTranslation(["course"]);

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse defaultActiveKey={["1"]} onChange={onChange} size="large" ghost>
      <Collapse.Panel header={t("courseInfo")} key="1"></Collapse.Panel>
    </Collapse>
  );
};

export default DropdownVideo;
