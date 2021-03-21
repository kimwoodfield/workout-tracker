import Head from 'next/head'
import styled from 'styled-components';
import IconNavBar from '../components/Navigation/IconNavBar';
import NewWorkoutLink from '../components/NewWorkoutLink'
import PageTitle from '../components/PageTitle'
import SettingsButton from '../components/Common/SettingsButton'

import { useRouter } from 'next/router'

const Padding = styled.div`
  height: 4rem;
`

const LogoutButton = styled.button`
border: 1px solid lightgray;
border-radius: 5px;
background-color: white;
font-size: 1.15em;
height: 2.75rem;
width: 90%;
box-sizing: border-box;
padding: 0;
margin: 0;
text-align: left;
padding-left: 0.75rem;
`


export default function Settings() {

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

  const Logout = () => {
    console.log('function fired');
    fetch('http://localhost:3000/logout', {
      method: 'POST',
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
        case 200:
            console.log('we got a 200 back from the server')
            console.log(res.status.msg);
            alert('You have been logged out.');
            router.push('/');
            break;
    }
    })
    .catch(err => {
      console.log('fetch failed');
    })
  }



  return (
    <div className="container">
      <Head>
        <title>Settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Padding />
      <PageTitle name="Settings"/>

      <SettingsButton route="/" Name="Change theme" />
      <SettingsButton route="/" Name="Send feedback" />
      <LogoutButton onClick={Logout}>Logout</LogoutButton>

      <main>
        <div>

        </div>
      </main>

      <IconNavBar />

      <style jsx>{`
        .container {
          background-color: #fafafa;
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
          justify-content: center;
          align-items: center;
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
