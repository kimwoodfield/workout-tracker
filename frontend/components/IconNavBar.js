import Link from 'next/link'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const BottomNavBar = styled.div`
    height: 9rem;
    width: 23rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`

const IconContainer = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    border: 1px dotted blue;
`

const IconButton = styled.button`
    height: 8rem;
    width: 100%;
    background-color: white;
    outline: none;
    border: 1px solid green;
    border-radius: 5px;
    padding: 15px;
    align-items: flex-end;
    justify-content: flex-end;
`

export default function IconNavBar() {
    return(
        <BottomNavBar>
            <Link href="log">
            <IconContainer>
                <IconButton>
                    <FontAwesomeIcon icon={faFileAlt} size="xs" />
                    <p>Log</p>
                </IconButton>
            </IconContainer>
            </Link>
            <Link href="routines">
            <IconContainer>
                <IconButton>
                    <FontAwesomeIcon icon={faDumbbell} size="lg" />
                    <p>Routines</p>
                </IconButton>
            </IconContainer>
            </Link>
            <Link href="profile">
            <IconContainer>
                <IconButton>
                    <FontAwesomeIcon icon={faUser} />
                    <p>Profile</p>
                </IconButton>
            </IconContainer>
            </Link>
            <Link href="settings">
            <IconContainer>
                <IconButton>
                    <FontAwesomeIcon icon={faCog} />
                    <p>Settings</p>
                </IconButton>
            </IconContainer>
            </Link>
        </BottomNavBar>
    )
}