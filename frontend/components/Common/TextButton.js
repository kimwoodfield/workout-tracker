import styled from 'styled-components'

const Button = styled.button`
    background-color: white;
    color: #6200EE;
    display: flex;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 2rem;
    border: none;
    outline: none;
`

const Text = styled.p`
    font-size: 0.75rem;
    padding: 0 0 0 0.85rem;
`

export default function TextButton(props) {
    return (
        <Button>
            <Text>{props.text}</Text>
        </Button>
    )
}