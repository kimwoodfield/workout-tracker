import { config } from "../components/Common/constants";

export const checkAdminStatus = async () => {
  try {
    const response = await fetch(config.url.API_ISADMIN, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getExercises = async () => {
  try {
    const response = await fetch(config.url.API_EXERCISES, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const removeExercise = async (currentExerciseId: number) => {
  try {
    const response = await fetch(`${config.url.API_EXERCISES}/${currentExerciseId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};