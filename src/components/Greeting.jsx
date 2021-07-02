import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, Container, Form } from "../AppWrapper";
import { Header, Title, Username, Logout } from "./styles/greeting-styles";

const Greeting = () => {
    const history = useHistory();
    const userId = sessionStorage.key(0);

    const LoginValidate = () => {
        if (sessionStorage.length !== 1) {
            alert("잘못된 접근입니다.");
            alert("메인 화면으로 이동합니다.");
            sessionStorage.clear();
            history.push("/Login");
        }
    };

    useEffect(() => {
        LoginValidate();
    }, []);

    const LogoutSubmit = (e) => {
        e.preventDefault();

        sessionStorage.clear();
        history.push("/Login");
    };

    return (
        <Wrapper>
            <Container>
                <Form>
                    <Header>인아이디어 컨텐츠몰</Header>
                    <Title>Welcome, {userId}님!</Title>
                    <Username>{userId}님은 로그인 상태입니다.</Username>
                    <Logout onClick={LogoutSubmit}>로그아웃</Logout>
                </Form>
            </Container>
        </Wrapper>
    );
};

export default Greeting;
