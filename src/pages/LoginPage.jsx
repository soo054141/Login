/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 65%;
    position: relative;
`;

const LoginWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 20px;
    width: 450px;
    height: 315px;
    box-sizing: border-box;
`;

const LoginHeader = styled.p`
    width: 100%;
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 700;
    color: #b8505e;
    text-align: center;
`;
const LoginContent = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginTitle = styled.p`
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    color: #666;
    text-align: center;
    margin: 20px 0px;
`;

const InputWithLabel = styled.input`
    width: 358px;
    margin-top: 10px;
    line-height: 40px;
    background-color: #f2f2f2;
    border: none;
    font-size: 12px;
`;

const ForgotTitle = styled.p`
    margin: 30px 0px;
    width: 100%;
    color: #b8505e;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
`;

const LoginBtn = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 20px;
    border: none;
    color: white;
    background-color: #b8505e;
    font-size: 12px;
    cursor: pointer;
`;

const LoginPage = () => {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");

    const isLoggedID = (e) => {
        setUserId(e.target.value);
    };

    const isLoggedPW = (e) => {
        setUserPw(e.target.value);
    };

    const loginSubmit = (e) => {
        e.preventDefault();

        const userIf = `{"user_id":"${userId}","password":"${userPw}"}`;

        const getUserId = Object.values(localStorage).filter(
            (user) => JSON.parse(user).user_id === userId
        );

        const isLoggedOn = () => {
            if (getUserId.length !== 0) {
                getUserId.toString() === userIf
                    ? alert("로그인 성공")
                    : alert("비밀번호가 틀렸습니다");
            } else {
                alert("아이디를 확인하세요");
            }
        };

        if (!userId || !userPw) {
            alert("아이디/비밀번호를 입력하세요");
        } else {
            isLoggedOn();
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
                        value={userId}
                    />
                    <InputWithLabel
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        onChange={isLoggedPW}
                        value={userPw}
                    />
                    <ForgotTitle>비밀번호를 잊으셨나요?</ForgotTitle>
                    <Link to="greeting">
                        <LoginBtn type="submit">로그인</LoginBtn>
                    </Link>
                </LoginContent>
            </LoginWrapper>
        </Wrapper>
    );
};

export default LoginPage;
