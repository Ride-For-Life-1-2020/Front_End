   import React, {useState} from "react"
import { 
    Container, 
    Header,
    FormWrapper,
    TextFieldWrapper,
    TextField, 
    Label,
    ClearFix,
    Error,
    StyledLink } from './../styled-components'
import ProfilePictureEditor from "./ProfilePictureEditor"

 

function DriverInfo(props) {

    const data = props.location.state.user

    const [driver, setDriver] = useState({
        ...data,
        dob: "",
        licenseNumber: "",
        insuranceCompany: "",
        policyNumber: "",
        profilePicture: ""
    })

    const [driverErrors, setDriverErrors] = useState({
        dobError: "",
        licenseNumberError: "",
        insuranceCompanyError: "",
        policyNumberError: ""
    })

    const validate = () => {
        let isErr = false;

        const errors = {
            dobError: "",
            licenseNumberError: "",
            insuranceCompanyError: "",
            policyNumberError: ""
        }

        if (driver.dob.length < 1) {
            isErr = true;
            errors.dobError = "Date of Birth is a required field"
        }

        if (driver.licenseNumber.length < 1) {
            isErr = true;
            errors.licenseNumberError = "License Number is a required field"
        }

        if (driver.insuranceCompany.length < 1) {
            isErr = true;
            errors.insuranceCompanyError = "Insurance Company is a required field"
        }

        if (driver.policyNumber.length < 1) {
            isErr = true;
            errors.policyNumberError = "Date of Birth is a required field"
        }

        if (isErr) {
            setDriverErrors({...driverErrors, ...errors} )
        }

        return isErr

    }

    const handleChange = (e) => {
        setDriver({...driver, [e.target.name]: e.target.value})
    }

    const handleClick = e => {
        const err = validate();
        if (err){
            e.preventDefault();
        }
    }

    const handlePPUpload = data => {
        setDriver({
            ...driver,
            profilePicture: data 
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <Container>
            <ClearFix px="15px" />
            <FormWrapper onSubmit={handleSubmit}>
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
                {driverErrors.dobError.length > 1 ? <Error>{driverErrors.dobError}</Error> : null}
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
                {driverErrors.licenseNumberError.length > 1 ? <Error>{driverErrors.licenseNumberError}</Error> : null}
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
                {driverErrors.policyNumberError.length > 1 ? <Error>{driverErrors.insuranceCompanyError}</Error> : null}
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
                {driverErrors.policyNumberError.length > 1 ? <Error>{driverErrors.policyNumberError}</Error> : null}
                {/* <ProfilePictureEditor handleUpload={handlePPUpload} /> */}
                <ClearFix px="15px" />
                <StyledLink onClick={handleClick} to={{ pathname: '/signup/driver/step/2', state: { driver }}}>Next</StyledLink>
            </FormWrapper>
            
        </Container>
    )
}

export default DriverInfo
