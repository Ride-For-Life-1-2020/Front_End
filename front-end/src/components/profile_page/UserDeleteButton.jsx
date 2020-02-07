import React from 'react';
import axios from 'axios';
import S from 'styled-components';

const DeleteButton = (props) => {
    return(
        <StyledButtonContainer>
            <StyledButton onClick={props.handleDeleteUser} >Delete your account</StyledButton>
        </StyledButtonContainer>

    );
}
export default DeleteButton;

const StyledButtonContainer = S.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const StyledButton = S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: pink;
    transition: 120ms all ease-in-out;
    padding: 10px 20px;
    margin-left: 30px;
    margin-top: 50px;
    color: #fff;
    background-color: #000;
    border-radius: 5px;

    &: hover {
        background-color: blue;
        cursor: pointer;
    }
`;