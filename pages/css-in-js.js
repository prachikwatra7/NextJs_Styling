import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const CssInJss = () => {
  return (
    <>
      <h2 style={{ color: "red" }}>Hello</h2>
      <Title>Styled Components</Title>
    </>
  );
};

export default CssInJss;
