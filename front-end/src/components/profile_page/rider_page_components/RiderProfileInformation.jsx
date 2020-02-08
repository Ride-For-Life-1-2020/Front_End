import React from 'react';
import axios from 'axios';
import S from 'styled-components';

const RiderProfileInformation = (props) => {
    return(
        <StyledProfileContainer>
            <StyledTitle>Profile Information</StyledTitle>
           <div>
                <StyledParagraph><StyledSpan>Full Name</StyledSpan>: {props.profileUser.FullName} </StyledParagraph>
                <StyledParagraph><StyledSpan>Username</StyledSpan>: {props.profileUser.UserName}</StyledParagraph>
                <StyledParagraph><StyledSpan>Phone Number</StyledSpan>: {props.profileUser.PhoneNumber}</StyledParagraph>
                <StyledParagraph><StyledSpan>Due Date</StyledSpan>: {props.profileUser.DueDate}</StyledParagraph>
                <StyledParagraph><StyledSpan>Email</StyledSpan>: {props.profileUser.Email}</StyledParagraph>
                <StyledParagraph><StyledSpan>Address</StyledSpan>: {props.profileUser.Address}</StyledParagraph>
                <StyledParagraph><StyledSpan>City</StyledSpan>: {props.profileUser.City}</StyledParagraph>
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