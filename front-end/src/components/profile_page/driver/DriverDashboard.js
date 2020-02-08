import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './../../styled-components'
import {ProtectedRoute} from './../../../ProtectedRoute';
import axios from 'axios';
import ProfilePicture from './ProfilePicture';
import Header from './Header';
import DriverMenu from './DriverMenu';
import DashboardBody from './DashboardBody';
import Home from './Home'
import RideHistory from './RideHistory';
import ManageAccount from './ManageAccount';

const API_DRIVER_INFO_URL = 'https://rideforlifebackend.herokuapp.com/api/drivers/'

const DriverDashboard = props => {

    const [driver, setDriver] = useState({});
    const username = props.match.params.username;

    useEffect(() => {
        
        axios.get(`${API_DRIVER_INFO_URL}${username}`, {
            headers: {
                "content-type": "application/json", // Tell the server we are sending this over as JSON
                'authorization': localStorage.getItem('auth-token'), // Send the token in the header from the client.
            }
        })
        .then(res => {
            setDriver(res.data)
        })
        .catch(error => console.error(error));
    }, [])

    return(
        <Container>
            <ProfileSection>
                <ProfilePicture username={username} />
                <Header fullName={driver.FullName} city={driver.City} />
                <DriverMenu username={username} />
                
                <DashboardBody>
                    <Route component={({match}) => 
                        <div>
                            <ProtectedRoute exact path="/profile/drivers/:username" component={Home} />
                            <ProtectedRoute path="/profile/drivers/:username/manage-account" component={() => <ManageAccount {...driver} />} />
                            <ProtectedRoute path="/profile/drivers/:username/ride-history" component={RideHistory} />
                        </div>
                    } />
                </DashboardBody>
            </ProfileSection>
        </Container>
    )
}

const ProfileSection = styled.section`
    margin-top: 30px;
    text-align: center;
`;

export default DriverDashboard;