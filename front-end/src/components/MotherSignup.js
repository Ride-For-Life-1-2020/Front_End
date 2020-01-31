import React, {useState} from "react"

function MotherSignup() {

    const [mother, setMother] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        dueDate: "",
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
                    value={mother.firstName} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="firstName">First Name</label><br /><br />
                <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={mother.lastName} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="lastName">Last Name</label><br /><br />
                <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    value={mother.email} 
                    onChange={handleChange} 
                /><br /><br />
                <label htmlFor="email">Email</label><br /><br />
                <input 
                    type="text" 
                    id="phone" 
                    name="phone" 
                    value={mother.phone} 
                    onChange={handleChange} 
                /><br /><br />
                <label htmlFor="phone">Phone</label><br /><br />
                <textarea
                    id="address" 
                    name="address" 
                    value={mother.address} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="address">Address</label><br /><br />
                <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    value={mother.city} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="city">City</label><br /><br />
                <input 
                    type="date" 
                    id="dueDate" 
                    name="dueDate" 
                    value={mother.dueDate} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="dueDate">Due Date</label><br /><br />
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={mother.username} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="username">User Name</label><br /><br />
                <input 
                    type="text" 
                    id="password" 
                    name="password" 
                    value={mother.password} 
                    onChange={handleChange} 
                /><br />
                <label htmlFor="password">Password</label><br /><br />
            </form>
        </div>
    )
}

export default MotherSignup