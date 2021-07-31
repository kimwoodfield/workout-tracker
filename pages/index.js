import Head from "next/head";
import Link from "next/link";
import LoginForm from "../components/Forms/LoginForm";
import styled from "styled-components";
import Title from "../components/Common/Title";
import PageWrapper from "../components/Common/PageWrapper";

const ContentWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SubTitle = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.5rem 0;
`;
const RegisterWrap = styled.div`
  padding-top: 1.5rem;
  font-family: Roboto, sans-serif;
`;

export default function Home() {
  return (
    <PageWrapper>
      <Head>
        <title>Workout Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentWrap>
        <Title />

        <SubTitle>Start your journey today</SubTitle>

        <LoginForm />

        <RegisterWrap>
          <p>
            Don't have an account?{" "}
            <Link href="/register">
              <a className="text-blue-400 font-bold hover:text-blue-700 transition duration-500">
                Register
              </a>
            </Link>
          </p>
        </RegisterWrap>
      </ContentWrap>
    </PageWrapper>
  );
}
