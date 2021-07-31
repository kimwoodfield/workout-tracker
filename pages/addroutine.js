import Head from "next/head";
import styled from "styled-components";
import RoutineForm from "../components/Forms/RoutineForm";
import PageTitle from "../components/PageTitle";
import BackButton from "../components/Common/BackButton";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Padding = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0.85rem;
  height: 4rem;
  width: 100%;
  box-sizing: border-box;
`;

export default function AddRoutine() {
  return (
    <Container>
      <Head>
        <title>Add Routine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Padding>
        <BackButton route="routines" text="Routines" />
      </Padding>

      <PageTitle name="Unnamed routine" />

      <main>
        <div>
          <RoutineForm />
        </div>
      </main>
    </Container>
  );
}
