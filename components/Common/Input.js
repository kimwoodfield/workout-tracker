import styled from 'styled-components'

const InputWrap = styled.div`
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #EEEEEE;
    box-sizing: border-box;
    height: 2rem;
    display: flex;
    align-items: center;
`

const InputField = styled.input`
    color: #212121;
    background-color: white;
    font-size: 0.9rem;
    padding: 0 0 0 0.85rem;
    width: 90%;
    outline: none;
    border: none;

    &::placeholder {
        color: #BDBDBD;
    }
`

export default function Input(props) {
    return (
        <InputWrap>
            <InputField placeholder={props.placeholder}></InputField>
        </InputWrap>
    )
}