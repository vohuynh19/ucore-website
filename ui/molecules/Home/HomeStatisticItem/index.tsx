import { Container } from "./styled";

type THomeStatisticItem = {
  label: string;
  value: number;
};

const HomeStatisticItem = ({ label, value }: THomeStatisticItem) => {
  return (
    <Container>
      <h1>{label}</h1>
      <p>{value}</p>
    </Container>
  );
};

export default HomeStatisticItem;
