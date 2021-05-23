import styled from "styled-components";
import Input from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../Common/ErrorMessage";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";
import { config } from "../Common/constants";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 18rem;
  padding-bottom: 1rem;
`;

const Group = styled.div`
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  // border: 1px dashed grey;
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

export default function ChooseRoutineForm() {
  const router = useRouter();

  const alert = useAlert();

  const { register, handleSubmit, errors } = useForm();

  const [routines, setRoutines] = useState([]);

  // Handles the form submission
  const onSubmit = (data) => {
    // If the input data is valid -
    // Make a POST request to our api route with the input data
    fetch(config.url.API_WORKOUT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
            console.log(data);
            const workoutID = data.currentWorkoutID;
            alert.show("Workout started!");
            router.push({
              pathname: "/CurrentWorkout",
              query: { id: workoutID },
            });
          });
      }
    });
  };

  useEffect(() => {
    async function doFetch() {
      let url = API_ROUTINES;
      const res = await fetch(config.url.API_ROUTINES, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const body = await res.json();
      console.log("body is ...", body);
      setRoutines(body.routinesResults);
    }

    doFetch();
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <label> Choose a routine : </label>
        <select name="routine_name" id="exercise_type" ref={register}>
          <option selected="selected" disabled>
            Select a routine
          </option>
          {routines.map((routine, idx) => {
            return <option key={idx}>{routine.routine_name}</option>;
          })}
        </select>
      </Group>

      <SubmitBtn type="submit">Begin Workout</SubmitBtn>
    </Form>
  );
}
