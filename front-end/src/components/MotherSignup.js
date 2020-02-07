import React, {useState, useEffect} from "react";
import axios from "axios";

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
        Address: "",
        DueDate: '',
        HospitalName: '',
        HospitalAddress: ''
    })

    const [deliveryInfoErrors, setDeliveryInfoErrors] = useState({
        AddressError: '',
        DueDateError: '',
        HospitalNameError: '',
        HospitalAddressError: ''
    })
    
    

    const handleChange = e => {
        setDeliveryInfo({...deliveryInfo, [e.target.name]: e.target.value})
    }


    const validate = () => {
        let isErr = false

        const errors = {
            AddressError: '',
            DueDateError: '',
            HospitalNameError: '',
            HospitalAddressError: ''
        }

        if (deliveryInfo.DueDate.length < 1) {
            isErr = true
            errors.DueDateError = "Due Date is a required field";
        }

        if (deliveryInfo.Address.length < 1) {
            isErr = true
            errors.AddressError= "Address is a required field";
        }

        if (deliveryInfo.HospitalName.length < 1) {
            isErr = true
            errors.HospitalNameError= "Hospital Name is a required field";
        }

        if (deliveryInfo.HospitalAddress.length < 1) {
            isErr = true
            errors.HospitalAddressError = "Hospital Address is a required field";
        }

        if (isErr) {
            setDeliveryInfoErrors({...deliveryInfoErrors, ...errors})
        }

        return isErr
    }

  
    const handleSubmit = (e) => {
        const fireApiCall = () => {
            const err = validate();
            if(err === true) {
                e.preventDefault();
            } 
            else if( err === false) {
                e.preventDefault();
                axios.post(`https://rideforlifebackend.herokuapp.com/api/patients/signup`, deliveryInfo,
                {
                    headers: {
                        "content-type": "application/json" // Tell the server we are sending this over as JSON
                    }
                })
                .then(response => {
                    console.log(response);
                })
                .catch( error => {
                    console.log(error);
                });
            }
        }
        fireApiCall();
    }
    
    
    
    return (
        <Container>
            <ClearFix px="15px" />
            <FormWrapper onSubmit={handleSubmit}>
                <H2>Mother Information (cont.)</H2>
                <TextFieldWrapper>
                    <Label htmlFor="Address">Address</Label>
                    <TextField placeholder="Address" id="Address" value={deliveryInfo.Address} type="text" name="Address" onChange={handleChange} />
                </TextFieldWrapper>
                {deliveryInfoErrors.AddressError.length > 1 ? <Error>{deliveryInfoErrors.AddressError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="DueDate">Due date</Label>
                    <TextField id="DueDate" value={deliveryInfo.DueDate} type="date" name="DueDate" onChange={handleChange} />
                </TextFieldWrapper>
                {deliveryInfoErrors.DueDateError.length > 1 ? <Error>{deliveryInfoErrors.DueDateError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="HospitalName">Hospital Name</Label>
                    <TextField placeholder="Hospital Name" id="HospitalName" value={deliveryInfo.HospitalName} type="text" name="HospitalName" onChange={handleChange} />
                </TextFieldWrapper>
                {deliveryInfoErrors.HospitalNameError.length > 1 ? <Error>{deliveryInfoErrors.HospitalNameError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="HospitalAddress">Hospital Address</Label>
                    <TextField placeholder="Address" id="HospitalAddress" value={deliveryInfo.HospitalAddress} type="text" name="HospitalAddress" onChange={handleChange} />
                </TextFieldWrapper>
                {deliveryInfoErrors.HospitalAddressError.length > 1 ? <Error>{deliveryInfoErrors.HospitalAddressError}</Error> : null}
                <ClearFix px="10px" />
                {/* <Checkbox handleChange={handleChange} value={deliveryInfo.termsAndConditions}>
                    <a href="#">
                        Terms and Conditions
                    </a>
                </Checkbox> */}
                <ClearFix px="15px" />
                <Button type="submit">Complete</Button>
            </FormWrapper>
        </Container>
    )

   
}


export default MotherSignup