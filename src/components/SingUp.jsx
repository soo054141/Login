import React from "react";
import { Link } from "react-router-dom";
import {
    Wrapper,
    SignUpWrapper,
    Header,
    Comment,
    SignUpBtn,
} from "./styles/signup-styles";

const SignUp = () => (
    <Wrapper>
        <SignUpWrapper>
            <Header>Hello, Guest!</Header>
            <Comment>아직 회원이 아니신가요?</Comment>
            <Link to="register">
                <SignUpBtn>회원가입</SignUpBtn>
            </Link>
        </SignUpWrapper>
    </Wrapper>
);

export default SignUp;
