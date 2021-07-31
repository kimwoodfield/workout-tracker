import styled from "styled-components";
import Input from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import React from "react";
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
`;

export default function Routine() {
  const router = useRouter();
  const alert = useAlert();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    fetch(config.url.API_EXERCISES, {
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
        case 409:
          alert("This exercise already exists.");
          break;
        case 429:
          break;
        case 201:
          res.json().then((data) => {
            alert.show("Exercise added!");
            router.push("/exercises");
          });
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> Exercise Name : </label>
        <Input
          type="text"
          placeholder="Exercise name..."
          name="exercise_name"
          ref={register}
        />
      </div>

      <Group>
        <label> Exercise Type : </label>
        <select
          name="exercise_type"
          id="exercise_type"
          ref={register({ required: true })}
        >
          <option selected="selected" disabled>
            Exercise Type
          </option>
          <option value="Chest">Chest</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Back">Back</option>
          <option value="Legs">Legs</option>
          <option value="Arms">Arms</option>
        </select>
        <ErrorMessage>
          {errors.exercise_type && "This input is incorrect."}
        </ErrorMessage>
      </Group>

      <SubmitBtn type="submit">Add exercise</SubmitBtn>
    </Form>
  );
}
