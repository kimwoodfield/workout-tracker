import styled from "styled-components";

const AppTitle = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 3.5rem;
  text-align: center;
  line-height: 1;
  text-transform: capitalize;
  font-weight: 800;
  padding: 1.25rem 1rem;
`;

export default function Title(props) {
  return <AppTitle>Workout Tracker</AppTitle>;
}
