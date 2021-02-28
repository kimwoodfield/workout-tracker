import styled from 'styled-components'
import { AiOutlinePlus } from "react-icons/ai";

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

const AddItemButton = styled.button`
    height: 100%;
    width: auto;
    font-size: 2.25rem;
    color: #6200EE;
    background-color: white;
    outline: none;
    border: none;
`

const Add = <AiOutlinePlus />

export default function AddNewItem(props) {
    return (
        <AddNewItemContainer>
            <AddItemButton>
                {props.icon}
            </AddItemButton>
        </AddNewItemContainer>
    )
}