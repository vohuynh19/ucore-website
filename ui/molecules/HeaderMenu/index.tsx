import { Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";

import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import SchoolIcon from "@mui/icons-material/School";
import { useRouter } from "next/router";
import { PAGE_ROUTES } from "@constants";

const items: MenuProps["items"] = [
  {
    label: "Courses List",
    key: PAGE_ROUTES.COURSE_LIST,
    icon: <SchoolIcon />,
  },
  {
    label: "Instructors",
    key: PAGE_ROUTES.INSTRUCTORS,
    icon: <SettingsAccessibilityIcon />,
  },
];

const StyledMenu = styled(Menu)`
  &.ant-menu-horizontal {
    border-bottom: none;
    font-size: 16px;
    svg {
      font-size: 16px !important;
    }
  }
`;

const HeaderMenu = () => {
  const [current, setCurrent] = useState("");
  const router = useRouter();

  useEffect(() => {
    const matchKey = items.find((item) =>
      router.pathname.includes(item?.key?.toString() || "")
    );
    setCurrent(matchKey?.key?.toString() || "");
  }, [router]);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    router.push(e.key);
  };

  return (
    <StyledMenu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default HeaderMenu;
