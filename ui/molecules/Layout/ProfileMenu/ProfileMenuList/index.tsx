import { PAGE_ROUTES } from "@constants";
import { TFunction } from "next-i18next";
import { useTranslation } from "react-i18next";
import ProfileMenuItem from "./ProfileMenuItem";
import styled from "styled-components";
import { Col, Row, message } from "antd";
import { Button } from "ui/atoms";
import Link from "next/link";
import { useLogout } from "hooks";
import { useRouter } from "next/router";

const menuList1 = (t: TFunction) => [
  {
    key: t("dashboard"),
    name: t("dashboard"),
    url: PAGE_ROUTES.PROFILE.DASHBOARD,
  },
  {
    key: t("myProfile"),
    name: t("myProfile"),
    url: PAGE_ROUTES.PROFILE.MY_PROFILE,
  },
  {
    key: t("enrolledCourse"),
    name: t("enrolledCourse"),
    url: PAGE_ROUTES.PROFILE.ENROLLED_COURSE,
  },
  {
    key: t("wishlist"),
    name: t("wishlist"),
    url: PAGE_ROUTES.PROFILE.WISHLIST,
  },
  {
    key: t("reviews"),
    name: t("reviews"),
    url: PAGE_ROUTES.PROFILE.REVIEWS,
  },
  {
    key: t("orderHistory"),
    name: t("orderHistory"),
    url: PAGE_ROUTES.PROFILE.ORDER_HISTORY,
  },
  {
    key: t("questionAndAnswer"),
    name: t("questionAndAnswer"),
    url: PAGE_ROUTES.PROFILE.QNA,
  },
];

const menuList2 = (t: TFunction) => [
  {
    key: t("settings"),
    name: t("settings"),
    url: PAGE_ROUTES.PROFILE.SETTING,
  },
];

const Container = styled.div`
  a {
    color: ${({ theme }) => theme.colors.textPrimarySecondary};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 776px) {
    width: 100%;
  }

  .item {
    height: 40px;
    padding-left: 32px;
    width: 200px;

    @media (max-width: 776px) {
      padding-left: 8px;
      width: 100%;
    }
  }
`;

const ProfileMenuList = () => {
  const { t } = useTranslation("common");
  const { mutate } = useLogout();
  const router = useRouter();

  return (
    <Container>
      <Row>
        <Col xs={24} sm={12} span={12}>
          {menuList1(t).map((menu) => (
            <div className="item" key={menu.key}>
              <ProfileMenuItem {...menu} />
            </div>
          ))}
        </Col>

        <Col xs={24} sm={12} span={12}>
          {menuList2(t).map((menu) => (
            <div className="item" key={menu.key}>
              <ProfileMenuItem {...menu} key={menu.key} />
            </div>
          ))}

          <div className="item">
            <Link
              href={"#"}
              onClick={(e) => {
                e.preventDefault();
                mutate(undefined, {
                  onSuccess: () => {
                    message.success("Log out success");
                    router.push(PAGE_ROUTES.HOME);
                  },
                });
              }}
            >
              {t("logout")}
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileMenuList;
