import React, {useState, useEffect} from "react"
import { 
    Container, 
    Button, 
    Header,
    FormWrapper,
    TextFieldWrapper,
    TextField, 
    Label,
    ClearFix } from './styled-components'

function UserSignup(props) {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        userName: "",
        password: "",
        confirmPassword: "",

    });

    const [nextStepLink, setNextStepLink] = useState('');
    const [formTitle, setFormTitle] = useState('');

    useEffect(() => {
        if (props.userType === 'mother') {
            setNextStepLink('/signup/mother');
            setFormTitle('Mother Signup');
        } else {
            setNextStepLink('/signup/driver');
            setFormTitle('Driver Signup');
        }
    }, [])

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.handleUserFormSubmit(user);
        props.history.push(nextStepLink);
    }

    return (
        <Container>
            <ClearFix px="15px" />
            <FormWrapper onSubmit={handleSubmit}>
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
                <TextFieldWrapper>
                    <Label htmlFor="username">User Name</Label>
                    <TextField 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={user.username} 
                        onChange={handleChange}
                        placeholder="Username" 
                    />
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="password">Password</Label>
                    <TextField 
                        type="text" 
                        id="password" 
                        name="password" 
                        value={user.password} 
                        onChange={handleChange}
                        placeholder="Password" 
                    />
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <TextField 
                        type="text" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        value={user.confirmPassword} 
                        onChange={handleChange} 
                        placeholder="Confirm Password"
                    />
                </TextFieldWrapper>
                <ClearFix px="15px" />
                <Button type="submit">Next</Button>
            </FormWrapper>
        </Container>
    )
}

export default UserSignup