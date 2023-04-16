import { PAGE_ROUTES } from "@constants";
import moment from "moment";

export const newsList = [
  {
    date: moment().toISOString(),
    title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor.",
    url: PAGE_ROUTES.BLOG,
  },
  {
    date: moment().toISOString(),
    title: "Velit officia consequat duis enim velit mollit. Exercitation.",
    url: PAGE_ROUTES.BLOG,
  },
  {
    date: moment().toISOString(),
    title: "Exercitation veniam consequat sunt nostrud amet.",
    url: PAGE_ROUTES.BLOG,
  },
];
