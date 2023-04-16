import { Container } from "./styled";

type THomeStatisticItem = {
  label: string;
  value: number;
};

const HomeStatisticItem = ({ label, value }: THomeStatisticItem) => {
  return (
    <Container>
      <h1>{value}</h1>
      <p>{label}</p>
    </Container>
  );
};

export default HomeStatisticItem;
