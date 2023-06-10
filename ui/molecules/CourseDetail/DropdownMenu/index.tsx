import YouTubeIcon from "@mui/icons-material/YouTube";
import { Collapse } from "antd";
import styled from "styled-components";

type Props = {
  items: Item[];
  activeKey: string;
};

type Item = {
  label: string;
  value: string;
  children?: Item[];
  metadata?: any;
};

const DropdownMenu = ({ items, activeKey }: Props) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse defaultActiveKey={activeKey} onChange={onChange}>
      {items.map((item) => (
        <Collapse.Panel header={item.label} key={item.value}>
          {(item.children || []).map((i) => (
            <DropdownMenuItem
              key={i.value}
              title={i.label}
              time={i.metadata.duration}
              {...i?.metadata}
            />
          ))}
        </Collapse.Panel>
      ))}
    </Collapse>
  );
};

const DropdownMenuItemContainer = styled.div<{ isActive: boolean }>`
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

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg};
  }

  color: ${({ theme, isActive }) => isActive && theme.colors.primary};
`;

const DropdownMenuItem = (props: any) => {
  return (
    <DropdownMenuItemContainer onClick={props.onClick} isActive={props.active}>
      <div className="left">
        <YouTubeIcon /> {props.title}
      </div>

      <div className="right">{`${parseInt((props.time / 60).toString())}:${
        props.time % 60
      }:00`}</div>
    </DropdownMenuItemContainer>
  );
};

export default DropdownMenu;
