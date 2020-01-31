import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import S from 'styled-components';

const LoginForm = () => {
    // State
    const [user, SetUser] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = () => {
        event.preventDefault();
        axios.post('http://localhost:3000/login')
        .then( response => {
            console.log(reponse);
        })
        .catch( error => {
            console.log(error);
        });
    }
    
    const handleEvent = (event) => {
        return SetUser({...user, [event.target.name]: event.target.value});
    }
    return(
        <StyledForm onSubmit={handleSubmit} method="post">
            <StyledLabel> Email
                <StyledInput type="text" name="email" onChange={handleEvent} />
            </StyledLabel>
            <StyledLabel> Password
                <StyledInput type="password" name="password" onChange={handleEvent}/>
            </StyledLabel>
        </StyledForm>
    );
}
export default LoginForm

const StyledForm = S.form`
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledInput = S.input`
    border-radius: 15px;
    border: 1px solid #000;
    font-size: 2.4rem;
    padding: 10px;
`;
const StyledLabel = S.label`
    font-size: 2rem;
    color: #000;
    display: flex;
    justify-content: center;
`;