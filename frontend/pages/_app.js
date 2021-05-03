import { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "../components/Themes/ThemeConfig";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Head from "next/head";
import React from 'react';

// optional configuration for react-alert
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
     </Head>
      <ThemeProvider theme={theme}>
        <AlertProvider template={AlertTemplate} {...options}>
          <GlobalStyles />
          {isMounted && <Component {...pageProps} />}
        </AlertProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
