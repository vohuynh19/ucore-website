import YouTubeIcon from "@mui/icons-material/YouTube";
import { Collapse } from "antd";
import styled from "styled-components";

type Props = {
  header: string;
  items: CourseVideo[];
};

const DropdownMenu = ({ header, items }: Props) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse defaultActiveKey={["1"]} onChange={onChange}>
      <Collapse.Panel header={header} key="1">
        {items.map((item) => (
          <DropdownMenuItem key={item.id} {...item} />
        ))}
      </Collapse.Panel>

      <Collapse.Panel header={header} key="2">
        {items.map((item) => (
          <DropdownMenuItem key={item.id} {...item} />
        ))}
      </Collapse.Panel>
    </Collapse>
  );
};

const DropdownMenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;

  .left {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
  }
  .right {
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }
`;

const DropdownMenuItem = (props: CourseVideo) => {
  return (
    <DropdownMenuItemContainer>
      <div className="left">
        <YouTubeIcon /> {props.title}
      </div>

      <div className="right">{`${props.time / 60}:00`}</div>
    </DropdownMenuItemContainer>
  );
};

export default DropdownMenu;
