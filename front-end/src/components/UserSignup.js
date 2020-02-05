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
    Error } from './styled-components'
import { Link } from "react-router-dom"

function UserSignup(props) {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        phoneError: "",
        addressError: "",
        cityError: "",
        usernameError: "",
        passwordError: "",
        confirmPasswordError: ""
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
        setUser({...user, [e.target.name]: e.target.value})
    }

    const validate = () => {
        let isErr = false

        const errors = {
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            phoneError: "",
            addressError: "",
            cityError: "",
            usernameError: "",
            passwordError: "",
            confirmPasswordError: ""
        }

        if (user.firstName.length < 1) {
            isErr = true;
            errors.firstNameError = "*First Name is a required field"
        }

        if (user.lastName.length < 1) {
            isErr = true;
            errors.lastNameError = "*Last Name is a required field"
        }

        if (!user.email.includes("@" )) {
            isErr = true;
            errors.emailError = "*Please enter a valid email address"
        }

        if (!user.phone.includes('-') && !user.phone.length < 15) {
            isErr = true;
            errors.phoneError = "*Please enter a phone number in this format (+256 772-000-0000)"
            errors.phone = ""
        }

        if (user.address.length < 1) {
            isErr = true;
            errors.addressError = "*Address is a required field"
        }

        if (user.city.length < 1) {
            isErr = true;
            errors.cityError = "*City is a required field"
        }

        if (user.username.length < 8) {
            isErr = true;
            errors.usernameError = "*Username must contain at least 8 characters"
        }


        if (user.password.length < 1 && user.confirmPassword.length < 1) {
            isErr = true;
            errors.confirmPasswordError = "*Please confirm password"
            errors.passwordError = "*Please enter a password"
        } else if (user.password.length < 1) {
            isErr = true;
            errors.passwordError = "*Please enter a password"
        } else if (user.confirmPassword.length < 1){
            isErr = true;
            errors.confirmPasswordError = "*Please confirm password"
        } else if (user.password !== user.confirmPassword) {
            isErr = true;
            errors.confirmPasswordError = "*Passwords must match"
            errors.passwordError = "*Passwords must match"
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
                    
                    <Label htmlFor="firstName">First Name</Label>
                    <TextField 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={user.firstName} 
                        onChange={handleChange} 
                        placeholder="Joe"
                    />
                </TextFieldWrapper>
                {errors.firstNameError.length > 1 ? <Error>{errors.firstNameError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="lastName">Last Name</Label>
                    <TextField 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={user.lastName} 
                        onChange={handleChange} 
                        placeholder="Tom"
                    />
                </TextFieldWrapper>
                {errors.lastNameError.length > 1 ? <Error>{errors.lastNameError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="email">Email</Label>
                    <TextField 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={user.email} 
                        onChange={handleChange}
                        placeholder="example@fake.com" 
                    />
                </TextFieldWrapper>
                {errors.emailError.length > 1 ? <Error>{errors.emailError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="phone">Phone (Uganda Only)</Label>
                    <TextField
                        type="text" 
                        id="phone" 
                        name="phone" 
                        value={user.phone} 
                        onChange={handleChange} 
                        placeholder="+256 772-000-000"
                    />
                </TextFieldWrapper>
                {errors.phoneError.length > 1 ? <Error>{errors.phoneError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="address">Address</Label>
                    <TextField
                        id="address" 
                        type="text"
                        name="address" 
                        value={user.address} 
                        onChange={handleChange}
                        placeholder="address" 
                    />
                </TextFieldWrapper>
                {errors.addressError.length > 1 ? <Error>{errors.addressError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="city">City</Label>
                    <TextField 
                        type="text" 
                        id="city" 
                        name="city" 
                        value={user.city} 
                        onChange={handleChange} 
                        placeholder="City"
                    />
                </TextFieldWrapper>
                {errors.cityError.length > 1 ? <Error>{errors.cityError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="username">User Name</Label>
                    <TextField 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={user.username} 
                        onChange={handleChange}
                        placeholder="Must contain at least 8 characters" 
                    />
                </TextFieldWrapper>
                {errors.usernameError.length > 1 ? <Error>{errors.usernameError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="password">Password</Label>
                    <TextField 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={user.password} 
                        onChange={handleChange}
                        placeholder="Password" 
                    />
                </TextFieldWrapper>
                {errors.passwordError.length > 1 ? <Error>{errors.passwordError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <TextField 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        value={user.confirmPassword} 
                        onChange={handleChange} 
                        placeholder="Confirm Password"
                    />
                </TextFieldWrapper>
                {errors.confirmPasswordError.length > 1 ? <Error>{errors.confirmPasswordError}</Error> : null}
                <ClearFix px="15px" />
                <StyledLink onClick={handleClick} to={{ pathname: `${nextStepLink}`, state: { user }}}>Next</StyledLink>
            </FormWrapper>
        </Container>
    )
}

export default UserSignup