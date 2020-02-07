import React from 'react';
import axios from 'axios';
import S from 'styled-components';

const RiderProfileInformation = () => {
    return(
        <StyledProfileContainer>
            <StyledTitle>Profile Information</StyledTitle>
           <div>
                <StyledParagraph><StyledSpan>Full Name</StyledSpan>: James Bond </StyledParagraph>
                <StyledParagraph><StyledSpan>Username</StyledSpan>: Super_Clark</StyledParagraph>
                <StyledParagraph><StyledSpan>Phone Number</StyledSpan>: 1-111-111-1111</StyledParagraph>
                <StyledParagraph><StyledSpan>Due Date</StyledSpan>: 01/01/2021</StyledParagraph>
                <StyledParagraph><StyledSpan>Email</StyledSpan>: FlyHigh@gmail.com</StyledParagraph>
                <StyledParagraph><StyledSpan>Address</StyledSpan>: 1234 lois ln dr</StyledParagraph>
                <StyledParagraph><StyledSpan>City</StyledSpan>: Smallvile</StyledParagraph>
          </div>
        </StyledProfileContainer>

    );
}
export default RiderProfileInformation;

const StyledProfileContainer = S.div`
    width: 40%;
`;
const StyledTitle = S.h2`
    width: 100%;
    font-size: 30px;
    color: #000;
    margin-bottom: 40px;
`;
const StyledSpan = S.span`
    font-size: 18px;
    color: green;
    font-weight: 500;
`;
const StyledParagraph = S.p`
    font-size: 16px;
    color: #000;
    padding: 5px 0;
`;