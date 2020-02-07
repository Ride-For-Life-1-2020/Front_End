import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';
import S from 'styled-components';

const ProfileEditForm = (props) => {

    const username = useSelector(state => state.root.loggedInUser);
    const [editedUser, setEditedUser] = useState({
        FullName: '',
        Email: "",
        PhoneNumber: "",
        Address: "",
        City_ID: "",
        UserName: "",
        Password: "",
    });
    const handleChange = (e) => {
        console.log(e.target.value);
        console.log(e.target);
        setEditedUser({...editedUser, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        axios.put(`https://rideforlifebackend.herokuapp.com/api/patients/${username}`, editedUser)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }
return(
    <div>
            <StyledForm>
                <StyledTitle>Edit Profile</StyledTitle>
                    <StyledLabel htmlFor="firstName">First Name
                    <StyledInput 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={editedUser.firstName} 
                        onChange={handleChange} 
                        placeholder="Joe"
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor="lastName">Last Name
                    <StyledInput 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={editedUser.lastName} 
                        onChange={handleChange} 
                        placeholder="Tom"
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor="email">Email
                    <StyledInput 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={editedUser.email} 
                        onChange={handleChange}
                        placeholder="example@fake.com" 
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor="phone">Phone (Uganda Only)
                    <StyledInput
                        type="text" 
                        id="phone" 
                        name="phone" 
                        value={editedUser.phone} 
                        onChange={handleChange} 
                        placeholder="+256 772-000-000"
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor="address">Address
                    <StyledInput
                        id="address" 
                        type="text"
                        name="address" 
                        value={editedUser.address} 
                        onChange={handleChange}
                        placeholder="address" 
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor="city">City
                        <StyledSelectList name="city" type="select" onChange={handleChange} >
                            <StyledOption value="1">Kampala</StyledOption>
                            <StyledOption value="2">Gulu</StyledOption>
                            <StyledOption value="3">Lira</StyledOption>
                            <StyledOption value="4">Mbarara</StyledOption>
                            <StyledOption value="5">Jinja</StyledOption>
                            <StyledOption value="6">Bwizibwera</StyledOption>
                            <StyledOption value="7">Mbale</StyledOption>
                            <StyledOption value="8">Mukono</StyledOption>
                            <StyledOption value="9">Kasese</StyledOption>
                            <StyledOption value="10">Masaka</StyledOption>
                        </StyledSelectList> 
                    </StyledLabel>
                    <StyledLabel htmlFor="username">User Name
                    <StyledInput 
                        type="text" 
                        id="username" 
                        name="UserName" 
                        value={editedUser.username} 
                        onChange={handleChange}
                        placeholder="Must contain at least 8 characters" 
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor="password">Password
                    <StyledInput 
                        type="password" 
                        id="password" 
                        name="Password" 
                        value={editedUser.password} 
                        onChange={handleChange}
                        placeholder="********" 
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor="confirmPassword">Confirm Password
                    <StyledInput 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        value={editedUser.confirmPassword} 
                        onChange={handleChange} 
                        placeholder="********"
                    />
                    </StyledLabel>
                <div onClick={handleSubmit}>submit</div>
            </StyledForm>
    </div>
);
}
export default ProfileEditForm;

const StyledTitle = S.h2`
margin-top: 150px;
font-size: 20px;
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
font-size: 18px;
padding: 10px;
width: 100%;
`;
const StyledLabel = S.label`
font-size: 20px;
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
const StyledSelectList = S.select`
    width: auto;
    border: none;
    font-size: 24px;
    background-color: #333;
    color: #fff;
    border-radius: 5px;
    padding: 10px
`;

const StyledOption = S.option`
    font-size: 24px;
    color: #fff;
`;