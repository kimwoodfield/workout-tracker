import styled from 'styled-components'
import Input from './FormInput'
import SubmitBtn from './SubmitBtn'
import React, { useState, useEffect } from 'react'
import { useForm,  } from "react-hook-form";
import ErrorMessage from '../Common/ErrorMessage'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 18rem;
    padding-bottom: 1rem;
`

const Group = styled.div`
    padding: 0.5rem 0;
    margin: 0.5rem 0;
    // border: 1px dashed grey;
`

export default function Routine() {

    const { register, handleSubmit, errors } = useForm();

    const [exercise, setExercise] = useState([]);

    // Handles the form submission
    const onSubmit = (data) => {
        // If the input data is valid - 
        // Make a POST request to our api route with the input data
        fetch('http://localhost:3000/addroutine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include',
            })
            .then((res) => {
            switch(res.status) {
                case 400:
                    console.log('This is a 400 error.');
                    break;
                case 429:
                    console.log('This is a 429 error. Rate limit exceeded');
                    break;
                case 201:
                    res.json().then((data) => {
                        // request sent
                        console.log('this worked');
                    })
            }})
    }

    useEffect(() => {
        async function doFetch() {
          let url = 'http://localhost:3000/exercises';
          const res = await fetch('http://localhost:3000/exercises', { 
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
          });
          const body = await res.json();
          console.log('body is ...', body);
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
                    <option selected="selected" disabled>Select an exercise</option>
                        {exercise.map((exercise, idx) => {
                            return <option key={idx}>{exercise.exercise_name}</option>
                        })}
                </select>
            </Group>

            <Group>
                <label> Exercise 2 : </label>
                <select name="second_exercise" id="exercise_type" ref={register}>
                    <option selected="selected" disabled>Select an exercise</option>
                        {exercise.map((exercise, idx) => {
                            return <option key={idx}>{exercise.exercise_name}</option>
                        })}
                </select>
            </Group>

            <Group>
                <label> Exercise 3 : </label>
                <select name="third_exercise" id="exercise_type" ref={register}>
                    <option selected="selected" disabled>Select an exercise</option>
                        {exercise.map((exercise, idx) => {
                            return <option key={idx}>{exercise.exercise_name}</option>
                        })}
                </select>
            </Group>

            <Group>
                <label> Exercise 4 : </label>
                <select name="fourth_exercise" id="exercise_type" ref={register}>
                    <option selected="selected" disabled>Select an exercise</option>
                        {exercise.map((exercise, idx) => {
                            return <option key={idx}>{exercise.exercise_name}</option>
                        })}
                </select>
            </Group>

            <Group>
                <label> Exercise 5 : </label>
                <select name="fifth_exercise" id="exercise_type" ref={register}>
                    <option selected="selected" disabled>Select an exercise</option>
                        {exercise.map((exercise, idx) => {
                            return <option key={idx}>{exercise.exercise_name}</option>
                        })}
                </select>
            </Group>


            <SubmitBtn type="submit">Add routine</SubmitBtn>
        </Form>
    )
}