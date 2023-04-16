import { HomeNewsItem, HomeNewsHeader } from "ui/molecules";

import { Container, HomeNewsContainer } from "./styled";

import { newsList } from "./mock";
import { Col, Row } from "antd";

const HomeNews = () => {
  return (
    <Container>
      <HomeNewsHeader />

      <HomeNewsContainer>
        <Row gutter={[32, 32]}>
          {newsList.map((news, index) => (
            <Col key={index} xs={24} md={8}>
              <HomeNewsItem
                date={news.date}
                title={news.title}
                url={news.url}
              />
            </Col>
          ))}
        </Row>
      </HomeNewsContainer>
    </Container>
  );
};

export default HomeNews;
