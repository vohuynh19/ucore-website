import { Col, Row, Divider, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { SummaryPayment } from "./mock";
import { Button, SizeBox } from "ui/atoms";
import { Container, FlexSpaceBetween } from "styles";
import Link from "next/link";
import { PAGE_ROUTES } from "@constants";

interface Props {}

const Checkout: React.FC<Props> = ({}) => {
  const { t } = useTranslation(["common", "sentence"]);

  const handleCompleteCheckout = () => {
    // TODO
  };

  const renderTitleAndMoney = (
    title: string,
    money: string,
    symbol: string,
    sign?: string,
    isBold?: boolean
  ) => (
    <FlexSpaceBetween>
      <Typography.Paragraph style={{ fontWeight: isBold ? "bold" : "normal" }}>
        {t(title)}
      </Typography.Paragraph>

      <Typography.Paragraph style={{ fontWeight: isBold ? "bold" : "normal" }}>
        {`${sign ? sign : ""}${money} ${symbol}`}
      </Typography.Paragraph>
    </FlexSpaceBetween>
  );

  return (
    <>
      <Typography.Title level={4}>{t("summary")}</Typography.Title>

      <Divider />

      {renderTitleAndMoney(
        "originalPrice",
        SummaryPayment.originalPrice.toString(),
        SummaryPayment.priceSymbol
      )}

      {renderTitleAndMoney(
        "discounts",
        SummaryPayment.discounts.toString(),
        SummaryPayment.priceSymbol,
        "-"
      )}

      <Divider />

      {renderTitleAndMoney(
        "total",
        SummaryPayment.total.toString(),
        SummaryPayment.priceSymbol,
        undefined,
        true
      )}

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
