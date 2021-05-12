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

const Padding = styled.div`
  height: 4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  color: grey;

  ButtonContainer:nth-child(2) {
    background: red;
  }
`;

const Button = styled.button`
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: white;
  font-size: 1.15em;
  height: 2.75rem;
  width: 90%;
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
    fetch("http://localhost:3000/log", {
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
          case 403:
            console.log("403 error");
            router.push("/");
            break;
          case 201:
            console.log("the response code was ", res.status);
            console.log(res.status.msg);
            router.push("/");
            break;
        }
      })
      .catch((err) => {
        console.log("fetch failed");
      });
  };
  isAuthenticated();

  const adminCheck = () => {
    fetch("http://localhost:3000/isAdmin", {
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
    fetch("http://localhost:3000/logout", {
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
    <div className="container">
      <Head>
        <title>Settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Padding />
      <PageTitle name="Settings" />

      <ButtonContainer>
        <Button onClick={darkmode.toggle}>Switch Mode</Button>
        <Button>Send feedback</Button>
        {
          // If a userType of "Admin" has not been set, the user cannot access this button.
          isAdmin ? (
            <Link href="/admin">
              <Button>Admin Panel</Button>
            </Link>
          ) : (
            <></>
          )
        }
        <Button onClick={prompt}>Logout</Button>
      </ButtonContainer>

      <main>
        <div></div>
      </main>

      <IconNavBar />

      <style jsx>{`
        .container {
          // background-color: #fafafa;
          min-height: 100vh;
          // padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 100%;
        }

        main {
          // padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
