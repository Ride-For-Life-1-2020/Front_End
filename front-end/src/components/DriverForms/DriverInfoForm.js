import React, {useState} from "react"
import { 
    Container, 
    Button, 
    Header,
    FormWrapper,
    TextFieldWrapper,
    TextField, 
    Label,
    ClearFix } from './styled-components'

function DriverInfo(props) {

    const [driver, setDriver] = useState({
        dob: "",
        licenseNumber: "",
        insuranceCompany: "",
        policyNumber: ""


    })

    const handleChange = (e) => {
        setDriver({...driver, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <FormWrapper>
                <Header>Driver Information (cont.)</Header>
                <TextFieldWrapper>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <TextField 
                        type="date"
                        id="dob"
                        name="dob"
                        value={driver.dob}
                        onChange={handleChange}
                         />

                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="licenseNumber">License Number</Label>
                    <TextField 
                        type="text"
                        id="licenseNumber"
                        name="licenseNumber"
                        value={driver.licenseNumber}
                        onChange={handleChange}
                        placeholder="License Number"
                         />

                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="insuranceCompany">Insurance Company</Label>
                    <TextField 
                        type="text"
                        id="insuranceCompany"
                        name="insuranceCompany"
                        value={driver.insuranceCompany}
                        onChange={handleChange}
                        placeholder="Insurance Company"
                         />

                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="policyNumber">Policy Number</Label>
                    <TextField 
                        type="text"
                        id="policyNumber"
                        name="policyNumber"
                        value={driver.policyNumber}
                        onChange={handleChange}
                        placeholder="Policy Number"
                         />

                </TextFieldWrapper>
                
                <ClearFix px="15px" />
                <Button type="submit">Next</Button>
            </FormWrapper>
            
        </Container>
    )
}

export default DriverInfo
