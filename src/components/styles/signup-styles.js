import styled from "styled-components";

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 35%;
    border-radius: 0px 20px 20px 0px;
    background-color: #b8505e;
    position: relative;
`;

export const SignUpWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 20px;
    width: 215px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
`;

export const Header = styled.h1`
    width: 100%;
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
`;

export const Comment = styled.span`
    width: 100%;
    line-height: 20px;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
`;

export const SignUpBtn = styled.button`
    width: 150px;
    line-height: 38px;
    margin-top: 30px;
    border-radius: 20px;
    border: none;
    color: #b8505e;
    background-color: white;
    font-size: 12px;
    cursor: pointer;
`;
