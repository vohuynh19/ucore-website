import { Menu, MenuProps } from "antd";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import { useRouter } from "next/router";
import { PAGE_ROUTES } from "@constants";
import { useMyProfile } from "hooks";

const StyledMenu = styled(Menu)`
  &.ant-menu-horizontal {
    border-bottom: none;
    font-size: 16px;
    svg {
      font-size: 16px !important;
    }
    .ant-menu-item::after {
      border: none !important;
    }
  }
`;

type HeaderMenuProps = {
  mode?: MenuProps["mode"];
  onMenuPress?: () => void;
};

const HeaderMenu = ({ mode = "horizontal", onMenuPress }: HeaderMenuProps) => {
  const [current, setCurrent] = useState("");
  const router = useRouter();
  const { data } = useMyProfile();

  const items: MenuProps["items"] = useMemo(() => {
    if (data?.role === "TEACHER") {
      return [
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
        {
          label: "Instructor Management",
          key: PAGE_ROUTES.INSTRUCTOR_DASHBOARD.DASHBOARD,
          icon: <CastForEducationIcon />,
        },
      ];
    }
    return [
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
  }, [data]);

  useEffect(() => {
    const matchKey = items.find((item) =>
      router.pathname.includes(item?.key?.toString() || "")
    );
    setCurrent(matchKey?.key?.toString() || "");
  }, [router, items]);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    router.push(e.key);
    onMenuPress?.();
  };

  return (
    <StyledMenu
      onClick={onClick}
      selectedKeys={[current]}
      mode={mode}
      items={items}
    />
  );
};

export default HeaderMenu;
