import Head from "next/head";
import Link from "next/link";
import RegisterForm from "../components/Forms/RegisterForm";
import styled from "styled-components";
import Title from "../components/Common/Title";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;
const ContentWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SubTitle = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  text-align: center;
`;
const LoginWrap = styled.div`
  padding-top: 1.5rem;
  font-family: Roboto, sans-serif;
`;

export default function Register() {
  return (
    <PageWrapper>
      <Head>
        <title>Workout Tracker - Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentWrap>
        <Title />

        <SubTitle>Sign up to start tracking your workouts today</SubTitle>

        <RegisterForm />

        <LoginWrap>
          <p>
            Already have an account?{" "}
            <Link href="/">
              <a className="text-blue-400 font-bold hover:text-blue-700 transition duration-500">
                Log in
              </a>
            </Link>
          </p>
        </LoginWrap>
      </ContentWrap>
    </PageWrapper>
  );
}
