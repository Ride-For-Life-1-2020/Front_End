import React, {useState, useEffect} from "react"
import { Container, Button, Header } from './styled-components'

function UserSignup(props) {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        userName: "",
        password: ""


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
            <Header>{formTitle}</Header>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={user.firstName} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="firstName">First Name</label><br /><br />
                <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={user.lastName} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="lastName">Last Name</label><br /><br />
                <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    value={user.email} 
                    onChange={handleChange} 
                /><br /><br />
                <label htmlFor="email">Email</label><br /><br />
                <input 
                    type="text" 
                    id="phone" 
                    name="phone" 
                    value={user.phone} 
                    onChange={handleChange} 
                /><br /><br />
                <label htmlFor="phone">Phone</label><br /><br />
                <textarea
                    id="address" 
                    name="address" 
                    value={user.address} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="address">Address</label><br /><br />
                <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    value={user.city} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="city">City</label><br /><br />
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={user.username} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="username">User Name</label><br /><br />
                <input 
                    type="text" 
                    id="password" 
                    name="password" 
                    value={user.password} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="password">Password</label><br /><br />

                <Button type="submit">Next</Button>
            </form>
        </Container>
    )
}

export default UserSignup