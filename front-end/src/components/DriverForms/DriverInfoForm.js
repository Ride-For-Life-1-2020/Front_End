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

 

function DriverInfo(props) {

    const data = props.location.state.user

    const [driver, setDriver] = useState({
        ...data,
        DateOfBirth: "",
        LicenseNumber: "",
        InsuranceCompany: "",
        PolicyNumber: "",
        Price: 50,
        Shift: "8am to 4pm"

    })

    const [driverErrors, setDriverErrors] = useState({
        DateOfBirthError: "",
        LicenseNumberError: "",
        InsuranceCompanyError: "",
        PolicyNumberError: ""
    })

    const validate = () => {
        let isErr = false;

        const errors = {
            DateOfBirthError: "",
            LicenseNumberError: "",
            InsuranceCompanyError: "",
            PolicyNumberError: ""
        }

        if (driver.DateOfBirth.length < 1) {
            isErr = true;
            errors.DateOfBirthError = "Date of Birth is a required field"
        }

        if (driver.LicenseNumber.length < 1) {
            isErr = true;
            errors.LicenseNumberError = "License Number is a required field"
        }

        if (driver.InsuranceCompany.length < 1) {
            isErr = true;
            errors.InsuranceCompanyError = "Insurance Company is a required field"
        }

        if (driver.PolicyNumber.length < 1) {
            isErr = true;
            errors.PolicyNumberError = "Policy Number is a required field"
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

    console.log(driver)
    return (
        <Container>
            <ClearFix px="15px" />
            <FormWrapper>
                <Header>Driver Information (cont.)</Header>
                <TextFieldWrapper>
                    <Label htmlFor="DateOfBirth">Date of Birth</Label>
                    <TextField 
                        type="date"
                        id="DateOfBirth"
                        name="DateOfBirth"
                        value={driver.DateOfBirth}
                        onChange={handleChange}
                         />

                </TextFieldWrapper>
                {driverErrors.DateOfBirthError.length > 1 ? <Error>{driverErrors.DateOfBirthError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="LicenseNumber">License Number</Label>
                    <TextField 
                        type="text"
                        id="LicenseNumber"
                        name="LicenseNumber"
                        value={driver.LicenseNumber}
                        onChange={handleChange}
                        placeholder="License Number"
                         />

                </TextFieldWrapper>
                {driverErrors.LicenseNumberError.length > 1 ? <Error>{driverErrors.LicenseNumberError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="InsuranceCompany">Insurance Company</Label>
                    <TextField 
                        type="text"
                        id="InsuranceCompany"
                        name="InsuranceCompany"
                        value={driver.InsuranceCompany}
                        onChange={handleChange}
                        placeholder="Insurance Company"
                         />

                </TextFieldWrapper>
                {driverErrors.InsuranceCompanyError.length > 1 ? <Error>{driverErrors.InsuranceCompanyError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="PolicyNumber">Policy Number</Label>
                    <TextField 
                        type="text"
                        id="PolicyNumber"
                        name="PolicyNumber"
                        value={driver.PolicyNumber}
                        onChange={handleChange}
                        placeholder="Policy Number"
                         />

                </TextFieldWrapper>
                {driverErrors.PolicyNumberError.length > 1 ? <Error>{driverErrors.PolicyNumberError}</Error> : null}
                <ClearFix px="15px" />
                <StyledLink onClick={handleClick} to={{ pathname: '/signup/driver/step/2', state: { driver }}}>Next</StyledLink>
            </FormWrapper>
            
        </Container>
    )
}

export default DriverInfo
