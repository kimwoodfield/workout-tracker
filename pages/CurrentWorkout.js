import Head from "next/head";
import styled from "styled-components";
import WorkoutForm from "../components/Forms/WorkoutForm";
import PageTitle from "../components/PageTitle";
import BackButton from "../components/Common/BackButton";
import React from "react";

const Container = styled.div`
  min-height: 100vh;
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
  box-sizing: border-box;
`;

const WorkoutFormWrapper = styled.main`
  width: 90%;
`;

export default function CurrentWorkout() {
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

      <WorkoutFormWrapper>
        <WorkoutForm />
      </WorkoutFormWrapper>
    </Container>
  );
}
