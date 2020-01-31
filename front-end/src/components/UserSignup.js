import React, {useState} from "react"

function UserSignup() {

    const [user setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        userName: "",
        password: ""


    })

    const handleChange = (e) => {
        setMother({...mother, [e.target.name]: e.target.value})
    }

    return (
        <div>

            <form>
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
            </form>
        </div>
    )
}

export default UserSignup