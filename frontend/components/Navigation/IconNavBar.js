import { GrClock } from 'react-icons/gr'
import { BiDumbbell } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { IoSettingsOutline } from 'react-icons/io5'

import styled from 'styled-components'

import NavIcon from './NavIcon'

import { useRouter } from 'next/router';

const Clock = <GrClock />
const Dumbbell = <BiDumbbell />
const Profile = <CgProfile />
const Settings = <IoSettingsOutline />


const BottomNavBar = styled.div`
    height: 7rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    position: fixed;
    bottom: 0;
`

const NavIconWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 25%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${props => props.active ? 'red' : 'black'};
`

const IconContainer = styled.div`
    height: 100%;
    width: 100%;
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
    const router = useRouter();

    return(
        <BottomNavBar>
            <NavIconWrapper active={router.pathname === "log"}>
                <NavIcon route="log" icon={Clock} page="Log" />
            </NavIconWrapper>
            <NavIconWrapper active={router.pathname === "routines"}>
                <NavIcon route="routines" icon={Dumbbell} page="Routines" />
            </NavIconWrapper>
            <NavIconWrapper active={router.pathname === "profile"}>
                <NavIcon route="profile" icon={Profile} page="Profile" />
            </NavIconWrapper>
            <NavIconWrapper active={router.pathname === "settings"}>
                <NavIcon route="settings" icon={Settings} page="Settings" />
            </NavIconWrapper>
        </BottomNavBar>
    )
}