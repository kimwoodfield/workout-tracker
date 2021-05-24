import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { config } from "../Common/constants";

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
    fetch(config.url.API_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => {
        switch (res.status) {
          case 400:
            console.log("400 works");
            setInvalidPass("There was an error. Please try again later.");
            break;
          case 401:
            console.log("401 works");
            setInvalidPass("Invalid username and password.");
            break;
          case 429:
            console.log("429 error");
            setInvalidPass("Login limit exceeded. Please try again later");
            break;
          case 201:
            console.log("the response code was ", res.status);
            localStorage.setItem("lastLoggedIn", username);
            localStorage.setItem("loggedIn", true);
            router.push("/log");
            break;
        }
      })
      .catch((error) => {
        // Fetch couldn't send the request.
        // 500 Error
        console.log("fetch failed");
        console.log(error);
      });
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 pt-5">
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
        className="rounded-md text-white my-1 w-full bg-blue-400 hover:bg-blue-700 hover:text-white py-2 font-bold transition duration-500"
      >
        Login
      </button>
    </form>
  );
}
