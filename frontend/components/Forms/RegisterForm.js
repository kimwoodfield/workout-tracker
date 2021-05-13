import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Router, useRouter } from "next/router";

const Button = styled.input`
  width: 100%;
  height: 35px;
  background-color: #3abed8;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  letter-spacing: 0.9px;
  margin: 4px 0;
  cursor: pointer;
`;

const Input = styled.input`
  color: #212121;
  background-color: white;
  font-size: 0.9rem;
  padding: 0 0 0 0.85rem;
  width: 90%;
  outline: none;
  border: none;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    let username = data.username;
    let password = data.password;
    let fullname = data.fullname;
    let email = data.email;
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, fullname, username, password }),
    })
      .then((res) => {
        switch (res.status) {
          case 400:
            console.log("400 works");
            // setInvalidPass("There was an error. Please try again later.");
            break;
          case 401:
            console.log("401 works");
            // setInvalidPass("Invalid username and password.");
            break;
          case 429:
            console.log("429 error");
            // setInvalidPass("Login limit exceeded. Please try again later");
            break;
          case 201:
            console.log("the response code was ", res.status);
            localStorage.setItem("lastLoggedIn", username);
            localStorage.setItem("loggedIn", true);
            router.push("/");
            break;
        }
      })
      .catch((err) => {
        // Fetch couldn't send the request.
        // 500 Error
        console.log("fetch failed");
      });
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 pt-5">
        <input
        type="email"
        placeholder="Enter email..."
        name="email"
            ref={register({
            required: "Email is required.",
            pattern: {
            value: /^\S+@\S+$/i,
            message: "Email must contain letters or numbers.",
            },
            minLength: {
            value: 8,
            message: "This input must exceed 8 characters",
            },
            maxLength: {
            value: 20,
            message: "This input must not exceed 20 characters",
            },
        })}
        className="text-black w-full w-11/12 p-2 h9 border border-gray-300 rounded-md"
        />
        <br />
        <p className="text-red-500 mb-2">
            {errors.email ? errors.email.message : <></>}
      </p>
        <input
            type="text"
            placeholder="Enter full name..."
            name="fullname"
            ref={register({
            required: "Full name is required.",
            pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: "Full name can only contian letters.",
            },
            minLength: {
            value: 5,
            message: "This input must exceed 5 characters",
            },
            maxLength: {
            value: 20,
            message: "This input must not exceed 20 characters",
            },
        })}
        className="text-black w-full w-11/12 p-2 h9 border border-gray-300 rounded-md"
        />
        <br />
        <p className="text-red-500 mb-2">
            {errors.fullname ? errors.fullname.message : <></>}
      </p>
      <input
        type="text"
        placeholder="Enter username..."
        name="username"
        ref={register({
          required: "Username is required.",
          pattern: {
            value: /^[A-Za-z0-9]+$/i,
            message: "Input must be letters or numbers.",
          },
          minLength: {
            value: 8,
            message: "This input must exceed 8 characters",
          },
          maxLength: {
            value: 13,
            message: "This input must not exceed 13 characters",
          },
        })}
        className="text-black w-full w-11/12 p-2 h9 border border-gray-300 rounded-md"
      />
      <br />
      <p className="text-red-500 mb-2">
        {errors.username ? errors.username.message : <></>}
      </p>
      <input
        type="password"
        placeholder="Enter password..."
        name="password"
        ref={register({
          required: "Password is required.",
          pattern: {
            value: /^[A-Za-z0-9]+$/i,
            message: "Input must be letters or numbers.",
          },
          minLength: {
            value: 8,
            message: "This input must exceed 8 characters",
          },
          maxLength: {
            value: 13,
            message: "This input must not exceed 13 characters",
          },
        })}
        className="text-black w-full w-11/12 p-2 h9 border border-gray-300 rounded-md"
      />
      <br />
      <p className="text-red-500 mb-2">
        {errors.password ? errors.password.message : <></>}
      </p>

      <button
        type="submit"
        className="rounded-md text-white my-1 w-full bg-blue-400 hover:bg-blue-700 hover:text-white py-2 font-bold"
      >Sign up</button>
    </form>
  );
}
