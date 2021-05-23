import { AiOutlineClockCircle } from "react-icons/ai";
import { BiDumbbell } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";

import styled from "styled-components";

import NavIcon from "./NavIcon";

import { useRouter } from "next/router";

const Clock = <AiOutlineClockCircle />;
const Dumbbell = <BiDumbbell />;
const Exercises = <CgNotes />;
const Settings = <IoSettingsOutline />;

const BottomNavBar = styled.div`
  background-color: ${({ theme }) => theme.navbar};
  height: 6rem;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  bottom: 0;
`;

const NavIconWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 25%;
  height: 100%;
  box-sizing: border-box;
`;

export default function IconNavBar() {
  const router = useRouter();

  return (
    <BottomNavBar>
      <NavIconWrapper active={router.pathname === "/log"}>
        <NavIcon
          route="log"
          icon={Clock}
          page="Log"
          active={router.pathname === "/log"}
        />
      </NavIconWrapper>
      <NavIconWrapper active={router.pathname === "/routines"}>
        <NavIcon
          route="routines"
          icon={Dumbbell}
          page="Routines"
          active={router.pathname === "/routines"}
        />
      </NavIconWrapper>
      <NavIconWrapper active={router.pathname === "/exercises"}>
        <NavIcon
          route="exercises"
          icon={Exercises}
          page="Exercises"
          active={router.pathname === "/exercises"}
        />
      </NavIconWrapper>
      <NavIconWrapper active={router.pathname === "/settings"}>
        <NavIcon
          route="settings"
          icon={Settings}
          page="Settings"
          active={router.pathname === "/settings"}
        />
      </NavIconWrapper>
    </BottomNavBar>
  );
}
