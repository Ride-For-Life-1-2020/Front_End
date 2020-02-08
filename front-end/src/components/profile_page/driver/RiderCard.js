import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { Button } from './../../styled-components'

const RiderCard = ({riderName, pickup, dropoff}) => {

    return(
        <Card>
            <div className="rider-card">
                <h3 className="rider-card--rider-name">
                   {riderName}
                </h3>
                <p className="rider-card--pickup">
                    <span>Pickup<i className="fas fa-map-marker-alt"></i></span> {pickup}
                </p>
                <p className="rider-card--drop-off">
                    <span>Dropoff<i className="fas fa-map-marker-alt"></i></span> {dropoff}
                </p>
                <Button>Accept Ride</Button>
            </div>
        </Card>
    )
}

const Card = styled.div`
    box-shadow: 1px 1px 4px 2px rgba(0,0,0,0.2);
    padding: 20px;
    border-radius: 5px;

    @media (min-width: 725px) {
        width: 250px;
    }

    &--rider-name {
        font-weight: bold;
        margin-bottom: 15px;
    }

    i {
        padding: 0 10px;
    }

     &--pickup, &--drop-off {
        padding: 10px 0;
    }
    &--drop-off {
        margin-bottom: 20px;
    }
`

export default RiderCard;