import Head from "next/head";
import IconNavBar from "../components/Navigation/IconNavBar";
import PageTitle from "../components/PageTitle";
import NewRoutineLink from "../components/NewRoutineLink";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Modal from "react-modal";
import { AiOutlinePlus } from "react-icons/ai";
import Spinner from "../components/Common/Spinner";

const RoutinesContainer = styled.div`
  // border: 1px dashed blue;
  width: 100%;
  padding-left: 1.25rem;
  padding-bottom: 6.5rem;
  overflow: scroll;
  height: 80vh;
`;
const Routine = styled.p`
  font-size: 1.15rem;
  // border-top: 0.5px solid lightgray;
  border-bottom: 0.5px solid lightgray;
  // padding: 0.85rem 0;
  padding: 0.85rem 0;
  margin: 0;
  cursor: default;
`;
const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
const StyledModal = styled(Modal)`
  background: ${({ theme }) => theme.body};
  position: absolute;
  inset: 40px;
  border: 1px solid rgb(204, 204, 204);
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
`;

export default function Routines() {
  // Setting our state
  const router = useRouter();
  const [routine, setRoutine] = useState([]);
  const [modalDataExercises, setModalDataExercises] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [spinLoading, setSpinLoading] = useState(true);

  // Make the call to our api
  useEffect(() => {
    async function doFetch() {
      const res = await fetch("http://localhost:3000/routineExercise", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.status === 403) {
        console.log("403 error");
        ``;
        router.push("/");
      }
      setSpinLoading(false);
      const body = await res.json();
      let routineList = body.routineList;

      setRoutine(routineList);
    }

    doFetch();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Routines</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewRoutineLink />
      <PageTitle name="Routines" />

      <main>
        <RoutinesContainer>
          {spinLoading ? (
            <SpinnerContainer>
              <Spinner loading={spinLoading} />
            </SpinnerContainer>
          ) : (
            <>
              {routine.map((routine, idx) => {
                return (
                  <>
                    <Routine
                      key={idx}
                      onClick={() => {
                        setModalIsOpen(true);
                        setModalData(routine.routine_name);
                        setModalDataExercises(routine.routine_exercises);
                      }}
                    >
                      {routine.routine_name}
                    </Routine>
                  </>
                );
              })}
              <StyledModal isOpen={modalIsOpen} ariaHideApp={false}>
                <h1>{modalData}</h1>
                {modalDataExercises.map((exercise, idx) => {
                  return <p key={idx}>{exercise}</p>;
                })}
                <div>
                  <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
              </StyledModal>
            </>
          )}
        </RoutinesContainer>
      </main>

      <IconNavBar />

      <style jsx>{`
        .container {
          min-height: 100vh;
          //   padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          // padding: 5rem 0;
          // padding-bottom: 5rem;
          // border: 1px solid red;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          // justify-content: center;
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
