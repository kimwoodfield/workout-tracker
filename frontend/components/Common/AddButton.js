import Link from "next/link";

import styled from "styled-components";

import { AiOutlinePlus } from "react-icons/ai";

const ButtonWrap = styled.span`
  padding: 0;
  margin: 0;
  color: #60a5fa;
  width: auto;
  font-size: 1.75rem;
  transition: transform 250ms;
  transition-timing-function: linear;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function AddButton(props) {
  return (
    <Link href={props.route}>
      <ButtonWrap>
        <AiOutlinePlus />
      </ButtonWrap>
    </Link>
  );
}
