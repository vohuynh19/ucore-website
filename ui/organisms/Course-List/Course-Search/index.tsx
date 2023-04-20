import { Container } from "./styled";
import { useState } from "react";
import { Select, Input, Button, Col, Row, Space, Checkbox } from "antd";
import { Spacer } from "styles";
import { useTranslation } from "react-i18next";
import { courseList } from "./mock";
import { CourseCard } from "ui/molecules";
import { SizeBox } from "ui/atoms";
import { CloseOutlined } from "@mui/icons-material";

const { Option } = Select;

interface Props {}

const categories = ["All", "Game Development", "Web Development", "AI", "Vlog"];

const CourseSearch: React.FC<Props> = ({}) => {
  const { t } = useTranslation(["common"]);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );
  const [free, setFree] = useState<boolean>(false);
  const [paid, setPaid] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState(1);

  // define the functions to handle the search and filter actions
  const handleSearch = (searchText: string) => {
    // implement the search action here
  };

  const handleFilter = (
    category: string,
    minPrice: string,
    maxPrice: string,
    sortBy: string
  ) => {
    // implement the filter action here
  };

  const handleCheckbox = (e: any) => {
    if (e.target.checked && e.target.value === "free") {
      setFree(true);
    } else if (e.target.checked && e.target.value === "paid") {
      setPaid(true);
    }
  };

  const handleClearFilters = () => {
    setSearchText("");
    setSelectedCategory(categories[0]);
    setFree(false);
    setPaid(false);
    setSortBy(1);
  };

  return (
    <Row>
      <Col span={6}>
        <Container>
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Input.Search
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onSearch={handleSearch}
            />
            <h2>Category</h2>
            <Select
              style={{ width: 200, marginRight: 8 }}
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(value)}
              placeholder="Select category"
            >
              {categories.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>

            <h2>Price</h2>
            <Checkbox value="free" checked={free} onChange={handleCheckbox}>
              Free
            </Checkbox>
            <Checkbox value="paid" checked={paid} onChange={handleCheckbox}>
              Paid
            </Checkbox>
            <Button
              type="primary"
              icon={<CloseOutlined />}
              onClick={handleClearFilters}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {t("clearFilter")}
            </Button>
          </Space>
        </Container>
      </Col>
      <Col span={18}>
        <Container>
          <Row>
            <Select
              style={{ width: 200, marginRight: 8 }}
              value={sortBy}
              onChange={(value) => setSortBy(value)}
              placeholder="Select sorting option"
            >
              <Option value={1}>{t("mostPopular")}</Option>
              <Option value={2}>{t("highestRate")}</Option>
              <Option value={3}>{t("newest")}</Option>
            </Select>
          </Row>
          <SizeBox height={48}></SizeBox>
          <Row gutter={[32, 32]}>
            {courseList.map((course) => (
              <Col key={course.id} xs={24} sm={12} md={8} lg={6}>
                <CourseCard />
              </Col>
            ))}
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default CourseSearch;
