import { Col, Row } from "antd";
import Link from "next/link";
import styled from "styled-components";

type MenuItem = {
  label: string;
  url?: string;
  children?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    label: "Quick Links",
    children: [
      {
        label: "About us",
        url: "/about-us",
      },
      {
        label: "Blog",
        url: "/blog",
      },
      {
        label: "Contact",
        url: "/contact",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Courses",
        url: "/course-list",
      },
      {
        label: "Instructors",
        url: "/instructors",
      },
    ],
  },
  {
    label: "Support",
    children: [
      {
        label: "Comunity",
        url: "/comunity",
      },
      {
        label: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        label: "Terms And Conditions",
        url: "/terms-and-conditions",
      },
    ],
  },
];

const Container = styled(Row)`
  color: ${({ theme }) => theme.colors.contrastText};
  h2 {
    font-size: 20px;
    margin-bottom: 32px;
  }

  p {
    font-size: 16px;
    margin: 24px 0;
  }
`;

const FooterMenu = () => {
  return (
    <Container>
      {menuItems.map((item) => {
        return (
          <Col key={item.label} span={24 / menuItems.length}>
            <>
              <h2>{item.label}</h2>
              {item.children?.map((child) => (
                <p key={child.url}>
                  <Link href={child.url || ""}>{child.label}</Link>
                </p>
              ))}
            </>
          </Col>
        );
      })}
    </Container>
  );
};

export default FooterMenu;
