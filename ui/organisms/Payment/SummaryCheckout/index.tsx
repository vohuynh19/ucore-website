import { Divider, Tour, TourProps, Typography } from "antd";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import { PAGE_ROUTES } from "@constants";

import { Button, SizeBox } from "ui/atoms";
import { PriceItem } from "ui/molecules";
import { useState } from "react";

export const SummaryPayment = {
  originalPrice: 200000,
  discounts: -70000,
  priceSymbol: "đ",
  total: 130000,
};

interface Props {}

const Checkout: React.FC<Props> = ({}) => {
  const { t } = useTranslation(["common", "sentence"]);

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps["steps"] = [
    {
      title: "Payment",
      description: "Have you done payment",
      target: null,
    },
    {
      title: "Join Private Discord",
      description: (
        <Typography.Paragraph>
          {t("Join discord: ")}
          <Link href={"https://discord.gg/dDQHmcKY"}>
            {` SIReal's private channel`}
          </Link>
          <p>{t("Your Code: ")}</p>
        </Typography.Paragraph>
      ),
      target: null,
    },
    {
      title: "Access",
      description: (
        <Typography.Paragraph>
          {t(
            "Go to channel Vicodemy and message /verify {your email} {your code}"
          )}
        </Typography.Paragraph>
      ),
      target: null,
    },
  ];

  const handleCompleteCheckout = () => {
    window.open(
      "https://payment.momo.vn/v2/gateway/store?t=UEFZTUVOVF9MSU5LX1YyfDFlOWM3ZGEwLWZjN2EtNDIwZi1hYTNlLTIzNjVlNzJmMWUxOA==",
      "_blank"
    );
    setOpen(true);
  };

  return (
    <>
      <Typography.Title level={4}>{t("summary")}</Typography.Title>

      <Divider />

      <PriceItem
        label={t("originalPrice")}
        amount={SummaryPayment.originalPrice}
        currency={SummaryPayment.priceSymbol}
      />

      <PriceItem
        label={t("discounts")}
        amount={SummaryPayment.discounts}
        currency={SummaryPayment.priceSymbol}
      />

      <Divider />

      <PriceItem
        label={t("total")}
        amount={SummaryPayment.total}
        currency={SummaryPayment.priceSymbol}
        textStyle={{ fontWeight: 700 }}
      />

      <SizeBox height={12} />

      <Typography.Paragraph>
        {t("agreeTermOfService", {
          ns: "sentence",
        })}
        <Link href={PAGE_ROUTES.TERM_OF_USE}>
          {" " + t("termsAndConditions")}.
        </Link>
      </Typography.Paragraph>

      <Button
        type="primary"
        size="large"
        onClick={handleCompleteCheckout}
        isFullWidth
      >
        {t("completeCheckout")}
      </Button>
      <Tour
        placement="top"
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
      />

      <p style={{ textAlign: "center" }}>
        {t("moneyBackGurantee", { ns: "sentence" })}
      </p>
    </>
  );
};

export default Checkout;
