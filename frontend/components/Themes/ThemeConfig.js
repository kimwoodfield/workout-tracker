import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
  navbar: "#eceaea",
  pastWorkoutBar: "#ededed",
  modalBackground: "#363537",
};

export const darkTheme = {
  body: "black",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
  navbar: "#444444",
  pastWorkoutBar: "#444444",
  modalBackground: "rgb(59 58 58)",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  },
`;
