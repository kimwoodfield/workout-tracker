import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";
import { config } from "../Common/constants";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  box-sizing: border-box;
  margin: 0 auto;
  align-items: center;
`;

const HeaderInfo = styled.div`
  background-color: ${({ theme }) => theme.navbar};
  border-radius: 7px;
  padding: 25px;
  align-self: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

const SetInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0.25rem 0;
  align-items: center;
`;

const ExerciseInput = styled.input`
  color: gray;
  margin-right: 50px;
  padding-left: 7px;
  border-radius: 7px;
  height: 30px;
`;

const Group = styled.div`
  background-color: ${({ theme }) => theme.navbar};
  border-radius: 7px;
  padding: 0.5rem 0;
  padding-left: 10px;
  margin: 0.5rem 0;
  width: 100%;
`;

export default function WorkoutForm() {
  const router = useRouter();
  const alert = useAlert();
  const { register, handleSubmit, errors } = useForm();

  const [routine, setRoutine] = useState([]);
  const [exercise, setExercise] = useState([]);

  let urlValue = router.query;
  let currentWorkoutID = urlValue.id;

  const onSubmit = (data) => {
    fetch(config.url.API_CURRENTWORKOUT + "/" + currentWorkoutID, {
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
          break;
        case 201:
          res.json().then((data) => {
            alert.show("Workout complete!");
            router.push("/log");
          });
      }
    });
  };

  useEffect(() => {
    async function doFetch() {
      const res = await fetch(
        config.url.API_CURRENTWORKOUT + "/" + currentWorkoutID,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const body = await res.json();
      setExercise(body.currentWorkout.RoutineExercises);
      setRoutine(body.currentWorkout.RoutineName);
    }

    doFetch();
  }, []);

  let currentDate = new Date().toLocaleString();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <HeaderInfo>
        <div className="font-bold text-lg">{routine}</div>
        <div>
          <p>Start Time</p>
          <input
            ref={register}
            name="currentDate"
            value={currentDate}
            disabled
          />
        </div>
      </HeaderInfo>

      {exercise.map((exercise, idx) => {
        return (
          <Group key={idx}>
            <label className="font-bold text-md">
              Ex {idx + 1}. {exercise}
            </label>
            <SetInfo className="pt-4">
              <label>Weight: </label>
              <ExerciseInput
                ref={register({
                  required: "Input is required.",
                  maxLength: 6,
                  pattern: /^\d+$/,
                })}
                name={`${idx}_weight`}
                placeholder="Enter weight..."
              />
            </SetInfo>
            <p className="text-red-500 mb-3">
              {errors[`${idx}_weight`] ? (
                errors[`${idx}_weight`].message
              ) : (
                <></>
              )}
            </p>
            <SetInfo>
              <label>Sets: </label>
              <ExerciseInput
                ref={register({
                  required: "Input is required.",
                  max: 4,
                })}
                name={`${idx}_sets`}
                placeholder="Enter sets..."
              />
            </SetInfo>
            <p className="text-red-500 mb-3">
              {errors[`${idx}_sets`] ? errors[`${idx}_sets`].message : <></>}
            </p>
            <SetInfo>
              <label>Reps: </label>
              <ExerciseInput
                ref={register({
                  required: "Input is required.",
                  max: 40,
                })}
                name={`${idx}_reps`}
                placeholder="Enter reps..."
              />
            </SetInfo>
            <p className="text-red-500 mb-3">
              {errors[`${idx}_reps`] ? errors[`${idx}_reps`].message : <></>}
            </p>
          </Group>
        );
      })}

      <button
        type="submit"
        className="rounded-md text-white my-1 w-full bg-blue-400 hover:bg-blue-700 hover:text-white py-2 font-bold transition duration-500"
      >
        Finish workout
      </button>
    </Form>
  );
}
