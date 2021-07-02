import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
`;

export const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
    width: 900px;
    height: 515px;
    display: flex;
    color: #333333;
    box-sizing: border-box;
    background-color: #ffffff;
    border: solid 1px #e8e8e8;
    border-radius: 20px;
    box-shadow: 5px 5px 15px #e8e8e8;
`;

export const Form = styled.form`
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
