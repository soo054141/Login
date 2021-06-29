import React from "react";
import { Wrapper, Container } from "../AppWrapper";
import LoginPage from "./LoginPage";
import SignUpPage from "./SingUpPage";

function Home() {
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
