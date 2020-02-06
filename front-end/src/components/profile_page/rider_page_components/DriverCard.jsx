import React from 'react';
import axios from 'axios';
import S from 'styled-components';
import PanicButton from './PanicButton';

const DriverCard = (props) => {
    return(
        <StyledCardContainer>
            <StyledImageContainer>
                <StyledImage></StyledImage>
            </StyledImageContainer>
            <DriverInformationContainer>
                <StyledName>Name:{props.driver.name}</StyledName>
                <StyledPrice>Price: {props.driver.price}</StyledPrice>
            </DriverInformationContainer>
            <PanicButton />
        </StyledCardContainer>

    );
}
export default DriverCard;

const StyledCardContainer = S.div`
    border: 1px solid rgba(0,0,0,0.6);
    box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.4);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 25px;
`;

const StyledImageContainer = S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
`;
const StyledImage = S.div`
    background-color: blue;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const DriverInformationContainer = S.div`
    width: 60%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;
const StyledName = S.h3`
    font-size: 20px;
    color: #000;
    width: 100%;
`;
const StyledPrice = S.h3`
    font-size: 16px;
    color: #333;
    width: 100%;
`;