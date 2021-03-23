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
                <Input
                    type="text"
                    placeholder="Exercise name..."
                    name="firstExerciseName"
                    ref={register({ required: true, minLength: 5, maxLength: 15 })}
                />
                <ErrorMessage>
                    {errors.firstExerciseName && 'This is incorrect'}
                </ErrorMessage>
                <select name="firstExerciseType" id="exercise_type" ref={register}>
                    <option selected="selected" disabled>Exercise Type</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                </select>
            </Group>

            <Group>
                <label> Exercise 2 : </label>
                <Input
                    type="text"
                    placeholder="Exercise name..."
                    name="secondExerciseName"
                    ref={register}
                />
                <select name="secondExerciseType" id="exercise_type" ref={register}>
                    <option selected="selected" disabled>Exercise Type</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                </select>
            </Group>

            <Group>
                <label> Exercise 3 : </label>
                <Input
                    type="text"
                    placeholder="Exercise name..."
                    name="thirdExerciseName"
                    ref={register}
                />
                <select name="thirdExerciseType" id="exercise_type" ref={register}>
                    <option selected="selected" disabled>Exercise Type</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                </select>
            </Group>

            <Group>
                <label> Exercise 4 : </label>
                <Input
                    type="text"
                    placeholder="Exercise name..."
                    name="fourthExerciseName"
                    ref={register}
                />
                <select name="fourthExerciseType" id="exercise_type" ref={register}>
                    <option selected="selected" disabled>Exercise Type</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                </select>
            </Group>

            <Group>
                <label> Exercise 5 : </label>
                <Input
                    type="text"
                    placeholder="Exercise name..."
                    name="fifthExerciseName"
                    ref={register}
                />
                <select name="fifthExerciseType" id="exercise_type" ref={register}>
                    <option selected="selected" disabled>Exercise Type</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                </select>
            </Group>


            <SubmitBtn type="submit">Add routine</SubmitBtn>
        </Form>
    )
}