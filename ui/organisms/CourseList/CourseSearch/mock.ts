import { TFunction } from "next-i18next";

export const categories = [
  "All",
  "Game Development",
  "Web Development",
  "AI",
  "Vlog",
];

export const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];

export const sortList = (t: TFunction) => [
  {
    label: t("mostPopular"),
    value: t("mostPopular"),
  },
  {
    label: t("highestRate"),
    value: t("highestRate"),
  },
  {
    label: t("newest"),
    value: t("newest"),
  },
];

export const courseList = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];
