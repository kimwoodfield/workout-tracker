import Head from 'next/head'
import styled from 'styled-components';
import IconNavBar from '../components/Navigation/IconNavBar';
import NewWorkoutLink from '../components/NewWorkoutLink'
import PageTitle from '../components/PageTitle'
import PastWorkoutPreview from '../components/WorkoutOverview/PastWorkoutPreview'
import PastWorkoutDate from '../components/WorkoutOverview/PastWorkoutDate'
import { useRouter } from 'next/router'

import { AiOutlinePlus } from "react-icons/ai";


export default function Log() {

  // Enable router
  const router = useRouter();

  const isAuthenticated = () => {
    fetch('http://localhost:3000/log', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    .then((res) => {
      switch(res.status) {
        case 400:
            console.log('400 error');
            break;
        case 403:
            console.log('403 error');
            router.push('/');
            break;
        case 201:
            console.log(res.status.msg);
            router.push('/log');
            break;
    }
    })
    .catch(err => {
      console.log('fetch failed');
    })
  }

  isAuthenticated();

  return (
    <div className="container">
      <Head>
        <title>Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewWorkoutLink />
      <PageTitle name="Log"/>

      <main>
        <PastWorkoutDate WorkoutDate="February 2021" WorkoutQty="2 Workouts"/>
        <PastWorkoutPreview date="Wed 17" RoutineName="Shoulders"/>
        <PastWorkoutPreview date="Tues 17" RoutineName="Back"/>
        <PastWorkoutPreview date="Wed 17" RoutineName="Shoulders"/>
        <PastWorkoutPreview date="Tues 17" RoutineName="Back"/>
        <PastWorkoutPreview date="Wed 17" RoutineName="Shoulders"/>
        <PastWorkoutPreview date="Tues 17" RoutineName="Back"/>
        <PastWorkoutPreview date="Wed 17" RoutineName="Shoulders"/>
        <PastWorkoutPreview date="Tues 17" RoutineName="Back"/>
        <PastWorkoutPreview date="Wed 17" RoutineName="Shoulders"/>
        <PastWorkoutPreview date="Tues 17" RoutineName="Back"/>
        <PastWorkoutPreview date="Wed 17" RoutineName="Shoulders"/>
        <PastWorkoutPreview date="Tues 17" RoutineName="Back"/>
        <PastWorkoutPreview date="Tues 17" RoutineName="Back"/>
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
  )
}
