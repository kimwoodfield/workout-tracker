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

    const router = useRouter();

    // Setting the state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameErr, setUsernameErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});

    const [invalidUser, setInvalidUser] = useState("");
    const [invalidPass, setInvalidPass] = useState("");



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
                credentials: 'include',
                body: JSON.stringify({ username, password })
            })
            .then((res) => {
                switch(res.status) {
                    case 400:
                        console.log('400 works');
                        setInvalidPass('There was an error. Please try again later.');
                        break;
                    case 401:
                        console.log('401 works');
                        setInvalidPass('Invalid username and password.');
                        break;
                    case 429:
                        console.log('429 error');
                        setInvalidPass('Login limit exceeded. Please try again later');
                        break;
                    case 201:
                        router.push('/log');
                        break;
                }
        })
            .catch(err => {
                // Fetch couldn't send the request.
                // 500 Error
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
                    <ErrorMessage>{invalidUser}</ErrorMessage>
                    {Object.keys(usernameErr).map((key) => {
                       return <ErrorMessage>{usernameErr[key]}</ErrorMessage>
                   })}
            {/* <label for="password">Password : </label> */}
            <Input type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}/>
                    <ErrorMessage>{invalidPass}</ErrorMessage>
                    {Object.keys(passwordErr).map((key) => {
                       return <ErrorMessage>{passwordErr[key]}</ErrorMessage>
                   })}
            <SubmitBtn type="submit">Log In</SubmitBtn>
        </Form>
    )
}

export default LoginForm
