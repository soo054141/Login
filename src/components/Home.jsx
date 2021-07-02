import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, Container } from "../AppWrapper";
import Login from "./Login";
import SignUp from "./SingUp";

function Home() {
    const history = useHistory();
    const LoginValidate = () => {
        if (sessionStorage.length !== 0) {
            history.push("/Login/greeting");
        }
    };

    useEffect(() => {
        LoginValidate();
    }, []);

    return (
        <Wrapper>
            <Container>
                <Login />
                <SignUp />
            </Container>
        </Wrapper>
    );
}

export default Home;
