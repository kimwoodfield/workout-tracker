import styled from "styled-components";
import AddButton from "./Common/AddButton";

const AddNewItemContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.75rem;
  padding-top: 1rem;
  box-sizing: border-box;
`;

export default function NewExerciseLink(props) {
  return (
    <AddNewItemContainer>
      <AddButton route="addexercise" />
    </AddNewItemContainer>
  );
}
