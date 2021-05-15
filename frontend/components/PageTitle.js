import styled from "styled-components";

const PageTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 4.5rem;
  width: 100%;
`;

const PageTitleText = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 2rem;
  padding: 0;
  margin: 0;
  padding-left: 1.25rem;
`;

export default function PageTitle(props) {
  return (
    <PageTitleContainer>
      <PageTitleText>{props.name}</PageTitleText>
    </PageTitleContainer>
  );
}
