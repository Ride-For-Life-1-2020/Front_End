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
    Checkbox
 } from './../styled-components'

function VehicleInfo(props) {

    const [vehicle, setVehicle] = useState({
        vehicleMake: "",
        vehicleModel: "",
        year: "",
        mileage: "",
        licensePlate: "",
        vin: ""
    })

    const handleChange = (e) => {
        setVehicle({...vehicle, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.handleUserFormSubmit(vehicle);
    }

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
