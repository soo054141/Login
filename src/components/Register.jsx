import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, Container, Form } from "../AppWrapper";
import { Title, Label, Input, Button } from "./styles/register-styles";

const Register = () => {
    const history = useHistory();
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
                    history.push("/Login");
                }
            }
        } else {
            alert("값을 입력하세요.");
        }
    };

    const LoginValidate = () => {
        if (sessionStorage.length !== 0) {
            alert("잘못된 접근입니다.?");
            sessionStorage.clear();
            history.push("/Login");
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
