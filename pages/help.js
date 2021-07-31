import Head from "next/head";
import styled from "styled-components";
import IconNavBar from "../components/Navigation/IconNavBar";
import PageTitle from "../components/PageTitle";
import { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../components/Themes/ThemeConfig";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useRouter } from "next/router";
import { config } from "../components/Common/constants";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

const PageWrapper = styled.div`
  font-family: Roboto, sans-serif;
`;

const Padding = styled.div`
  height: 4rem;
`;

const HelpSection = styled.main`
  padding: 0 1rem;
`;

const HelpWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  height: 33.5rem;
  padding-bottom: 1rem;
  width: 100%;
  justify-content: center;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.navbar};
  border-radius: 10px;
  margin: 0.5rem;
  padding: 1rem;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    background-color: #60a5fa;
    color: #ffffff;
  }
`;

export default function Settings() {
  const [isMounted, setIsMounted] = useState(false);
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  const isAuthenticated = () => {
    fetch(config.url.API_LOG, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        switch (res.status) {
          case 400:
            break;
          case 401:
            setIsAdmin(false);
            router.push("/");
            break;
          case 403:
            router.push("/");
            break;
          case 200:
            break;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  isAuthenticated();

  return (
    <PageWrapper>
      <Head>
        <title>Help</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Padding />
      <PageTitle name="Need help?" />
      <HelpSection>
        <p className="pb-3">
          Having some trouble understanding some of our UI elements? Let us help
          you out!
        </p>
        <HelpWrapper>
          <Card>
            <button className="text-5xl text-center pb-2">
              <AiOutlinePlus />
            </button>
            <p>
              You might have seen this icon around the app. This is a button
              that lets you add something. It could be a workout, routine or
              exercise but all it represents is the ability to add something!
            </p>
          </Card>
          <Card>
            <button className="text-5xl text-center pb-2">
              <AiOutlineClose />
            </button>
            <p>
              Does this icon seem familiar? This is a close button! You might
              notice this on areas of the app where a modal or popup appears.
              This icon indicates the ability to close something. Next time you
              find yourself on a page with this icon, remember that you can use
              this button to close the current page.
            </p>
          </Card>
          <Card>
            <button className="text-5xl text-center pb-2">
              <IoIosArrowBack />
            </button>
            <p>
              Have you seen this icon? <br />
              This is our back button! You may occasionally see this icon when
              attempting to create a new workout. This just represents the
              ability to return to the previous page. Consider this button your
              way back!
            </p>
          </Card>
        </HelpWrapper>
      </HelpSection>
      <IconNavBar />
    </PageWrapper>
  );
}
