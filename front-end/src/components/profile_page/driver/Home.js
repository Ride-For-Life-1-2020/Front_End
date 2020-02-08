import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import RiderCard from './RiderCard';

const Home = () => {
    const [requests, setRequests] = useState([])

    useEffect(() => {
        //Check if driver has request
    }, []);

    return(
        <Wrapper>
            {requests?.length ?
                requests.map(request => <RiderCard riderName={request.FullName} pickup={request.pickup} dropoff={request.dropoff} />)
            : null}
            {!requests?.length ?
                <h2 className="ride-not-found">No ride request</h2>
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