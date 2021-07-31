import Head from "next/head";
import styled from "styled-components";
import IconNavBar from "../components/Navigation/IconNavBar";
import NewExerciseLink from "../components/NewExerciseLink";
import PageTitle from "../components/PageTitle";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Spinner from "../components/Common/Spinner";
import { TiDelete } from "react-icons/ti";
import { confirmAlert } from "react-confirm-alert";
import { useAlert } from "react-alert";
import { config } from "../components/Common/constants";

const PageWrapper = styled.div`
  font-family: Roboto, sans-serif;
`;

const ExercisesContainer = styled.div`
  width: 100%;
  padding-left: 1.25rem;
  padding-bottom: 6.5rem;
  overflow: scroll;
  height: 80vh;
`;

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const Exercise = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid lightgray;
`;

const ExerciseName = styled.p`
  font-size: 1.15rem;
  padding: 0.85rem 0;
  margin: 0;
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

export default function Exercises() {
  const router = useRouter();

  const alert = useAlert();

  const [exercise, setExercise] = useState([]);
  const [spinLoading, setSpinLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

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
      const res = await fetch(config.url.API_EXERCISES, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.status === 403) {
        router.push("/");
      }
      setSpinLoading(false);
      const body = await res.json();
      setExercise(body.exercisesResults);
    }

    doFetch();
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  const deleteEntry = (id) => {
    fetch(config.url.API_EXERCISES + "/" + id, {
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
          break;
        case 201:
          res.json().then((data) => {
            alert.show("Exercise deleted!");
            updatedExercises();
          });
      }
    });
  };

  const prompt = (id) => {
    confirmAlert({
      title: "Are you sure?",
      message: "Are you sure you want to delete this exercise?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteEntry(id),
        },
        {
          label: "No",
          onClick: () => router.push({ query: null }),
        },
      ],
    });
  };

  const updatedExercises = () => {
    async function doFetch() {
      const res = await fetch(config.url.API_EXERCISES, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      setSpinLoading(false);
      const body = await res.json();
      setExercise(body.exercisesResults);
    }
    doFetch();
  };

  return (
    <PageWrapper>
      <Head>
        <title>Exercises</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isAdmin ? <NewExerciseLink /> : <ExerciseLinkSpace />}

      <PageTitle name="Exercises" />

      <ExercisesContainer>
        {spinLoading ? (
          <SpinnerContainer>
            <Spinner loading={spinLoading} />
          </SpinnerContainer>
        ) : (
          <>
            {exercise.map((exercise, idx) => {
              return (
                <Exercise>
                  <ExerciseName key={idx}>
                    {exercise.exercise_name}
                  </ExerciseName>
                  {isAdmin ? (
                    <span
                      className="pr-4 text-2xl text-red-500"
                      onClick={() => prompt(exercise.id)}
                    >
                      <TiDelete />
                    </span>
                  ) : (
                    <></>
                  )}
                </Exercise>
              );
            })}
          </>
        )}
      </ExercisesContainer>

      <IconNavBar />
    </PageWrapper>
  );
}
