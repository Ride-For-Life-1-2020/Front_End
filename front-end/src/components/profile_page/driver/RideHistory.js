import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import RiderCard from './RiderCard';

const Home = () => {
    const [ridesHitory, setRideHistory] = useState([])

    useEffect(() => {
        //Check if driver has request
    }, []);

    return(
        <Wrapper>
            {ridesHitory?.length ?
                ridesHitory.map(ride => <RiderCard riderName={ride.FullName} pickup={ride.pickup} dropoff={ride.dropoff} />)
            : null}
            {!ridesHitory?.length ?
                <h2 className="ride-not-found">No ride history</h2>
            : null}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .ride-not-found {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        color: #ccc;
        padding: 50px 0;
    } 
`

export default Home;