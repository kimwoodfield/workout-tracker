import React, { useState } from 'react'
import SubmitBtn from './SubmitBtn'
import Input from './FormInput'
import ErrorMessage from '../Common/ErrorMessage'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 18rem;
`

const RegisterForm = () => {

    // Setting the state
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [emailErr, setEmailErr] = useState({});
    const [fullnameErr, setFullnameErr] = useState({});
    const [usernameErr, setUsernameErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});


    // Prevents form from submitting normally on submit
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        // If the data that is input is valid -
        if (isValid) {
            // Send this data to the api
            setEmail('');
            setFullname('');
            setUsername('');
            setPassword('');
        }
    }

    /* Frontend form validation is handled here */
    const formValidation = () => {
        const emailErr = {};
        const fullnameErr = {};
        const usernameErr = {};
        const passwordErr = {};
        let isValid = true;

        // Regex to test email against
        let regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // If email is left empty or does not match the regex -
        if (email.length === 0) {
            emailErr.emailEmpty = "You must enter an email address.";
        } else if (!email.includes('@')) {
            emailErr.emailMissingSymb = "Invalid email. Email must have @";
        } else if (regexp.test(email) === false) {
            emailErr.emailWrongChars = "This is not a valid email address.";
            isValid = false;
        }

        // If full name is left empty or first letter of the full name isn't capitalized -
        if (fullname.length === 0) {
            fullnameErr.fullnameEmpty = "You must enter a full name.";
        } else if (fullname[0] !== fullname[0].toUpperCase()) {
            fullnameErr.startsLowercase = "First letter of full name needs to be capitalized.";
            isValid = false;
        } 

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
        setEmailErr(emailErr);
        setFullnameErr(fullnameErr);
        setUsernameErr(usernameErr);
        setPasswordErr(passwordErr);
        return isValid;
    }

    return (
        <Form onSubmit={onSubmit}>
            {/* <label for="email">Email : </label> */}
            <Input type="text" 
                   placeholder="Email"
                   value={email}
                   onChange={(e) => {setEmail(e.target.value)}}/>
                   {Object.keys(emailErr).map((key) => {
                       return <ErrorMessage>{emailErr[key]}</ErrorMessage>
                   })}
            {/* <label for="fullname">Full name : </label> */}
            <Input type="text" 
                   placeholder="Full name"
                   value={fullname}
                   onChange={(e) => {setFullname(e.target.value)}}/>
                   {Object.keys(fullnameErr).map((key) => {
                       return <ErrorMessage>{fullnameErr[key]}</ErrorMessage>
                   })}
            {/* <label for="username">Username : </label> */}
            <Input type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}/>
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
            <SubmitBtn type="submit">Sign up</SubmitBtn>
        </Form>
    )
}

export default RegisterForm;