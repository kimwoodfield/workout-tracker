import Head from "next/head";
import IconNavBar from "../components/Navigation/IconNavBar";
import PageTitle from "../components/PageTitle";
import NewRoutineLink from "../components/NewRoutineLink";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Modal from "react-modal";
import Spinner from "../components/Common/Spinner";
import { AiOutlineClose } from "react-icons/ai";
import { useAlert } from "react-alert";
import { confirmAlert } from "react-confirm-alert";
import { config } from "../components/Common/constants";

const PageWrapper = styled.div`
  font-family: Roboto, sans-serif;
`;

const RoutinesContainer = styled.div`
  width: 100%;
  padding-left: 1.25rem;
  padding-bottom: 6.5rem;
  overflow: scroll;
  height: 80vh;
`;
const Routine = styled.p`
  font-size: 1.15rem;
  border-bottom: 0.5px solid lightgray;
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
  inset: 0px;
  overflow: auto;
  outline: none;
  padding: 20px;
  padding-top: 3rem;
`;

const CloseButton = styled.div`
  color: #60a5fa;
  font-size: 2rem;
  position: absolute;
  right: 0;
  padding-right: 1rem;
  top: 0;
  padding-top: 1rem;
  cursor: pointer;
  transition: transform 250ms;
  transition-timing-function: linear;

  &:hover {
    transform: scale(1.1);
  }
`;

const ExerciseLinkSpace = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.75rem;
  padding-top: 1rem;
  box-sizing: border-box;
`;

export default function Routines() {
  // Setting our state
  const router = useRouter();
  const [routine, setRoutine] = useState([]);
  const [modalDataExercises, setModalDataExercises] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [spinLoading, setSpinLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const alert = useAlert();

  const adminCheck = () => {
    fetch(config.url.API_ISADMIN, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        switch (res.status) {
          case 400:
            setIsAdmin(false);
            break;
          case 401:
            setIsAdmin(false);
            router.push("/");
            break;
          case 403:
            setIsAdmin(false);
            break;
          case 500:
            setIsAdmin(false);
            break;
          case 200:
            setIsAdmin(true);
            break;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  adminCheck();

  useEffect(() => {
    async function doFetch() {
      const res = await fetch(config.url.API_ROUTINEEXERCISE, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.status === 403) {
        router.push("/");
      }
      if (res.status === 204) {
        let emptyResults = [];
        setRoutine(emptyResults);
      }
      setSpinLoading(false);
      const body = await res.json();
      let routineList = body.routineList;
      setRoutine(routineList);
    }

    doFetch();
  }, []);

  const updatedRoutines = () => {
    async function doFetch() {
      const res = await fetch(config.url.API_ROUTINES, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      setSpinLoading(false);
      const body = await res.json();
      let routineList = body.routineList;
      setRoutine(routineList);
    }
    doFetch();
  };

  const deleteEntry = () => {
    let urlValue = router.query; // { id: 34 }
    let currentWorkoutID = urlValue.routineId; // 34
    fetch(config.url.API_ROUTINES + "/" + currentWorkoutID, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      switch (res.status) {
        case 400:
          break;
        case 429:
          console.log("Rate limit exceeded");
          break;
        case 201:
          res.json().then((data) => {
            alert.show("Entry deleted!");
            setModalIsOpen(false);
            updatedRoutines();
          });
      }
    });
  };

  const prompt = () => {
    confirmAlert({
      title: "Are you sure?",
      message: "Are you sure you want to delete this routine?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteEntry(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <PageWrapper>
      <Head>
        <title>Routines</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isAdmin ? <NewRoutineLink /> : <ExerciseLinkSpace />}

      <PageTitle name="Routines" />

      <main>
        <RoutinesContainer>
          {spinLoading ? (
            <SpinnerContainer>
              <Spinner loading={spinLoading} />
            </SpinnerContainer>
          ) : (
            <>
              {routine ? (
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
                            router.push({
                              query: { routineId: routine.routine_id },
                            });
                          }}
                        >
                          {routine.routine_name}
                        </Routine>
                      </>
                    );
                  })}
                  <StyledModal isOpen={modalIsOpen} ariaHideApp={false}>
                    <div>
                      <CloseButton
                        onClick={() => {
                          setModalIsOpen(false);
                          router.push({ query: null });
                        }}
                      >
                        <AiOutlineClose />
                      </CloseButton>
                    </div>
                    <h1 className="text-3xl font-bold pb-3 border-b-2 mb-4">
                      {modalData}
                    </h1>
                    {modalDataExercises.map((exercise, idx) => {
                      return (
                        <p key={idx} className="py-2">
                          <span className="font-bold">Exercise {idx + 1}.</span>{" "}
                          <span className="pl-3">{exercise}</span>
                        </p>
                      );
                    })}
                    {isAdmin ? (
                      <>
                        <div className="border-t-2 mt-4">
                          <button
                            type="submit"
                            className="rounded-md text-white my-3 w-full bg-red-400 hover:bg-red-700 hover:text-white py-2 font-bold transition duration-500 mt-5"
                            onClick={prompt}
                          >
                            Delete Routine
                          </button>
                        </div>
                      </>
                    ) : (
                      <ExerciseLinkSpace />
                    )}
                  </StyledModal>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </RoutinesContainer>
      </main>
      <IconNavBar />
    </PageWrapper>
  );
}
