import { Divider, Form, Radio, Space, Typography } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PaymentIcon from "@mui/icons-material/Payment";

import { orderDetails } from "../Checkout/mock";
import { SelectPaymentItem } from "ui/molecules";
import { IMAGES_URL } from "@constants";
import { Flex, FlexSpaceBetween, FlexVerticalCenter } from "styles";

const paymentMethods = [
  {
    paymentMethod: "Momo",
    value: "MOMO",
    icon: <PaymentIcon />,
    avatar: <Image alt="logo" src={IMAGES_URL.MOMO} width={25} height={25} />,
  },
];

const defaultValue = paymentMethods[0].value;

const PaymentInformation = () => {
  const { t } = useTranslation(["common", "sentence"]);
  const [selected, setSelected] = useState<string>(defaultValue);

  const renderOrderItem = (order: any) => {
    return (
      <FlexSpaceBetween style={{ marginBottom: 24 }}>
        <Flex style={{ flex: 1 }}>
          <Image
            alt="order"
            src={order.image}
            width={40}
            height={40}
            style={{ marginRight: 12 }}
          />

          <Typography.Text style={{ paddingRight: 24 }}>
            {order.title}
          </Typography.Text>
        </Flex>

        <p>{`${order.price} ${order.priceSymbol}`}</p>
      </FlexSpaceBetween>
    );
  };

  return (
    <>
      <Typography.Title level={2}>{t("checkout")}</Typography.Title>

      <Typography.Title level={4}>{t("paymentMethod")}</Typography.Title>
      <Form.Item name="paymentMethod">
        <Radio.Group
          defaultValue={defaultValue}
          style={{ width: "100%" }}
          onChange={(e) => setSelected(e.target.value)}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            {paymentMethods.map((method) => (
              <>
                <SelectPaymentItem
                  {...method}
                  key={method.value}
                  isSelected={method.value === selected}
                />
              </>
            ))}
          </Space>
        </Radio.Group>
      </Form.Item>

      <Typography.Title level={4}>{t("orderDetails")}</Typography.Title>

      {orderDetails.map((order) => renderOrderItem(order))}
    </>
  );
};

export default PaymentInformation;
