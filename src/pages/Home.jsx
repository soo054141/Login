import React, { useEffect } from "react";
import { Wrapper, Container } from "../AppWrapper";
import LoginPage from "./LoginPage";
import SignUpPage from "./SingUpPage";

function Home() {
    const LoginValidate = () => {
        if (sessionStorage.length !== 0) {
            window.location.href = "/greeting";
        }
    };

    useEffect(() => {
        LoginValidate();
    }, []);
    return (
        <Wrapper>
            <Container>
                <LoginPage />
                <SignUpPage />
            </Container>
        </Wrapper>
    );
}

export default Home;
