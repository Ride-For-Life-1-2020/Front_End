import React, {useState} from 'react';
import styled from 'styled-components';
import DataViewer from './DataViewer';

const ManageAccount = (props) => {
    const [isEdit, setIsEdit] = useState(false);

    const {
        FullName,
        Email,
        PhoneNumber, 
        City, 
        UserName, 
        DateOfBirth, 
        Shift, 
        Price, 
        InsuranceCompany, 
        PolicyNumber, 
        VehicleModel, 
        VehicleMake, 
        Year, 
        Mileage, 
        LicensePlate, 
        Vin
    } = props || ''

    const propsToArray = () => {
        return [
            {
                title: 'Personal Info',
                data: { FullName, DateOfBirth, Email, PhoneNumber, City, UserName }
            },
            {
                title: 'Driving',
                data: { Price, Shift, InsuranceCompany, PolicyNumber,  }
            },
            {
                title: 'Vehicle',
                data: { VehicleMake, VehicleModel, Year, Mileage, LicensePlate, Vin}
            }
        ]
    }

    return(
        <Wrapper>
             {propsToArray()?.map((item, index) => <DataViewer key={index} title={item.title} data={item.data} />)}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;  
`;

export default ManageAccount;