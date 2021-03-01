import { AiOutlineClockCircle } from "react-icons/ai";
import { BiDumbbell } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { IoSettingsOutline } from 'react-icons/io5'

import styled from 'styled-components'

import NavIcon from './NavIcon'

import { useRouter } from 'next/router';

const Clock = <AiOutlineClockCircle />
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
`


export default function IconNavBar() {
    const router = useRouter();

    return(
        <BottomNavBar>
            <NavIconWrapper active={router.pathname === "/log"}>
                <NavIcon route="log" icon={Clock} page="Log" active={router.pathname === '/log'}/>
            </NavIconWrapper>
            <NavIconWrapper active={router.pathname === "/routines"}>
                <NavIcon route="routines" icon={Dumbbell} page="Routines" active={router.pathname === "/routines"}/>
            </NavIconWrapper>
            <NavIconWrapper active={router.pathname === "/profile"}>
                <NavIcon route="profile" icon={Profile} page="Profile" active={router.pathname === "/profile"} />
            </NavIconWrapper>
            <NavIconWrapper active={router.pathname === "/settings"}>
                <NavIcon route="settings" icon={Settings} page="Settings" active={router.pathname === "/settings"} />
            </NavIconWrapper>
        </BottomNavBar>
    )
}