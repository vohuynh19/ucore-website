import { Form, Radio, Space, Typography } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import PaymentIcon from "@mui/icons-material/Payment";

import { IMAGES_URL } from "@constants";

import { PaymentOrderItem, SelectPaymentItem } from "ui/molecules";

const paymentMethods = [
  {
    paymentMethod: "Momo",
    value: "MOMO",
    icon: <PaymentIcon />,
    avatar: (
      <Image alt="logo" src={IMAGES_URL.MOMO} width={25} height={25} priority />
    ),
  },
];

export const orderDetails = [
  {
    image: "https://img-c.udemycdn.com/course/100x100/1110904_66f5_8.jpg",
    title: "Unity Beginer Game Developer",
    price: 200000,
    priceSymbol: "đ",
  },
  {
    image: "https://img-c.udemycdn.com/course/100x100/1110904_66f5_8.jpg",
    title: "Subscription To SIReal",
    price: 200000,
    priceSymbol: "đ",
  },
  {
    image: "https://img-c.udemycdn.com/course/100x100/1110904_66f5_8.jpg",
    title: "C# Beginer Game Developer",
    price: 200000,
    priceSymbol: "đ",
  },
];

const defaultValue = paymentMethods[0].value;

const PaymentInformation = () => {
  const { t } = useTranslation(["common", "sentence"]);
  const [selected, setSelected] = useState<string>(defaultValue);

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
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
              <SelectPaymentItem
                {...method}
                key={method.value}
                isSelected={method.value === selected}
              />
            ))}
          </Space>
        </Radio.Group>
      </Form.Item>

      <Typography.Title level={4}>{t("orderDetails")}</Typography.Title>

      {orderDetails.map((order, index) => (
        <PaymentOrderItem
          key={index}
          src={order.image}
          title={order.title}
          currency={order.priceSymbol}
          price={order.price}
        />
      ))}
    </div>
  );
};

export default PaymentInformation;
