import styled from 'styled-components'

import Link from 'next/link'

import { AiOutlineRight } from "react-icons/ai";

const ButtonWrapper = styled.div`
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: white;
    height: 2.75rem;
    width: 90%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.75rem;
`

const Title = styled.div`
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
`

const IconWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 0.5rem;
`

export default function SettingsButton(props) {
    return (
        <Link href={props.route}>
            <ButtonWrapper>
                <Title>{props.Name}</Title>
                <IconWrapper><AiOutlineRight /></IconWrapper>
            </ButtonWrapper>
        </Link>
    )
}