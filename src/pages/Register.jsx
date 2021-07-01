import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
`;

const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
    width: 900px;
    height: 515px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    box-shadow: 5px 5px 15px #e8e8e8;
    background-color: #ffffff;
`;

const Title = styled.p`
    width: 100%;
    font-size: 26px;
    font-weight: 700;
    color: #b8505e;
    text-align: center;
    margin-bottom: 30px;
`;

const Label = styled.span`
    width: 358px;
    font-size: 12px;
    color: #b8505e;
    text-align: left;
    margin-bottom: 8px;
`;

const Input = styled.input`
    width: 358px;
    margin-bottom: 20px;
    line-height: 40px;
    border: 1px solid #b8505e;
    font-size: 14px;
    text-align: left;
    border-radius: 3px;
`;

const Button = styled.button`
    width: 358px;
    height: 45px;
    border-radius: 3px;
    border: none;
    color: white;
    background-color: #b8505e;
    font-size: 14px;
    cursor: pointer;
`;

const Register = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");

    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangePw = (e) => {
        setPw(e.target.value);
    };

    const onChangePwCheck = (e) => {
        setPwCheck(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id.length !== 0 && pw.length !== 0 && pwCheck.length !== 0) {
            if (pw !== pwCheck) {
                alert("비밀번호 확인이 일치하지 않습니다");
            } else {
                const searchId = localStorage.getItem(id);

                if (searchId !== null) {
                    alert("중복된 아이디가 있습니다.");
                } else {
                    alert("가입이 완료되었습니다.");
                    localStorage.setItem(id, pw);
                    window.location.href = "/";
                }
            }
        } else {
            alert("값을 입력하세요.");
        }
    };

    const LoginValidate = () => {
        if (sessionStorage.length !== 0) {
            alert("잘못된 접근입니다.");
            sessionStorage.clear();
            window.location.href = "/";
        }
    };

    useEffect(() => {
        LoginValidate();
    }, []);

    return (
        <Wrapper>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Title>회원가입 페이지</Title>
                    <Label>아이디</Label>
                    <Input
                        name="username"
                        placeholder=" 아이디"
                        onChange={onChangeId}
                        value={id}
                    />
                    <Label>비밀번호</Label>
                    <Input
                        name="password"
                        type="password"
                        placeholder=" 비밀번호"
                        onChange={onChangePw}
                        value={pw}
                    />
                    <Label>비밀번호 확인</Label>
                    <Input
                        name="passwordConfirm"
                        type="password"
                        placeholder=" 비밀번호 확인"
                        onChange={onChangePwCheck}
                        value={pwCheck}
                    />
                    <Button type="submit">회원가입</Button>
                </Form>
            </Container>
        </Wrapper>
    );
};

export default Register;
