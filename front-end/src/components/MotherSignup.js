import React, {useState} from "react"

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
} from './styled-components'

const MotherSignup = props => {

    const [deliveryInfo, setDeliveryInfo] = useState({
        dueDate: '',
        hospitalName: '',
        hospitalAddress: '',
        hospitalCity: '',
        hospitalPhone: '',
        termsAndConditions: false 
    })

    const handleChange = e => {
        setDeliveryInfo({...deliveryInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.handleUserFormSubmit(deliveryInfo);
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
                <TextFieldWrapper>
                    <Label htmlFor="hospitalName">Hospital Name</Label>
                    <TextField placeholder="Hospital Name" id="hospitalName" value={deliveryInfo.hospitalName} type="text" name="hospitalName" onChange={handleChange} />
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="hospitalAddress">Hospital Address</Label>
                    <TextField placeholder="Address" id="hospitalAddress" value={deliveryInfo.hospitalAddress} type="text" name="hospitalAddress" onChange={handleChange} />
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="hospitalCity">Hospital City</Label>
                    <TextField placeholder="Ex. Kampala" id="hospitalCity" value={deliveryInfo.hospitalCity} type="text" name="hospitalCity" onChange={handleChange} />
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="hospitalPhone">Hospital Phone</Label>
                    <TextField placeholder="+256 772-000-000" id="hospitalPhone" value={deliveryInfo.hospitalPhone} type="phone" name="hospitalPhone" onChange={handleChange} />
                </TextFieldWrapper>
                <ClearFix px="10px" />
                <Checkbox handleChange={handleChange} value={deliveryInfo.termsAndConditions}>
                    <a href="#">
                        Terms and Conditions
                    </a>
                </Checkbox>
                <ClearFix px="15px" />
                <Button type="submit">Submit</Button>
            </FormWrapper>
        </Container>
    )

   
}

export default MotherSignup