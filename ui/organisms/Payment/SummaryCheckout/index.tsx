import { Divider, Typography } from "antd";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import { PAGE_ROUTES } from "@constants";

import { Button, SizeBox } from "ui/atoms";
import { PriceItem } from "ui/molecules";

export const SummaryPayment = {
  originalPrice: 200000,
  discounts: -70000,
  priceSymbol: "đ",
  total: 130000,
};

interface Props {}

const Checkout: React.FC<Props> = ({}) => {
  const { t } = useTranslation(["common", "sentence"]);

  const handleCompleteCheckout = () => {
    // TODO
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

      <p style={{ textAlign: "center" }}>
        {t("moneyBackGurantee", { ns: "sentence" })}
      </p>
    </>
  );
};

export default Checkout;
