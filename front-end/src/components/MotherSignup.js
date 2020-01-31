import React, {useState} from "react"

function MotherSignup() {

    const [dueDate, setDueDate] = useState("")

    const handleChange = (e) => {
        setDueDate(e.target.value)
    }
    console.log(dueDate)
    
    return (
        <form>
            <input
                type="date"
                id="dueDate"
                value={dueDate}
                onChange={handleChange}/><br /><br />
            <label htmlFor="dueDate">Due Date</label>

        </form>
    )

   
}

export default MotherSignup