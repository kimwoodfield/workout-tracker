import Head from "next/head";
import IconNavBar from "../components/Navigation/IconNavBar";
import NewWorkoutLink from "../components/NewWorkoutLink";
import PageTitle from "../components/PageTitle";
import PastWorkoutPreview from "../components/WorkoutOverview/PastWorkoutPreview";
import PastWorkoutDate from "../components/WorkoutOverview/PastWorkoutDate";
import { useRouter } from "next/router";

export default function Log() {
  const router = useRouter();

  const isAuthenticated = () => {
    fetch("http://localhost:3000/log", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        switch (res.status) {
          case 400:
            break;
          case 403:
            router.push("/");
            break;
          case 201:
            router.push("/log");
            break;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  isAuthenticated();

  return (
    <div className="container">
      <Head>
        <title>Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewWorkoutLink />
      <PageTitle name="Log" />

      <main>
        <PastWorkoutDate WorkoutDate="February 2021" WorkoutQty="2 Workouts" />
        <PastWorkoutPreview date="Wed 17" RoutineName="Shoulders" />
        <PastWorkoutPreview date="Tues 17" RoutineName="Back" />
        <PastWorkoutPreview date="Wed 17" RoutineName="Shoulders" />
        <PastWorkoutPreview date="Tues 17" RoutineName="Back" />
        <PastWorkoutPreview date="Wed 17" RoutineName="Shoulders" />
        <PastWorkoutPreview date="Tues 17" RoutineName="Back" />
        <PastWorkoutPreview date="Wed 17" RoutineName="Shoulders" />
        <PastWorkoutPreview date="Tues 17" RoutineName="Back" />
        <PastWorkoutPreview date="Wed 17" RoutineName="Shoulders" />
        <PastWorkoutPreview date="Tues 17" RoutineName="Back" />
        <PastWorkoutPreview date="Wed 17" RoutineName="Shoulders" />
        <PastWorkoutPreview date="Tues 17" RoutineName="Back" />
        <PastWorkoutPreview date="Tues 17" RoutineName="Back" />
      </main>

      <IconNavBar />
    </div>
  );
}
