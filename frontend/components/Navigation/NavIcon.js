import styled from 'styled-components'

import Link from 'next/link'

const IconContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`

const IconButton = styled.button`
    height: 100%;
    width: 100%;
    background-color: #E0E0E0;
    color: ${props => props.active ? '#6200EE;' : ''};
    outline: none;
    border: none;
    font-size: 2.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.75rem;
`

const IconDesc = styled.p`
    font-size: 0.8rem;
    padding: 0.5rem 0 0 0;
    margin: 0;
`

export default function NavIcon(props) {
    return (
        <Link href={props.route}>
            <IconContainer>
                <IconButton active={props.active}>
                    {props.icon}
                    <IconDesc active={props.active}>{props.page}</IconDesc>
                </IconButton>
            </IconContainer>
        </Link>
    )
}