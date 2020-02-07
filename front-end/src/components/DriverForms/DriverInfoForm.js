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
import ProfilePictureEditor from "../ProfilePictureSelector/ProfilePictureEditor" 

function DriverInfo(props) {

    const data = props.location.state.user

    const [driver, setDriver] = useState({
        ...data,
        DateOfBirth: "",
        InsuranceCompany: "",
        PolicyNumber: "",
        Price: 50,
        Shift: "AM"
    })

    const [driverErrors, setDriverErrors] = useState({
        DateOfBirthError: "",
        InsuranceCompanyError: "",
        PolicyNumberError: ""
    })

    const validate = () => {
        let isErr = false;

        const errors = {
            DateOfBirthError: "",
            InsuranceCompanyError: "",
            PolicyNumberError: ""
        }

        if (driver.DateOfBirth.length < 1) {
            isErr = true;
            errors.DateOfBirthError = "Date of Birth is a required field"
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
        if (e.target.name === "PolicyNumber") {
            setDriver({...driver, [e.target.name]: parseInt(e.target.value)})
        } else {
            setDriver({...driver, [e.target.name]: e.target.value})
        }
    }

    const handleClick = e => {
        const err = validate();
        if (err){
            e.preventDefault();
        }
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
                {driverErrors.policyNumberError.length > 1 ? <Error>{driverErrors.policyNumberError}</Error> : null}
                <ProfilePictureEditor username={driver.UserName} />
                <ClearFix px="15px" />
                <StyledLink onClick={handleClick} to={{ pathname: '/signup/driver/step/2', state: { driver }}}>Next</StyledLink>
            </FormWrapper>
            
        </Container>
    )
}

export default DriverInfo
