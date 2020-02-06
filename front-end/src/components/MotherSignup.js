import React, {useState, useEffect} from "react"

import { 
    Container, 
    Button, 
    FormWrapper,
    TextFieldWrapper,
    TextField, 
    Label,
    ClearFix,
    H2,
    Checkbox,
    Error
} from './styled-components'

const MotherSignup = props => {
    
    const data = props.location.state.user

    const [deliveryInfo, setDeliveryInfo] = useState({...data,
        dueDate: '',
        hospitalName: '',
        hospitalAddress: '',
        hospitalCity: '',
        hospitalPhone: '',
        termsAndConditions: false 
    })

    const [deliveryInfoErrors, setDeliveryInfoErrors] = useState({
        dueDateError: '',
        hospitalNameError: '',
        hospitalAddressError: '',
        hospitalCityError: '',
        hospitalPhoneError: ''
    })
    
    

    const handleChange = e => {
        setDeliveryInfo({...deliveryInfo, [e.target.name]: e.target.value})
    }


    const validate = () => {
        let isErr = false

        const errors = {
            dueDateError: '',
            hospitalNameError: '',
            hospitalAddressError: '',
            hospitalCityError: '',
            hospitalPhoneError: ''
        }

        if (deliveryInfo.dueDate.length < 1) {
            isErr = true
            errors.dueDateError = "Due Date is a required field";
        }

        if (deliveryInfo.hospitalName.length < 1) {
            isErr = true
            errors.hospitalNameError= "Hospital Name is a required field";
        }

        if (deliveryInfo.hospitalAddress.length < 1) {
            isErr = true
            errors.hospitalAddressError = "Hospital Address is a required field";
        }

        if (deliveryInfo.hospitalCity.length < 1) {
            isErr = true
            errors.hospitalCityError = "Hospital City is a required field";
        }

        if (deliveryInfo.hospitalPhone.length < 10) {
            isErr = true
            errors.hospitalPhoneError = "Please enter a phone number in this format: (+256) 772-000-0000";
        }


        if (isErr) {
            setDeliveryInfoErrors({...deliveryInfoErrors, ...errors})
        }

        return isErr
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = validate()
        if (!err) {
            props.handleUserFormSubmit({data: deliveryInfo});
        }
    }
    
    
    return (
        <Container>
            <ClearFix px="15px" />
            <FormWrapper onSubmit={handleSubmit}>
                <H2>Tell us about your delivery</H2>
                <TextFieldWrapper>
                    <Label htmlFor="dueDate">Due date</Label>
                    <TextField id="dueDate" value={deliveryInfo.dueDate} type="date" name="dueDate" onChange={handleChange} />
                </TextFieldWrapper>
                {deliveryInfoErrors.dueDateError.length > 1 ? <Error>{deliveryInfoErrors.dueDateError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="hospitalName">Hospital Name</Label>
                    <TextField placeholder="Hospital Name" id="hospitalName" value={deliveryInfo.hospitalName} type="text" name="hospitalName" onChange={handleChange} />
                </TextFieldWrapper>
                {deliveryInfoErrors.hospitalNameError.length > 1 ? <Error>{deliveryInfoErrors.hospitalNameError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="hospitalAddress">Hospital Address</Label>
                    <TextField placeholder="Address" id="hospitalAddress" value={deliveryInfo.hospitalAddress} type="text" name="hospitalAddress" onChange={handleChange} />
                </TextFieldWrapper>
                {deliveryInfoErrors.hospitalAddressError.length > 1 ? <Error>{deliveryInfoErrors.hospitalAddressError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="hospitalCity">Hospital City</Label>
                    <TextField placeholder="Ex. Kampala" id="hospitalCity" value={deliveryInfo.hospitalCity} type="text" name="hospitalCity" onChange={handleChange} />
                </TextFieldWrapper>
                {deliveryInfoErrors.hospitalCityError.length > 1 ? <Error>{deliveryInfoErrors.hospitalCityError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="hospitalPhone">Hospital Phone</Label>
                    <TextField placeholder="+256 772-000-000" id="hospitalPhone" value={deliveryInfo.hospitalPhone} type="phone" name="hospitalPhone" onChange={handleChange} />
                </TextFieldWrapper>
                {deliveryInfoErrors.hospitalPhoneError.length > 1 ? <Error>{deliveryInfoErrors.hospitalPhoneError}</Error> : null}
                <ClearFix px="10px" />
                <Checkbox handleChange={handleChange} value={deliveryInfo.termsAndConditions}>
                    <a href="#">
                        Terms and Conditions
                    </a>
                </Checkbox>
                <ClearFix px="15px" />
                <Button type="submit">Complete</Button>
            </FormWrapper>
        </Container>
    )

   
}


export default MotherSignup