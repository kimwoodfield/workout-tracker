import Link from 'next/link'

import styled from 'styled-components'

import BackButton from './BackButton'

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0.75rem 0.85rem;
    border-bottom: 0.5px solid #BDBDBD;
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

export default function AddWorkoutHeader() {
    return (
        <Wrapper>
            <BackButton route="log" />
            <Date>2 Mar</Date>
            <Link href="log">
                <Finish>Finish</Finish>
            </Link>
        </Wrapper>
    )
}