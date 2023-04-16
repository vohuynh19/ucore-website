import Link from "next/link";
import moment from "moment";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Spacer } from "styles";
import { StyledCard } from "./styled";
import { useRouter } from "next/router";
import { PAGE_ROUTES } from "@constants";

type Props = {
  date: string;
  title: string;
  url: string;
};
const HomeNewsItem = ({ date, title, url }: Props) => {
  const router = useRouter();

  return (
    <StyledCard onClick={() => router.push(PAGE_ROUTES.BLOG)}>
      <p>{moment(date).format("MMM DD, yyyy")}</p>

      <h1>{title}</h1>

      <Spacer />

      <Link href={url}>
        Continue Reading <ArrowForwardIcon />
      </Link>
    </StyledCard>
  );
};

export default HomeNewsItem;
