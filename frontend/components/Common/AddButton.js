import Link from 'next/link'

import styled from 'styled-components'

import { AiOutlinePlus } from "react-icons/ai";

const ButtonWrap = styled.span`
    padding: 0;
    margin: 0;
    color: #6200EE;
    width: auto;
    font-size: 1.75rem;
`

export default function AddButton(props) {
    return (
        <Link href={props.route}>
            <ButtonWrap>
                <AiOutlinePlus />
            </ButtonWrap>
        </Link>
    )
}