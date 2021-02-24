import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const BottomNavBar = styled.div`
    height: 7rem;
    border: 2px solid red;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`

const IconContainer = styled.div`
    height: 6.5rem;
    width: 25%;
    padding: 0.5rem;
    border: 1px dashed blue;
    display: flex;
`

const IconButton = styled.button`
    height: 100%;
    width: 100%;
    font-size: 15px;
`

export default function IconNavBar() {
    return(
        <BottomNavBar>
            <IconContainer>
                <IconButton>
                    <FontAwesomeIcon icon={faFileAlt} />
                </IconButton>
            </IconContainer>
            <IconContainer>
                <IconButton>
                    <FontAwesomeIcon icon={faDumbbell} />
                </IconButton>
            </IconContainer>
            <IconContainer>
                <IconButton>
                    <FontAwesomeIcon icon={faUser} />
                </IconButton>
            </IconContainer>
            <IconContainer>
                <IconButton>
                    <FontAwesomeIcon icon={faCog} />
                </IconButton>
            </IconContainer>
        </BottomNavBar>
    )
}