import React, {useState} from "react"
import { 
    Container, 
    Button, 
    Header,
    FormWrapper,
    TextFieldWrapper,
    TextField, 
    Label,
    ClearFix,
    Checkbox,
    Error,
 } from './../styled-components'
 import axios from 'axios';

function VehicleInfo(props) {

    const data = props.location.state.driver

    const [vehicle, setVehicle] = useState({
        ...data,
        VehicleMake: "",
        VehicleModel: "",
        Year: "",
        Mileage: "",
        LicensePlate: "",
        Vin: ""
    })

    const [vehicleErrors, setVehicleErrors] = useState({
        VehicleMakeError: "",
        VehicleModelError: "",
        YearError: "",
        MileageError: "",
        LicensePlateError: "",
        VinError: ""
    })

    const validate = () => {
        let isErr = false

        const errors = {
            VehicleMakeError: "",
            VehicleModelError: "",
            YearError: "",
            MileageError: "",
            LicensePlateError: "",
            VinError: ""
        }

        if (vehicle.VehicleMake.length < 1) {
            isErr = true;
            errors.VehicleMakeError = "Vehicle Make is a required field"
        }

        if (vehicle.VehicleModel.length < 1) {
            isErr = true;
            errors.VehicleModelError = "Vehicle Model is a required field"
        }

        if (vehicle.Year.length < 1) {
            isErr = true;
            errors.YearError = "Year is a required field"
        }

        if (vehicle.Mileage.length < 1) {
            isErr = true;
            errors.MileageError = "Mileage is a required field"
        }

        if (vehicle.LicensePlate.length < 1) {
            isErr = true;
            errors.LicensePlateError = "License Plate is a required field"
        }

        if (vehicle.Vin.length < 1) {
            isErr = true;
            errors.VinError = "Vehicle Identification Number is a required field"
        }

        if (isErr) {
            setVehicleErrors({...vehicleErrors, ...errors})
        }

        return isErr
    }

    const handleChange = (e) => {
        if (e.target.name === "Year" || e.target.name === "Mileage") {
            setVehicle({...vehicle, [e.target.name]: parseInt(e.target.value)})
        } else {
            setVehicle({...vehicle, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fireApiCall = () => {
            const err = validate();
            if(err === true) {
                e.preventDefault();
            } 
            else if( err === false) {
                e.preventDefault();
                axios.post(`https://rideforlifebackend.herokuapp.com/api/drivers/signup`, vehicle,
                {
                    headers: {
                      "content-type": "application/json" // Tell the server we are sending this over as JSON
                  }
                })
                .then(response => {
                    props.history.push(`/sign-in`);
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
            <FormWrapper id="driver-form" onSubmit={handleSubmit}>
                <Header>Vehicle Information</Header>
                <TextFieldWrapper>
                    <Label htmlFor="VehicleMake">Vehicle Make</Label>
                    <TextField 
                        type="text"
                        id="VehicleMake"
                        name="VehicleMake"
                        value={vehicle.VehicleMake}
                        onChange={handleChange}
                        placeholder="Vehicle Make"
                         />

                </TextFieldWrapper>
                {vehicleErrors.VehicleMakeError.length > 1 ? <Error>{vehicleErrors.VehicleMakeError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="VehicleModel">Vehicle Model</Label>
                    <TextField 
                        type="text"
                        id="VehicleModel"
                        name="VehicleModel"
                        value={vehicle.VehicleModel}
                        onChange={handleChange}
                        placeholder="Vehicle Model"
                         />

                </TextFieldWrapper>
                {vehicleErrors.VehicleModelError.length > 1 ? <Error>{vehicleErrors.VehicleModelError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="Year">Year</Label>
                    <TextField 
                        type="number"
                        id="Year"
                        name="Year"
                        value={vehicle.Year}
                        onChange={handleChange}
                        placeholder="Year"
                         />

                </TextFieldWrapper>
                {vehicleErrors.YearError.length > 1 ? <Error>{vehicleErrors.YearError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="Mileage">Mileage</Label>
                    <TextField 
                        type="text"
                        id="Mileage"
                        name="Mileage"
                        value={vehicle.Mileage}
                        onChange={handleChange}
                        placeholder="Mileage"
                         />

                </TextFieldWrapper>
                {vehicleErrors.MileageError.length > 1 ? <Error>{vehicleErrors.MileageError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="LicensePlate">License Plate #</Label>
                    <TextField 
                        type="text"
                        id="LicensePlate"
                        name="LicensePlate"
                        value={vehicle.LicensePlate}
                        onChange={handleChange}
                        placeholder="License Plate #"
                         />

                </TextFieldWrapper>
                {vehicleErrors.LicensePlateError.length > 1 ? <Error>{vehicleErrors.LicensePlateError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="Vin">Vehicle Identification Number</Label>
                    <TextField 
                        type="text"
                        id="Vin"
                        name="Vin"
                        value={vehicle.Vin}
                        onChange={handleChange}
                        placeholder="VIN"
                         />

                </TextFieldWrapper>
                {vehicleErrors.VinError.length > 1 ? <Error>{vehicleErrors.VinError}</Error> : null}
                <ClearFix px="10px" />
                {/* <Checkbox handleChange={handleChange} value={false}>
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

export default VehicleInfo
