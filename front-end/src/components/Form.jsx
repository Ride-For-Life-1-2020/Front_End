import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import S from 'styled-components';

const LoginForm = (props) => {
    const dispatch = useDispatch();
    // State
    const [user, SetUser] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // axios.post('http://localhost:3000/login', {user})
        // .then( response => {
        //     console.log(response);
        //     localStorage.setItem('auth-token',  response.data.token);
        //     dispatch({type: 'SET_LOGGEDIN_USER', payload: response.data[0]});
        //     dispatch({type: 'SET_LOGGEDIN', payload: true});
        //     SetUser({...user, email: '', password: ''});
        //     props.history.push('/');
        // })
        // .catch( error => {
        //     console.log(error);
        // });

        localStorage.setItem('auth-token', 'dsafgsdfgdfgd');
        dispatch({type: 'SET_LOGGEDIN', payload: true});
        // in the .then
        SetUser({...user, email: '', password: ''});
        props.history.push('/');
    }
    
    const handleEvent = (event) => {
        return SetUser({...user, [event.target.name]: event.target.value});
    }
    return(
        <>
            <StyledForm onSubmit={handleSubmit} method="post">
            <StyledTitle>Log In</StyledTitle>
                <StyledLabel> Email
                    <StyledInput type="text" name="email" onChange={handleEvent} value={user.email} />
                </StyledLabel>
                <StyledLabel> Password
                    <StyledInput type="password" name="password" onChange={handleEvent} value={user.password} />
                </StyledLabel>
                <StyledButton type="submit">Log In</StyledButton>
            </StyledForm>
        </>
    );
}
export default LoginForm

const StyledTitle = S.h2`
    margin-top: 150px;
    font-size: 40px;
    width: 100%;
    text-align: center;
`;
const StyledForm = S.form`
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-flow: row wrap;
`;
const StyledInput = S.input`
    border-radius: 10px;
    border: 1px solid #000;
    font-size: 2.4rem;
    padding: 10px;
    width: 100%;
`;
const StyledLabel = S.label`
    font-size: 2rem;
    color: #000;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    width: 100%;
`;
const StyledButton = S.button`
    font-size: 20px;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
`;