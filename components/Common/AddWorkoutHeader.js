import Link from 'next/link'

import styled from 'styled-components'

import BackButton from './BackButton'

const Wrapper = styled.div`
    background-color: white;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0.75rem 0.85rem;
    align-items: center;
    // border-bottom: 0.5px solid #BDBDBD;
`

const Finish = styled.p`
    color: #6200EE;
    font-weight: 500;
    margin: 0;
    padding: 0;
`

const Date = styled.p`
    margin: 0;
    padding: 0;
    font-weight: 700;
`

export default function AddWorkoutHeader(props) {
    return (
        <Wrapper>
            <BackButton route={props.route} />
            <Date>{props.date}</Date>
            <Link href="log">
                <Finish>{props.text}</Finish>
            </Link>
        </Wrapper>
    )
}