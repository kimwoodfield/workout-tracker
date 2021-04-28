import Link from 'next/link'

import styled from 'styled-components'

import { IoIosArrowBack } from "react-icons/io";

const ButtonWrap = styled.span`
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    color: #3abed8;
    width: auto;
    // font-size: 1.25rem;
`

const Icon = styled.div`
    height: auto;
    width: auto;
    // border: 1px dashed salmon;
    // box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
`

const Text = styled.p`
    font-size: 0.9rem;
    // border: 1px dashed salmon;
    // box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-bottom: 0.1rem;
    padding-left: 0.25rem;
`

export default function BackButton(props) {
    return (
        <Link href={props.route}>
            <ButtonWrap>
                <Icon><IoIosArrowBack /></Icon>
                <Text>{props.text}</Text>
            </ButtonWrap>
        </Link>
    )
}