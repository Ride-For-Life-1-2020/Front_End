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

function VehicleInfo(props) {

    const data = props.location.state.driver

    const [vehicle, setVehicle] = useState({
        ...data,
        vehicleMake: "",
        vehicleModel: "",
        year: "",
        mileage: "",
        licensePlate: "",
        vin: ""
    })

    const [vehicleErrors, setVehicleErrors] = useState({
        vehicleMakeError: "",
        vehicleModelError: "",
        yearError: "",
        mileageError: "",
        licensePlateError: "",
        vinError: ""
    })

    const validate = () => {
        let isErr = false

        const errors = {
            vehicleMakeError: "",
            vehicleModelError: "",
            yearError: "",
            mileageError: "",
            licensePlateError: "",
            vinError: ""
        }

        if (vehicle.vehicleMake.length < 1) {
            isErr = true;
            errors.vehicleMakeError = "Vehicle Make is a required field"
        }

        if (vehicle.vehicleModel.length < 1) {
            isErr = true;
            errors.vehicleModelError = "Vehicle Model is a required field"
        }

        if (vehicle.year.length < 1) {
            isErr = true;
            errors.yearError = "Year is a required field"
        }

        if (vehicle.mileage.length < 1) {
            isErr = true;
            errors.mileageError = "Mileage is a required field"
        }

        if (vehicle.licensePlate.length < 1) {
            isErr = true;
            errors.licensePlateError = "License Plate is a required field"
        }

        if (vehicle.vin.length < 1) {
            isErr = true;
            errors.vinError = "Vehicle Identification Number is a required field"
        }

        if (isErr) {
            setVehicleErrors({...vehicleErrors, ...errors})
        }

        return isErr
    }

    const handleChange = (e) => {
        setVehicle({...vehicle, [e.target.name]: e.target.value})
    }

    /** POST REQUEST */
    const handleSubmit = e => {
        e.preventDefault();
        const err = validate()
        if (!err) {
            props.handleUserFormSubmit({data: vehicle});
        }
    }

    console.log(vehicle)

    return (
        <Container>
            <ClearFix px="15px" />
            <FormWrapper onSubmit={handleSubmit}>
                <Header>Vehicle Information</Header>
                <TextFieldWrapper>
                    <Label htmlFor="vehicleMake">Vehicle Make</Label>
                    <TextField 
                        type="text"
                        id="vehicleMake"
                        name="vehicleMake"
                        value={vehicle.vehicleMake}
                        onChange={handleChange}
                        placeholder="Vehicle Make"
                         />

                </TextFieldWrapper>
                {vehicleErrors.vehicleMakeError.length > 1 ? <Error>{vehicleErrors.vehicleMakeError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="vehicleModel">Vehicle Model</Label>
                    <TextField 
                        type="text"
                        id="vehicleModel"
                        name="vehicleModel"
                        value={vehicle.vehicleModel}
                        onChange={handleChange}
                        placeholder="Vehicle Model"
                         />

                </TextFieldWrapper>
                {vehicleErrors.vehicleModelError.length > 1 ? <Error>{vehicleErrors.vehicleModelError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="year">Year</Label>
                    <TextField 
                        type="text"
                        id="year"
                        name="year"
                        value={vehicle.year}
                        onChange={handleChange}
                        placeholder="Year"
                         />

                </TextFieldWrapper>
                {vehicleErrors.yearError.length > 1 ? <Error>{vehicleErrors.yearError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="mileage">Mileage</Label>
                    <TextField 
                        type="text"
                        id="mileage"
                        name="mileage"
                        value={vehicle.mileage}
                        onChange={handleChange}
                        placeholder="Mileage"
                         />

                </TextFieldWrapper>
                {vehicleErrors.mileageError.length > 1 ? <Error>{vehicleErrors.mileageError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="licensePlate">License Plate #</Label>
                    <TextField 
                        type="text"
                        id="licensePlate"
                        name="licensePlate"
                        value={vehicle.licensePlate}
                        onChange={handleChange}
                        placeholder="License Plate #"
                         />

                </TextFieldWrapper>
                {vehicleErrors.licensePlateError.length > 1 ? <Error>{vehicleErrors.licensePlateError}</Error> : null}
                <TextFieldWrapper>
                    <Label htmlFor="vin">Vehicle Identification Number</Label>
                    <TextField 
                        type="text"
                        id="vin"
                        name="vin"
                        value={vehicle.vin}
                        onChange={handleChange}
                        placeholder="VIN"
                         />

                </TextFieldWrapper>
                {vehicleErrors.vinError.length > 1 ? <Error>{vehicleErrors.vinError}</Error> : null}
                <ClearFix px="10px" />
                <Checkbox handleChange={handleChange} value={false}>
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

export default VehicleInfo
