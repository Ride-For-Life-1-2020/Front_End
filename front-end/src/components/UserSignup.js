import React, {useState, useEffect} from "react"
import { 
    Container, 
    StyledLink, 
    Header,
    FormWrapper,
    TextFieldWrapper,
    TextField, 
    Label,
    ClearFix, 
    Error } from './styled-components';

    import S from 'styled-components';

function UserSignup(props) {

    const [user, setUser] = useState({
        FullName: "",
        Email: "",
        PhoneNumber: "",
        City_ID: 1,
        UserName: "",
        Password: "",
    });

    const [ConfirmPassword, setConfirmPassword] = useState({ConfirmPassword: ""})

    const [errors, setErrors] = useState({
        FullNameError: "",
        EmailError: "",
        PhoneNumberError: "",
        UserNameError: "",
        PasswordError: "",
        ConfirmPasswordError: ""
    })

    const [nextStepLink, setNextStepLink] = useState('');
    const [formTitle, setFormTitle] = useState('');

    useEffect(() => {
        if (props.userType === 'mother') {
            setNextStepLink('/signup/mother');
            setFormTitle('Mother Signup');
        } else {
            setNextStepLink('/signup/driver/step/1');
            setFormTitle('Driver Signup');
        }
    }, [])

    const handleChange = (e) => {
        if(e.target.name === "ConfirmPassword") {
            setConfirmPassword({[e.target.name]: e.target.value})
        } else if (e.target.name === "City_ID") {
            setUser({...user, [e.target.name]: parseInt(e.target.value)})
        } else {
            setUser({...user, [e.target.name]: e.target.value})
        }
    }

    const validate = () => {
        let isErr = false

        const errors = {
            FullNameError: "",
            EmailError: "",
            PhoneNumberError: "",
            UserNameError: "",
            PasswordError: "",
            ConfirmPasswordError: ""
        }

        if (user.FullName.length < 1) {
            isErr = true;
            errors.FullNameError = "*Full Name is a required field"
        }


        if (!user.Email.includes("@" )) {
            isErr = true;
            errors.EmailError = "*Please enter a valid email address"
        }

        if (user.PhoneNumber.length < 10) {
            isErr = true;
            errors.PhoneNumberError = "*Please enter a phone number in this format (+256 772-000-0000)"
        }

        if (user.UserName.length < 8) {
            isErr = true;
            errors.UserNameError = "*Username must contain at least 8 characters"
        }


        if (user.Password.length < 1 && ConfirmPassword.ConfirmPassword.length < 1) {
            isErr = true;
            errors.ConfirmPasswordError = "*Please confirm password"
            errors.PasswordError = "*Please enter a password"
        } else if (user.Password.length < 1) {
            isErr = true;
            errors.PasswordError = "*Please enter a password"
        } else if (ConfirmPassword.ConfirmPassword.length < 1){
            isErr = true;
            errors.ConfirmPasswordError = "*Please confirm password"
        } else if (user.Password !== ConfirmPassword.ConfirmPassword) {
            isErr = true;
            errors.ConfirmPasswordError = "*Passwords must match"
            errors.PasswordError = "*Passwords must match"
        }

        if (isErr) {
            setErrors({...errors})
        }

        return isErr
    }

    const handleClick = e => {
        
        const err = validate();
        if (err){
            e.preventDefault();
        }
    }


    return (
        <Container>
            <ClearFix px="15px" />
            <FormWrapper>
                <Header>{formTitle}</Header>
                <TextFieldWrapper>
                    
                    <Label htmlFor="FullName">Full Name</Label>
                    <TextField 
                        type="text" 
                        id="FullName" 
                        name="FullName" 
                        value={user.FullName} 
                        onChange={handleChange} 
                        placeholder="John Doe"
                    />
                </TextFieldWrapper>
                {errors.FullNameError.length > 1 ? <Error>{errors.FullNameError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="Email">Email</Label>
                    <TextField 
                        type="text" 
                        id="Email" 
                        name="Email" 
                        value={user.Email} 
                        onChange={handleChange}
                        placeholder="example@fake.com" 
                    />
                </TextFieldWrapper>
                {errors.EmailError.length > 1 ? <Error>{errors.EmailError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="PhoneNumber">Phone (Uganda Only)</Label>
                    <TextField
                        type="text" 
                        id="PhoneNumber" 
                        name="PhoneNumber" 
                        value={user.PhoneNumber} 
                        onChange={handleChange} 
                        placeholder="+256 772-000-000"
                    />
                </TextFieldWrapper>
                {errors.PhoneNumberError.length > 1 ? <Error>{errors.PhoneNumberError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="city">City</Label>
                        <StyledSelectList id="city" name="City_ID" value={user.City_ID} type="select" onChange={handleChange} >
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
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="UserName">User Name</Label>
                    <TextField 
                        type="text" 
                        id="UserName" 
                        name="UserName" 
                        value={user.UserName} 
                        onChange={handleChange}
                        placeholder="Must contain at least 8 characters" 
                    />
                </TextFieldWrapper>
                {errors.UserNameError.length > 1 ? <Error>{errors.UserNameError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="Password">Password</Label>
                    <TextField 
                        type="password" 
                        id="Password" 
                        name="Password" 
                        value={user.Password} 
                        onChange={handleChange}
                        placeholder="********" 
                    />
                </TextFieldWrapper>
                {errors.PasswordError.length > 1 ? <Error>{errors.PasswordError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="ConfirmPassword">Confirm Password</Label>
                    <TextField 
                        type="password" 
                        id="ConfirmPassword" 
                        name="ConfirmPassword" 
                        value={ConfirmPassword.ConfirmPassword} 
                        onChange={handleChange} 
                        placeholder="********"
                    />
                </TextFieldWrapper>
                {errors.ConfirmPasswordError.length > 1 ? <Error>{errors.ConfirmPasswordError}</Error> : null}
                <ClearFix px="15px" />
                <StyledLink onClick={handleClick} to={{ pathname: `${nextStepLink}`, state: { user }}}>Next</StyledLink>
            </FormWrapper>
        </Container>
    )
}

export default UserSignup;

const StyledSelectList = S.select`
    width: auto;
    border: 1px solid #ccc;
    font-size: 16px;
    color: #000;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
`;

const StyledOption = S.option`
    font-size: 16px;
    color: #000;
`;