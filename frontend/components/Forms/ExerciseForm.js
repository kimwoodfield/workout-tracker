import styled from 'styled-components'
import Input from './FormInput'
import SubmitBtn from './SubmitBtn'
import React, { useState, useEffect } from 'react'
import { useForm,  } from "react-hook-form";
import ErrorMessage from '../Common/ErrorMessage'
import { useRouter } from 'next/router'

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

    const router = useRouter();

    const { register, handleSubmit, errors } = useForm();

    // Handles the form submission
    const onSubmit = (data) => {
        // If the input data is valid - 
        // Make a POST request to our api route with the input data
        fetch('http://localhost:3000/exercises', {
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
                case 409:
                    console.log('This exercise already exists.');
                    alert('This exercise already exists.');
                    break;
                case 429:
                    console.log('This is a 429 error. Rate limit exceeded');
                    break;
                case 201:
                    res.json().then((data) => {
                        // request sent
                        console.log('this worked');
                        alert('Exercise added!');
                        router.push('/exercises');
                        // Create an alert to say exercise was added!
                    })
            }})
    }

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
                <select name="exercise_type" id="exercise_type" ref={register({ required: true })}>
                    <option selected="selected" disabled>Exercise Type</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                </select>
                <ErrorMessage>
                    {errors.exercise_type && 'This input is incorrect.'}
                </ErrorMessage>
            </Group>

            <SubmitBtn type="submit">Add exercise</SubmitBtn>
        </Form>
    )
}