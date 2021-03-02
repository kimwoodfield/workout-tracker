import Link from 'next/link'

import styled from 'styled-components'

import { IoIosArrowBack } from "react-icons/io";

const ButtonWrap = styled.span`
    padding: 0;
    margin: 0;
    color: #6200EE;
    width: auto;
    font-size: 1.25rem;
`

export default function BackButton(props) {
    return (
        <Link href={props.route}>
            <ButtonWrap>
                <IoIosArrowBack />
            </ButtonWrap>
        </Link>
    )
}