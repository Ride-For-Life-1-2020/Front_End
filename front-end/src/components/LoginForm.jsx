import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import S from 'styled-components';

const LoginForm = (props) => {
    const dispatch = useDispatch();
    // // State
    const [user, SetUser] = useState({
        UserName: '',
        Password: '',
    });
    // get the current role of the user.
    const role = useSelector(state => state.root.userRole);
    
    // dispatch actions based on the selected role of the user
    const handleRoleChange = (event) => {
        if(event.target.name === 'driver') {
            dispatch({type: 'SET_DRIVER_ROLE', payload: true});
        } else if(event.target.name === 'patient') {
            dispatch({type: 'SET_PATIENT_ROLE', payload: true});

        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (role.driver === true) {
            axios.post('https://rideforlifebackend.herokuapp.com/api/drivers/login', user,{
                headers: {
                "content-type": "application/json" // Tell the server we are sending this over as JSON
            }
            })
            .then( response => {
                console.log(response);
                localStorage.setItem('auth-token',  response.data.token);
                dispatch({type: 'SET_LOGGEDIN_USER', payload:user.UserName});
                dispatch({type: 'SET_LOGGEDIN', payload: true});
                props.history.push('/');
            })
            .catch( error => {
                console.log(error);
            }); 
        } 
        else {
            axios.post('https://rideforlifebackend.herokuapp.com/api/patients/login', user,{
                headers: {
                  "content-type": "application/json" // Tell the server we are sending this over as JSON
              }
            })
            .then( response => {
                console.log(response);
                localStorage.setItem('auth-token',  response.data.token);
                localStorage.setItem('username', user.UserName);
                dispatch({type: 'SET_LOGGEDIN_USER', payload:user.UserName});
                dispatch({type: 'SET_LOGGEDIN', payload: true});
                props.history.push('/');
                props.history.push('/');
            })
            .catch( error => {
                console.log(error);
            }); 
        }
    }
    const handleChange = (event) => {
        return SetUser({...user, [event.target.name]: event.target.value});
    }

    return(
        <div>
            <StyledForm onSubmit={handleSubmit} >
            <StyledTitle>Log In</StyledTitle>
                <StyledLabel> Username
                    <StyledInput type="text" name="UserName" value={user.UserName} onChange={handleChange}  />
                </StyledLabel>
                <StyledLabel> Password
                    <StyledInput type="password" name="Password" value={user.Password} onChange={handleChange}  />
                </StyledLabel>
                <StyledLabel> Are you a Driver or a Patient?
                    <StyledLabel>Mother
                        <StyledCheckbox type="checkbox" name="patient" value="patient" onChange={handleRoleChange} />  
                    </StyledLabel>
                    <StyledLabel>Driver
                        <StyledCheckbox type="checkbox" name="driver" value="driver" onChange={handleRoleChange}/>
                    </StyledLabel>
                </StyledLabel>
                <StyledButton type="submit">Log In</StyledButton>
            </StyledForm>
        </div>
    );
}
export default LoginForm;

const StyledTitle = S.h2`
    margin-top: 150px;
    font-size: 40px;
    width: 100%;
    text-align: center;
`;
const StyledForm = S.form`
    width: 500px;
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
    align-items: center;
`;
const StyledButton = S.button`
    font-size: 20px;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
`;
const StyledCheckbox = S.input`
    width: 40px;
    height: 20px;
    &: hover {
        cursor: pointer;
    }
`;