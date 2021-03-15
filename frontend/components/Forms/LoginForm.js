import React, { useState } from 'react'
import SubmitBtn from './SubmitBtn'
import Input from './FormInput'
import ErrorMessage from '../Common/ErrorMessage'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 18rem;
`

const LoginForm = () => {

    const router = useRouter()

    // Setting the state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameErr, setUsernameErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});

    const [invalidLogin, setInvalidLogin] = useState("");

    const [ submitting, setSubmitting ] = useState(false);

    // Handles the form submission
    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        const isValid = formValidation();
        // If the input data is valid -
        if (isValid) {
            // Send this data to the api
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
                // credentials: "include"
            })
            .then(res => res.json()) // parse the response as JSON
            .then(data => {
                // Request sent.
                if (data.status === 401) {
                    setInvalidLogin("Invalid login - This user does not exist.");
                    e.preventDefault();
                }
                if (data.ok === false) {
                    // if the response is a 401, block the submission..
                    console.log(data);
                    console.log(data.msg);
                    e.preventDefault();
                } else {
                    // if the response is not a 401, allow the submission.
                    console.log(data.msg);
                    alert(data.msg);
                    setUsername('');
                    setPassword('');
                    router.push('/log');
                }
            })
            .catch(err => {
                // Fetch couldn't send the request.
                console.log('fetch failed');
            })
        } else {
            e.preventDefault();
        }
    }

    /* Frontend form validation is handled here */
    const formValidation = () => {
        const usernameErr = {};
        const passwordErr = {};
        let isValid = true;

        // If username is left empty or length of the username is less than five characters -
        if (username.length === 0) {
            usernameErr.usernameEmpty = "You must enter a username.";
        } else if (username.length < 5) {
            usernameErr.usernameShort = "Username needs to be 5 or more characters.";
            isValid = false;
        }

        // If the length of the password is less than three characters -
        if (password.length === 0) {
            passwordErr.passwordEmpty = "You must enter a password.";
        } else if (password.length < 4) {
            passwordErr.passwordShort = "Password needs to be 4 or more characters.";
            isValid = false;
        }

        // Update error objects
        setUsernameErr(usernameErr);
        setPasswordErr(passwordErr);
        return isValid;
    }

    return (
        <Form onSubmit={onSubmit}>
            {/* <label for="username">Username : </label> */}
            <Input type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}/>
                    <ErrorMessage>{invalidLogin}</ErrorMessage>
                    {Object.keys(usernameErr).map((key) => {
                       return <ErrorMessage>{usernameErr[key]}</ErrorMessage>
                   })}
            {/* <label for="password">Password : </label> */}
            <Input type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}/>
                    {Object.keys(passwordErr).map((key) => {
                       return <ErrorMessage>{passwordErr[key]}</ErrorMessage>
                   })}
            <SubmitBtn type="submit">Log In</SubmitBtn>
        </Form>
    )
}

export default LoginForm
