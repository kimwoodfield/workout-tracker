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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.navbar};
  height: 40px;
  padding-left: 0.25rem;
  color: gray;
`

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
        <label className="font-bold"> Choose a routine : </label><br />
        <Select name="routine_name" id="exercise_type" ref={register}>
          <option selected="selected" disabled>
            Select a routine
          </option>
          {routines.map((routine, idx) => {
            return <option key={idx}>{routine.routine_name}</option>;
          })}
        </Select>
      </Group>

      <SubmitBtn type="submit">Begin Workout</SubmitBtn>
    </Form>
  );
}
