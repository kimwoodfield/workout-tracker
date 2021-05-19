const prod = {
  url: {
    API_CURRENTWORKOUT:
      "https://workout-tracker-next.herokuapp.com/currentWorkout",
    API_EXERCISES: "https://workout-tracker-next.herokuapp.com/exercises",
    API_ISADMIN: "https://workout-tracker-next.herokuapp.com/isAdmin",
    API_LOG: "https://workout-tracker-next.herokuapp.com/log",
    API_LOGIN: "https://workout-tracker-next.herokuapp.com/login",
    API_LOGOUT: "https://workout-tracker-next.herokuapp.com/logout",
    API_REGISTER: "https://workout-tracker-next.herokuapp.com/register",
    API_ROUTINEEXERCISE:
      "https://workout-tracker-next.herokuapp.com/routineExercise",
    API_ROUTINES: "https://workout-tracker-next.herokuapp.com/routines",
    API_USERS: "https://workout-tracker-next.herokuapp.com/users",
    API_WORKOUT: "https://workout-tracker-next.herokuapp.com/workout",
    API_WORKOUTEXERCISE:
      "https://workout-tracker-next.herokuapp.com/workoutExercise",
  },
};
const dev = {
  url: {
    API_CURRENTWORKOUT: "http://localhost:3000/currentWorkout",
    API_EXERCISES: "http://localhost:3000/exercises",
    API_ISADMIN: "http://localhost:3000/isAdmin",
    API_LOG: "http://localhost:3000/log",
    API_LOGIN: "http://localhost:3000/login",
    API_LOGOUT: "http://localhost:3000/logout",
    API_REGISTER: "http://localhost:3000/register",
    API_ROUTINEEXERCISE: "http://localhost:3000/routineExercise",
    API_ROUTINES: "http://localhost:3000/routines",
    API_USERS: "http://localhost:3000/users",
    API_WORKOUT: "http://localhost:3000/workout",
    API_WORKOUTEXERCISE: "http://localhost:3000/workoutExercise",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
