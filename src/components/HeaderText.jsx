import styled from "styled-components";

const HeaderText = styled.h1`
  /* color: ${({ color }) => color || "red" }; */
  color :${({color}) => (color ? "hotpink" : "black")};
  background-color: ${({ bgrenk }) => bgrenk || "white"};
  font-size: 2rem;
  text-align: center;
`;

export default HeaderText;
