import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
    Wrapper,
    LoginWrapper,
    LoginHeader,
    LoginContent,
    LoginTitle,
    InputWithLabel,
    LoginBtn,
} from "./styles/login-styles";

const Login = () => {
    const history = useHistory();
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const isLoggedID = (e) => {
        setInputId(e.target.value);
    };

    const isLoggedPW = (e) => {
        setInputPw(e.target.value);
    };

    const validate = () => {
        const getUser = localStorage.getItem(inputId);

        if (getUser === inputPw) {
            alert("로그인 되었습니다.");
            sessionStorage.setItem(inputId, true);
            history.push("/Login/greeting");
        } else {
            alert("아이디/비밀번호가 일치하지 않습니다.");
        }
    };

    const loginSubmit = (e) => {
        e.preventDefault();

        if (inputId && inputPw) {
            validate();
        }
    };

    return (
        <Wrapper>
            <LoginWrapper>
                <LoginHeader>인아이디어 컨텐츠몰 로그인</LoginHeader>
                <LoginContent onSubmit={loginSubmit}>
                    <LoginTitle>아이디/비밀번호를 입력하세요.</LoginTitle>
                    <InputWithLabel
                        type="text"
                        name="user_id"
                        placeholder="아이디"
                        onChange={isLoggedID}
                        value={inputId}
                    />
                    <InputWithLabel
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        onChange={isLoggedPW}
                        value={inputPw}
                    />
                    <LoginBtn type="submit">로그인</LoginBtn>
                </LoginContent>
            </LoginWrapper>
        </Wrapper>
    );
};

export default Login;
