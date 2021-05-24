import Head from "next/head";
import styled from "styled-components";
import IconNavBar from "../components/Navigation/IconNavBar";
import NewWorkoutLink from "../components/NewWorkoutLink";
import PageTitle from "../components/PageTitle";
import PastWorkoutDate from "../components/WorkoutOverview/PastWorkoutDate";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useAlert } from "react-alert";
import Spinner from "../components/Common/Spinner";
import { AiOutlineClose } from "react-icons/ai";
import { config } from "../components/Common/constants";

const PageWrapper = styled.div`
  font-family: Roboto, sans-serif;
`;
const RoutinesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;
const SpinnerContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
const Routine = styled.div`
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  color: ${({ theme }) => theme.workoutLogText};
  padding: 0.75rem 1.25rem;
  border-bottom: 0.1px solid lightgray;
  transition: background-color 250ms;
  transition-timing-function: linear;

  &:hover {
    background-color: #60a5fa;
    color: #ffffff;
  }
`;
const Exercise = styled.div`
  padding: 0.85rem 0;
  border-bottom: 0.1px solid lightgray;
  border-top: 0.1px solid lightgray;
`;
const ExerciseName = styled.div`
  font-weight: bold;
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

export default function Log() {
  const router = useRouter();

  const alert = useAlert();

  // Setting our state
  const [workout, setWorkout] = useState([]);
  const [workoutDate, setWorkoutDate] = useState("");
  const [modalDataExercises, setModalDataExercises] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [workoutCount, setWorkoutCount] = useState("");
  const [spinLoading, setSpinLoading] = useState(true);

  // Make the call to our api
  useEffect(() => {
    async function doFetch() {
      try {
        const res = await fetch(config.url.API_WORKOUT, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const body = await res.json();
        const workouts = body.workouts;
        workouts.reverse();
        setSpinLoading(false);
        setWorkout(workouts);
        setWorkoutCount(workouts.length);
      }
      catch(error) {
        console.log(error);
      }
    }
    doFetch();
  }, []);

  const updatedWorkouts = () => {
    async function doFetch() {
      const res = await fetch(config.url.API_WORKOUT, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const body = await res.json();
      const workouts = body.workouts;
      workouts.reverse();
      setSpinLoading(false);
      setWorkout(workouts);
      setWorkoutCount(workouts.length);
    }
    doFetch();
  };

  const deleteEntry = () => {
    let urlValue = router.query; // { id: 34 }
    let currentWorkoutID = urlValue.workoutId; // 34
    fetch(config.url.API_WORKOUT + "/" + currentWorkoutID, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      switch (res.status) {
        case 400:
          console.log("This is a 400 error.");
          break;
        case 429:
          console.log("This is a 429 error. Rate limit exceeded");
          break;
        case 201:
          res.json().then((data) => {
            // request sent
            console.log("this worked");
            alert.show("Entry deleted!");
            setModalIsOpen(false);
            updatedWorkouts();
          });
      }
    });
  };

  const prompt = () => {
    confirmAlert({
      title: "Are you sure?",
      message: "Are you sure you want to delete this workout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteEntry(),
        },
        {
          label: "No",
          // onClick: () => alert("Click No"),
        },
      ],
    });
  };

  const intl = new Intl.DateTimeFormat("en-AU", {});

  return (
    <PageWrapper>
      <Head>
        <title>Workout Tracker - Workout Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewWorkoutLink />
      <PageTitle name="Workout Log" />

      <main>
        <PastWorkoutDate
          WorkoutDate="Past Workouts"
          WorkoutQty={workoutCount}
        />
        <RoutinesContainer>
          {spinLoading ? (
            <SpinnerContainer>
              <Spinner loading={spinLoading} />
            </SpinnerContainer>
          ) : (
            <>
              {workout.map((workout, idx) => {
                return (
                  <>
                    <Routine
                      key={idx}
                      onClick={() => {
                        setModalIsOpen(true);
                        setModalData(workout.routine_name);
                        setModalDataExercises(workout.exercises);
                        setWorkoutDate(workout.workout_date);
                        router.push({
                          query: { workoutId: workout.workout_date },
                        });
                      }}
                    >
                      <div>{workout.routine_name}</div>
                      <div className="text-xs text-center opacity-50">
                        <p className="font-bold  text-right">
                          {new Intl.DateTimeFormat("en-AU", {
                            weekday: "long",
                          }).format(new Date(workout.workout_date))}
                        </p>
                        <p>
                          {new Intl.DateTimeFormat("en-AU", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }).format(new Date(workout.workout_date))}
                        </p>
                      </div>
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
                <h1 className="text-3xl font-bold pb-3">{modalData}</h1>
                {workoutDate && (
                  <h4>
                    {new Intl.DateTimeFormat("en-AU", {
                      weekday: "long",
                      hour: "numeric",
                      minute: "numeric",
                    }).format(new Date(workoutDate))}
                  </h4>
                )}
                {workoutDate && (
                  <h4 className="pb-4">
                    {new Intl.DateTimeFormat("en-AU", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }).format(new Date(workoutDate))}
                  </h4>
                )}
                {modalDataExercises.map((exercise) => {
                  return (
                    <Exercise key={exercise.exercise_id}>
                      <ExerciseName>{exercise.exercise_name}</ExerciseName>
                      <div>Weight: {exercise.weight}kg</div>
                      <div>Sets: {exercise.sets}</div>
                      <div>Reps: {exercise.reps}</div>
                    </Exercise>
                  );
                })}
                <div>
                  <button
                    type="submit"
                    className="rounded-md text-white my-3 w-full bg-red-400 hover:bg-red-700 hover:text-white py-2 font-bold transition duration-500 mt-5"
                    onClick={prompt}
                  >
                    Delete Workout
                  </button>
                </div>
              </StyledModal>
            </>
          )}
        </RoutinesContainer>
      </main>

      <IconNavBar />
    </PageWrapper>
  );
}
