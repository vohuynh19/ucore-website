import {
  Col,
  Form,
  Select,
  Radio,
  Image,
  Tabs,
  Space,
  Row,
  Card,
  Divider,
} from "antd";
import { useTranslation } from "react-i18next";
import IMAGES_URL from "@constants/images";

import { Container, SummaryContainer } from "./styled";
import { paymentMethod, orderDetails, SummaryPayment } from "./mock";
import { useState } from "react";
import { Button, SizeBox } from "ui/atoms";
const { TabPane } = Tabs;

interface Props {}

const Checkout: React.FC<Props> = ({}) => {
  const { t } = useTranslation(["common", "sentence"]);
  const [form] = Form.useForm();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethod[0].value
  );

  const handleTabChange = (value: string) => {
    setSelectedPaymentMethod(value);
  };

  const handleCompleteCheckout = () => {
    // TODO
  };

  const renderPaymentMethodTabs = () => (
    <Tabs
      tabPosition="left"
      activeKey={selectedPaymentMethod}
      onChange={handleTabChange}
      style={{
        border: "1px solid #ddd",
        borderRadius: 4,
      }}
    >
      {paymentMethod.map((method) => (
        <TabPane
          tab={
            <div>
              <Radio
                checked={selectedPaymentMethod === method.value}
                value={method.value}
                style={{ marginRight: 8 }}
              />
              <Image
                alt="logo"
                preview={false}
                src={IMAGES_URL.MOMO}
                width={25}
                height={25}
              />
            </div>
          }
          key={method.value}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginLeft: 8 }}>Description for {method.value}</p>
          </div>
        </TabPane>
      ))}
    </Tabs>
  );

  const renderOrderDetails = () => (
    <Col span={24}>
      {orderDetails.map((order) => (
        <Row key={order.title}>
          <Col span={4}>
            <Image src={order.image} width={32} height={32}></Image>
          </Col>
          <Col span={16}>
            <p>{order.title}</p>
          </Col>
          <Col span={4}>
            <p>
              {order.price} {order.priceSymbol}
            </p>
          </Col>
        </Row>
      ))}
    </Col>
  );

  const renderTitleAndMoney = (
    title: string,
    money: string,
    symbol: string,
    sign?: string,
    isBold?: boolean
  ) => (
    <Row>
      <Col span={8}>
        <p>{t(title)}</p>
      </Col>
      <Col span={16} style={{ display: "flex", justifyContent: "flex-end" }}>
        <p style={{ fontWeight: isBold ? "bold" : "normal" }}>
          {sign && `${sign}`}
          {money} {symbol}
        </p>
      </Col>
    </Row>
  );

  const renderSummary = () => (
    <SummaryContainer>
      <h2>{t("summary")}</h2>
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
      <SizeBox height={10}></SizeBox>
      <p>{t("agreeTermOfService", { ns: "sentence" })}</p>
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
    </SummaryContainer>
  );

  return (
    <Container>
      <Col xs={24} sm={18} md={16} lg={14} xl={14}>
        <Card>
          <Form form={form} layout="vertical">
            <h1>{t("checkout")}</h1>
            <Col span={24}>
              <Form.Item name={"paymentMethod"} label={t("paymentMethod")}>
                {renderPaymentMethodTabs()}
              </Form.Item>
            </Col>
            <h2>{t("orderDetails")}</h2>
            {renderOrderDetails()}
          </Form>
        </Card>
      </Col>
      <Col xs={24} sm={18} md={16} lg={10} xl={10}>
        {renderSummary()}
      </Col>
    </Container>
  );
};

export default Checkout;
