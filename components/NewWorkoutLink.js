import styled from 'styled-components'
import { AiOutlinePlus } from "react-icons/ai";

import AddButton from './Common/AddButton'

const AddNewItemContainer = styled.div`
    // border: 1px dashed black;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 0.75rem;
    padding-top: 1rem;
    box-sizing: border-box;
`


export default function NewWorkoutLink(props) {
    return (
        <AddNewItemContainer>
            <AddButton route="AddWorkout"/>
        </AddNewItemContainer>
    )
}