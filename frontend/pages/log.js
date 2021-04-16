import Head from "next/head";
import styled from "styled-components";
import IconNavBar from "../components/Navigation/IconNavBar";
import NewWorkoutLink from "../components/NewWorkoutLink";
import PageTitle from "../components/PageTitle";
import PastWorkoutDate from "../components/WorkoutOverview/PastWorkoutDate";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'

const RoutinesContainer = styled.div`
  // border: 1px dashed blue;
  width: 100%;
  padding-left: 1.25rem;
  padding-bottom: 6.5rem;
  // overflow: scroll;
  height: 100%;
`

const Routine = styled.p`
  font-size: 1.15rem;
  border-bottom: 0.5px solid lightgray;
  padding: 0.85rem 0;
  padding-right: 0.85rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
  cursor: default;
`

const Exercise = styled.div`
  padding: 0.85rem 0;
`

const ExerciseName = styled.div`
  font-weight: bold;
`

export default function Log() {
    const router = useRouter();

    // Setting our state
    const [workout, setWorkout] = useState([]);
    const [workoutDate, setWorkoutDate] = useState('');
    const [workoutID, setWorkoutID] = useState('');
    const [modalDataExercises, setModalDataExercises] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState('');
    const [workoutCount, setWorkoutCount] = useState('');

    // Make the call to our api
    useEffect(() => {
      async function doFetch() {
        const res = await fetch('http://localhost:3000/workout', { 
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
        });
        const body = await res.json();
        const workouts = body.workouts.reverse();
        console.log(workouts);
        console.log(workouts.length);
        setWorkout(workouts);
        setWorkoutCount(workouts.length);
      }
  
      doFetch();
    }, []);

    const deleteEntry = () => {
      let currentWorkoutID = urlValue.id;
      async function doFetch() {
        const res = await fetch('http://localhost:3000/workout/' + currentWorkoutID, { 
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
        });
        const body = await res.json();
        const workouts = body.workouts.reverse();
        console.log(workouts);
        console.log(workouts.length);
        setWorkout(workouts);
        setWorkoutCount(workouts.length);
      }
    }

  return (
    <div className="container">
      <Head>
        <title>Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewWorkoutLink />
      <PageTitle name="Log" />

      

      <main>
        <PastWorkoutDate WorkoutDate="Past Workouts" WorkoutQty={workoutCount} />
        <RoutinesContainer>
        <>
          {workout.map((workout, idx) => {
            return (
              <>
                <Routine key={idx} onClick={() => {setModalIsOpen(true); setModalData(workout.routine_name); setModalDataExercises(workout.exercises); setWorkoutDate(workout.workout_date); router.push({query:workout.workout_id})}}>
                  <div>{workout.routine_name}</div>
                  <div>{new Date(workout.workout_date).toLocaleString()}</div>
                  {console.log(workout.workout_id)}
                </Routine>
              </>
            )
          })}

          <Modal isOpen={modalIsOpen} ariaHideApp={false}>
            <h1>{modalData}</h1>
            <h4>{new Date(workoutDate).toLocaleString()}</h4>
            {modalDataExercises.map((exercise) => {
              return (
                <Exercise key={exercise.exercise_id}>
                  <ExerciseName>
                    {exercise.exercise_name}
                  </ExerciseName>
                  <div>
                    Weight: {exercise.weight}kg
                  </div>
                  <div>
                    Sets: {exercise.sets}
                  </div>
                  <div>
                    Reps: {exercise.reps}
                  </div>
                </Exercise>
              )
            })}
            <div>
              <button onClick={() => {setModalIsOpen(false); router.push({query:null}) }}>Close</button>
              <button>Delete</button>
            </div>
        </Modal>
        </>
        </RoutinesContainer>
      </main>

      <IconNavBar />

      <style jsx>{`
        .container {
          min-height: 100vh;
          // padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          // padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          padding-bottom: 7rem;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
