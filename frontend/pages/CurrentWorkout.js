import Head from 'next/head'
import styled from 'styled-components';
import WorkoutForm from '../components/Forms/RoutineForm'
import PageTitle from '../components/PageTitle'
import BackButton from '../components/Common/BackButton'


const Container = styled.div`
    min-height: 100vh;
    background-color: #E0E0E0;
    // padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Padding = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0.85rem;
  height: 4rem;
  width: 100%;
  // border: 1px dashed salmon;
  box-sizing: border-box;
`
const NewRoutineForm = styled.form`
  width: 90%;
  padding-bottom: 4rem;
`
const AddExerciseContainer = styled.div`
  width: 91%;
`
const FormDivider = styled.div`
  height: auto;
  padding: 0.5rem 0;
  margin: 0;
`

export default function CurrentWorkout() {
  return (
    <Container>
      <Head>
        <title>Current Workout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Padding>
        <BackButton route="routines" text="Routines"/>
      </Padding>

      <PageTitle name="Current Workout" />
      

      <main>
        <div>

        <WorkoutForm />

        </div>
      </main>

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
    </Container>
  )
}
