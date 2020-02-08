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

import S from 'styled-components'
import ProfilePictureEditor from "../ProfilePictureSelector/ProfilePictureEditor" 

const StyledSelectList = S.select`
    width: auto;
    border: none;
    font-size: 24px;
    background-color: #333;
    color: #fff;
    border-radius: 5px;
    padding: 10px
`;

const StyledOption = S.option`
    font-size: 24px;
    color: #fff;
`;
function DriverInfo(props) {

    const data = props.location.state.user

    const [driver, setDriver] = useState({
        ...data,
        DateOfBirth: "",
        InsuranceCompany: "",
        PolicyNumber: "",
        Price: 25,
        Shift: "8:00AM to 4:00PM"


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
            setDriverErrors({...errors} )
        }

        return isErr

    }

    const handleChange = (e) => {
        if (e.target.name === "PolicyNumber" || e.target.name === "Price") {
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
                {driverErrors?.DateOfBirthError?.length > 1 ? <Error>{driverErrors.DateOfBirthError}</Error> : null}
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
                {driverErrors?.InsuranceCompanyError?.length > 1 ? <Error>{driverErrors.InsuranceCompanyError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="PolicyNumber">Policy Number</Label>
                    <TextField 
                        type="number"
                        id="PolicyNumber"
                        name="PolicyNumber"
                        value={driver.PolicyNumber}
                        onChange={handleChange}
                        placeholder="Policy Number"
                         />

                </TextFieldWrapper>
                {driverErrors.PolicyNumberError.length > 1 ? <Error>{driverErrors.PolicyNumberError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="Price">Price</Label>
                        <StyledSelectList id="Price" name="Price" value={driver.Price} type="select" onChange={handleChange} >
                            <StyledOption value="25">$25</StyledOption>
                            <StyledOption value="30">$30</StyledOption>
                            <StyledOption value="35">$35</StyledOption>
                            <StyledOption value="40">$40</StyledOption>
                            <StyledOption value="45">$45</StyledOption>
                            <StyledOption value="50">$50</StyledOption>
                            <StyledOption value="55">$55</StyledOption>
                            <StyledOption value="60">$60</StyledOption>
                            <StyledOption value="65">$65</StyledOption>
                            <StyledOption value="70">$70</StyledOption>
                            <StyledOption value="75">$75</StyledOption>
                    </StyledSelectList> 
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="Shift">Shift</Label>
                        <StyledSelectList id="Shift" name="Shift" value={driver.Shift} type="select" onChange={handleChange} >
                            <StyledOption value="8:00PM to 4:00PM">8:00AM to 4:00PM</StyledOption>
                            <StyledOption value="4:00PM to 12:00AM">4:00PM to 12:00AM</StyledOption>
                            <StyledOption value="12:00AM to 8:00AM">12:00AM to 8:00AM</StyledOption>
                    </StyledSelectList> 
                </TextFieldWrapper>
                {driverErrors?.policyNumberError?.length > 1 ? <Error>{driverErrors.policyNumberError}</Error> : null}
                <ProfilePictureEditor username={driver.UserName} />
                <ClearFix px="15px" />
                <StyledLink onClick={handleClick} to={{ pathname: '/signup/driver/step/2', state: { driver }}}>Next</StyledLink>
            </FormWrapper>
            
        </Container>
    )
}

export default DriverInfo
