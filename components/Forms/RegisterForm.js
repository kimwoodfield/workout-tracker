import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { config } from "../Common/constants";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let username = data.username;
    let password = data.password;
    let fullname = data.fullname;
    let email = data.email;
    fetch(config.url.API_REGISTER, {
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
            break;
          case 401:
            break;
          case 429:
            break;
          case 201:
            localStorage.setItem("lastLoggedIn", username);
            localStorage.setItem("loggedIn", true);
            router.push("/");
            break;
        }
      })
      .catch((err) => {
        // Fetch couldn't send the request.
        // 500 Error
        console.log("Fetch failed");
      });
  };

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
        className="rounded-md text-white my-1 w-full bg-blue-400 hover:bg-blue-700 hover:text-white py-2 font-bold transition duration-500"
      >
        Sign up
      </button>
    </form>
  );
}
