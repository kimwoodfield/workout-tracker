import Head from "next/head";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import AddWorkoutHeader from "../components/Common/AddWorkoutHeader";
import Input from "../components/Common/Input";
import TextButton from "../components/Common/TextButton";
import React, { useState, useEffect } from "react";
import ChooseRoutineForm from "../components/Forms/ChooseRoutineForm";
import BackButton from "../components/Common/BackButton";
import { config } from "../components/Common/constants";

const PageWrap = styled.div`
`

const FormWrap = styled.div`
  display: flex;
  justify-content: center;
`

const Padding = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0.85rem;
  height: 4rem;
  width: 100%;
  box-sizing: border-box;
`;

export default function AddWorkout() {
  useEffect(() => {
    async function doFetch() {
      const res = await fetch(config.url.API_ROUTINES, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const body = await res.json();
      console.log("body is ...", body);
    }

    doFetch();
  }, []);

  return (
    <PageWrap>
      <Head>
        <title>Add Workout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Padding>
        <BackButton route="log" text="Log" />
      </Padding>

      <PageTitle name="Start a workout" />

      <FormWrap>
        <ChooseRoutineForm />
      </FormWrap>

      <main>
        <div></div>
      </main>
    </PageWrap>
  );
}
