import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
  navbar: "#E5E7EB",
  pastWorkoutBar: "#E5E7EB",
  modalBackground: "#363537",
};

export const darkTheme = {
  body: "#111827",
  text: "#FAFAFA",
  workoutLogText: "#FFFFFF",
  workoutLogDivider: "#FFFFFF",
  toggleBorder: "#6B8096",
  background: "#999",
  navbar: "#4B5563",
  pastWorkoutBar: "#4B5563",
  modalBackground: "rgb(59 58 58)",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Roboto, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  },
`;
