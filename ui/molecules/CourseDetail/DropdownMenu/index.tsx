import YouTubeIcon from "@mui/icons-material/YouTube";
import { Collapse } from "antd";
import styled, { css } from "styled-components";

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

const DropdownMenuItemContainer = styled.div<{
  isActive: boolean;
  available: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;

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
    margin-left: 8px;
  }

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  color: ${({ theme, isActive }) => isActive && theme.colors.primary};

  ${({ available }) =>
    !available &&
    css`
      cursor: not-allowed;
      opacity: 0.4;
      &:hover {
        color: black;
      }
    `}
`;

const DropdownMenuItem = (props: any) => {
  return (
    <DropdownMenuItemContainer
      onClick={props.onClick}
      isActive={props.active}
      available={props.available}
    >
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
