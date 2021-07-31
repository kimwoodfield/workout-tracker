import styled from "styled-components";
import Input from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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
`;

export default function Routine() {
  const router = useRouter();
  const alert = useAlert();
  const { register, handleSubmit, errors } = useForm();

  const [exercise, setExercise] = useState([]);

  const onSubmit = (data) => {
    fetch(config.url.API_ROUTINES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
            alert.show("Routine added!");
            router.push("/routines");
          });
      }
    });
  };

  useEffect(() => {
    async function doFetch() {
      const res = await fetch(config.url.API_EXERCISES, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const body = await res.json();
      setExercise(body.exercisesResults);
    }

    doFetch();
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> Routine Name : </label>
        <Input
          type="text"
          placeholder="Routine name..."
          name="routine_name"
          ref={register}
        />
      </div>

      <Group>
        <label> Exercise 1 : </label>
        <select name="first_exercise" id="exercise_type" ref={register}>
          <option selected="selected" disabled>
            Select an exercise
          </option>
          {exercise.map((exercise, idx) => {
            return <option key={idx}>{exercise.exercise_name}</option>;
          })}
        </select>
      </Group>

      <Group>
        <label> Exercise 2 : </label>
        <select name="second_exercise" id="exercise_type" ref={register}>
          <option selected="selected" disabled>
            Select an exercise
          </option>
          {exercise.map((exercise, idx) => {
            return <option key={idx}>{exercise.exercise_name}</option>;
          })}
        </select>
      </Group>

      <Group>
        <label> Exercise 3 : </label>
        <select name="third_exercise" id="exercise_type" ref={register}>
          <option selected="selected" disabled>
            Select an exercise
          </option>
          {exercise.map((exercise, idx) => {
            return <option key={idx}>{exercise.exercise_name}</option>;
          })}
        </select>
      </Group>

      <Group>
        <label> Exercise 4 : </label>
        <select name="fourth_exercise" id="exercise_type" ref={register}>
          <option selected="selected" disabled>
            Select an exercise
          </option>
          {exercise.map((exercise, idx) => {
            return <option key={idx}>{exercise.exercise_name}</option>;
          })}
        </select>
      </Group>

      <Group>
        <label> Exercise 5 : </label>
        <select name="fifth_exercise" id="exercise_type" ref={register}>
          <option selected="selected" disabled>
            Select an exercise
          </option>
          {exercise.map((exercise, idx) => {
            return <option key={idx}>{exercise.exercise_name}</option>;
          })}
        </select>
      </Group>

      <SubmitBtn type="submit">Add routine</SubmitBtn>
    </Form>
  );
}
