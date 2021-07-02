import styled from "styled-components";

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 65%;
    position: relative;
`;

export const LoginWrapper = styled.div`
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

export const LoginHeader = styled.p`
    width: 100%;
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 700;
    color: #b8505e;
    text-align: center;
`;
export const LoginContent = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginTitle = styled.p`
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    color: #666;
    text-align: center;
    margin: 20px 0px;
`;

export const InputWithLabel = styled.input`
    width: 358px;
    margin-top: 10px;
    line-height: 40px;
    background-color: #f2f2f2;
    border: none;
    font-size: 12px;
`;

export const LoginBtn = styled.button`
    width: 150px;
    height: 40px;
    margin-top: 30px;
    border-radius: 20px;
    border: none;
    color: white;
    background-color: #b8505e;
    font-size: 12px;
    cursor: pointer;
`;
