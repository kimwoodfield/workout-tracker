import Head from "next/head";
import styled from "styled-components";
import IconNavBar from "../components/Navigation/IconNavBar";
import PageTitle from "../components/PageTitle";
import SettingsButton from "../components/Common/SettingsButton";
import { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "../components/Themes/ThemeConfig";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { config } from "../components/Common/constants";

const PageWrapper = styled.div`
  font-family: Roboto, sans-serif;
`;

const Padding = styled.div`
  height: 4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  color: grey;
  margin: 0 auto;

  ButtonContainer:nth-child(2) {
    background: red;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text};
  font-size: 1.15em;
  height: 2.75rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  text-align: left;
  padding-left: 0.75rem;

  &:nth-of-type(1) {
    border-bottom: none;
  }
  &:nth-of-type(2) {
    border-bottom: none;
  }
  &:nth-of-type(4) {
    border-top: none;
  }
`;

export default function Settings() {
  const [isMounted, setIsMounted] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
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
        console.log(res.status);
        switch (res.status) {
          case 400:
            console.log("400 error");
            break;
          case 401:
            console.log("401 error, user is unauthorized");
            setIsAdmin(false);
            router.push("/");
            break;
          case 403:
            console.log("403 error");
            router.push("/");
            break;
          case 200:
            console.log("the response code was ", res.status);
            console.log(res.status);
            break;
        }
      })
      .catch((err) => {
        console.log("fetch failed");
      });
  };
  isAuthenticated();

  const adminCheck = () => {
    fetch(config.url.API_ISADMIN, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        console.log(res.status);
        switch (res.status) {
          case 400:
            console.log("400 error");
            setIsAdmin(false);
            break;
          case 403:
            console.log("403 error");
            setIsAdmin(false);
            break;
          case 500:
            console.log("500 error");
            setIsAdmin(false);
            break;
          case 200:
            setIsAdmin(true);
            console.log("the response code was ", res.status);
            console.log(res.status.msg);
            break;
        }
      })
      .catch((err) => {
        console.log("fetch failed");
        console.log(err);
      });
  };
  adminCheck();

  const Logout = () => {
    console.log("function fired");
    fetch(config.url.API_LOGOUT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        switch (res.status) {
          case 400:
            console.log("400 error");
            break;
          case 403:
            console.log("403 error");
            router.push("/");
            break;
          case 201:
            localStorage.removeItem("lastLoggedIn");
            localStorage.setItem("loggedIn", false);
            console.log("we got a 200 back from the server");
            console.log(res.status.msg);
            router.push("/");
            break;
        }
      })
      .catch((err) => {
        console.log("fetch failed");
      });
  };

  const prompt = () => {
    confirmAlert({
      title: "Sad to see you go :(",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => Logout(),
        },
        {
          label: "No",
          // onClick: () => alert("Click No"),
        },
      ],
    });
  };

  return (
    <PageWrapper>
      <Head>
        <title>Settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Padding />
      <PageTitle name="Settings" />

      <ButtonContainer>
        <button
          type="submit"
          className="rounded-md text-white my-1 w-full bg-blue-400 hover:bg-blue-700 hover:text-white py-2 font-bold transition duration-500"
          onClick={darkmode.toggle}
        >
          Switch Mode
        </button>
        <button
          type="submit"
          className="rounded-md text-white my-1 w-full bg-blue-400 hover:bg-blue-700 hover:text-white py-2 font-bold transition duration-500"
        >
          Send Feedback
        </button>
        {
          // If a userType of "Admin" has not been set, the user cannot access this button.
          isAdmin ? (
            <Link href="/admin">
              <button
                type="submit"
                className="rounded-md text-white my-1 w-full bg-blue-400 hover:bg-blue-700 hover:text-white py-2 font-bold transition duration-500"
              >
                Admin Panel
              </button>
            </Link>
          ) : (
            <></>
          )
        }
        <button
          type="submit"
          className="rounded-md text-white my-1 w-full bg-red-400 hover:bg-red-700 hover:text-white py-2 font-bold transition duration-500 mt-5"
          onClick={prompt}
        >
          Logout
        </button>
      </ButtonContainer>

      <IconNavBar />
    </PageWrapper>
  );
}
