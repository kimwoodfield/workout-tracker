import styled from 'styled-components';
import Link from 'next/link'

export default function LoginForm() {

    const LoginForm = styled.form`
        display: flex;
        flex-direction: column;
        width: 18rem;
    `;

    const Divider = styled.p`
        width: 100%;
        height: 2.5rem;
        padding: 0;
        margin: 0.25rem 0;
    `;

    const Input = styled.input`
        font-size: 1rem;
        padding-left: 0.5rem;
        width: 100%;
        height: 100%;
        outline: none;
        border: 1px solid lightgray;
    `;

    const Login = styled.button`
        width: 100%;
        height: 100%;
        background-color: #6200EE;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        border: none;
    `;

    return (
        <LoginForm action="../pages/login" method="POST">
            <Divider>
                <Input type="text" placeholder="Username" />
            </Divider>

            <Divider>
                <Input type="password" placeholder="Password" />
            </Divider>

            <Divider>
                <Link href="log">
                    <Login type="submit">Login</Login>
                </Link>
            </Divider>
        </LoginForm>
    )
}