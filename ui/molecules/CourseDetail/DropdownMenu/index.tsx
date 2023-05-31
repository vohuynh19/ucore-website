import YouTubeIcon from "@mui/icons-material/YouTube";
import { Collapse } from "antd";
import styled from "styled-components";

type Props = {
  items: CourseTopic[];
};

const DropdownMenu = ({ items }: Props) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse defaultActiveKey={["1"]} onChange={onChange}>
      {items.map((topic) => (
        <Collapse.Panel header={topic.title} key={topic.id}>
          {topic.courseLessons.map((lesson) => (
            <DropdownMenuItem key={lesson.id} {...lesson} />
          ))}
        </Collapse.Panel>
      ))}
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

const DropdownMenuItem = (props: CourseLesson) => {
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
