import styled from "styled-components";
import SubmitBtn from "./SubmitBtn";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  width: 90%;
  box-sizing: border-box;
  border: 2px dashed salmon;
  margin: 0 auto;
  align-items: center;
`;

const Group = styled.div`
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  width: 100%;
`;

export default function WorkoutForm() {
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm();

  const [routine, setRoutine] = useState([]);
  const [exercise, setExercise] = useState([]);

  let urlValue = router.query; // { id: 34 }
  let currentWorkoutID = urlValue.id; // 34

  const onSubmit = (data) => {
    fetch("http://localhost:3000/currentWorkout/" + currentWorkoutID, {
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
            alert("Workout complete!");
            router.push("/log");
          });
      }
    });
  };

  useEffect(() => {
    async function doFetch() {
      const res = await fetch(
        "http://localhost:3000/currentWorkout/" + currentWorkoutID,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const body = await res.json();
      console.log("body is ...", body);
      setExercise(body.currentWorkout.RoutineExercises);
      setRoutine(body.currentWorkout.RoutineName);
    }

    doFetch();
  }, []);

  let currentDate = new Date().toLocaleString();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* <Group>
        <p>{routine}</p>
        <p>{currentDate}</p>
      </Group>

      <Group>
        <label>{exercise[0]}</label>
        <br />
        <input
          ref={register({
            required: true,
            maxLength: 6,
            pattern: /^\d+$/,
          })}
          type="number"
          name="firstExercise_weight"
          placeholder="Enter weight in KG..."
        />
        {errors.firstExercise_weight && "Invalid input"}
        <br />
        <input
          ref={register({ required: true, max: 4 })}
          type="number"
          name="firstExercise_sets"
          placeholder="Enter sets..."
        />
        {errors.firstExercise_sets && "Invalid input"}
        <br />
        <input
          ref={register({ required: true, max: 40 })}
          type="number"
          name="firstExercise_reps"
          placeholder="Enter reps..."
        />
        {errors.firstExercise_reps && <span>Invalid input</span>}
        <br />
      </Group>
      <Group>
        <label>{exercise[1]}</label>
        <br />
        <input
          ref={register({
            required: true,
            maxLength: 6,
            pattern: /^\d+$/,
          })}
          type="number"
          name="secondExercise_weight"
          placeholder="Enter weight in KG..."
        />
        {errors.secondExercise_weight && "Invalid input"}
        <br />
        <input
          ref={register({ required: true, max: 4 })}
          type="number"
          name="secondExercise_sets"
          placeholder="Enter sets..."
        />
        {errors.secondExercise_sets && "Invalid input"}
        <br />
        <input
          ref={register({ required: true, max: 40 })}
          type="number"
          name="secondExercise_reps"
          placeholder="Enter reps..."
        />
        {errors.secondExercise_reps && <span>Invalid input</span>}
        <br />
      </Group>
      <Group>
        <label>{exercise[2]}</label>
        <br />
        <input
          ref={register({
            required: true,
            maxLength: 6,
            pattern: /^\d+$/,
          })}
          type="number"
          name="thirdExercise_weight"
          placeholder="Enter weight in KG..."
        />
        {errors.thirdExercise_weight && "Invalid input"}
        <br />
        <input
          ref={register({ required: true, max: 4 })}
          type="number"
          name="thirdExercise_sets"
          placeholder="Enter sets..."
        />
        {errors.thirdExercise_sets && "Invalid input"}
        <br />
        <input
          ref={register({ required: true, max: 40 })}
          type="number"
          name="thirdExercise_reps"
          placeholder="Enter reps..."
        />
        {errors.thirdExercise_reps && <span>Invalid input</span>}
        <br />
      </Group>
      <Group>
        <label>{exercise[3]}</label>
        <br />
        <input
          ref={register({
            required: true,
            maxLength: 6,
            pattern: /^\d+$/,
          })}
          type="number"
          name="fourthExercise_weight"
          placeholder="Enter weight in KG..."
        />
        {errors.fourthExercise_weight && "Invalid input"}
        <br />
        <input
          ref={register({ required: true, max: 4 })}
          type="number"
          name="fourthExercise_sets"
          placeholder="Enter sets..."
        />
        {errors.fourthExercise_sets && "Invalid input"}
        <br />
        <input
          ref={register({ required: true, max: 40 })}
          type="number"
          name="fourthExercise_reps"
          placeholder="Enter reps..."
        />
        {errors.fourthExercise_reps && <span>Invalid input</span>}
        <br />
      </Group>
      <Group>
        <label>{exercise[4]}</label>
        <br />
        <input
          ref={register({
            required: true,
            maxLength: 6,
            pattern: /^\d+$/,
          })}
          type="number"
          name="fifthExercise_weight"
          placeholder="Enter weight in KG..."
        />
        {errors.fifthExercise_weight && "Invalid input"}
        <br />
        <input
          ref={register({ required: true, max: 4 })}
          type="number"
          name="fifthExercise_sets"
          placeholder="Enter sets..."
        />
        {errors.fifthExercise_sets && "Invalid input"}
        <br />
        <input
          ref={register({ required: true, max: 40 })}
          type="number"
          name="fifthExercise_reps"
          placeholder="Enter reps..."
        />
        {errors.fifthExercise_reps && <span>Invalid input</span>}
        <br />
      </Group> */}

      <div>
        <div>{routine}</div>
        <div>
          <p>Start Time</p>
          <input
            ref={register}
            name="currentDate"
            value={currentDate}
            disabled
          />
        </div>
      </div>

      {exercise.map((exercise, idx) => {
        return (
          <Group key={idx}>
            <label>{exercise}</label>
            <div>
              <label>Weight : </label>
              <input
                ref={register({
                  required: true,
                  maxLength: 6,
                  pattern: /^\d+$/,
                })}
                name={`${idx}_weight`}
                placeholder="Enter weight..."
              />
            </div>
            <div>
              <label>Sets: </label>
              <input
                ref={register({ required: true, max: 4 })}
                name={`${idx}_sets`}
                placeholder="Enter sets..."
              />
            </div>
            <div>
              <label>Reps: </label>
              <input
                ref={register({ required: true, max: 40 })}
                name={`${idx}_reps`}
                placeholder="Enter reps..."
              />
            </div>
          </Group>
        );
      })}

      <SubmitBtn type="submit">Finish workout</SubmitBtn>
    </Form>
  );
}
