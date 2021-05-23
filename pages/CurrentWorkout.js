import Head from "next/head";
import styled from "styled-components";
import WorkoutForm from "../components/Forms/WorkoutForm";
import PageTitle from "../components/PageTitle";
import BackButton from "../components/Common/BackButton";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  min-height: 100vh;
  // background-color: #E0E0E0;
  // padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Padding = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0.85rem;
  height: 4rem;
  width: 100%;
  // border: 1px dashed salmon;
  box-sizing: border-box;
`;

export default function CurrentWorkout() {
  const router = useRouter();

  const currentWorkoutID = router.query;

  return (
    <Container>
      <Head>
        <title>Current Workout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Padding>
        <BackButton route="AddWorkout" text="Workout" />
      </Padding>

      <PageTitle name="Current Workout" />

      <main>
        <WorkoutForm />
      </main>

      <style jsx global>{`
        html,
        body,
        main {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          width: 100%;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  );
}
