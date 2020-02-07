import React, {useState} from 'react';
import axios from 'axios';
import S from 'styled-components';
import RiderProfileInformation from './RiderProfileInformation';
import DriverCard from './DriverCard';
import ProfileEditForm from './ProfileEditForm';

const RiderDashboardPage = () => {

    const [editProfileIsOpen, setEditProfileIsOpen] = useState(false);

    const openProfileEditForm = () => {
        if(editProfileIsOpen === false) {
            setEditProfileIsOpen(true);
        } else {
            setEditProfileIsOpen(false);
        }
    }
    return(
        <StyledMain>
            <HeaderContainer>
            <StyledImageContainer>
                <StyledImage>Profile Image</StyledImage>
            </StyledImageContainer>
                <StyledName>James Bond</StyledName>
            </HeaderContainer>
            <StyledSection>
            <StyledEditButton onClick={openProfileEditForm}>Edit Profile</StyledEditButton>
            {editProfileIsOpen ? <ProfileEditForm /> : null}
                <RiderProfileInformation />
                <CardContainer>
                <StyledTitle>Driver</StyledTitle>
                    <DriverCard driver={{name: 'Dylan', price: '2.00'}}/>
                </CardContainer>
            </StyledSection>
        </StyledMain>
    );
};
export default RiderDashboardPage;

const StyledMain = S.main`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
`;
const StyledTitle = S.h2`
    width: 100%;
    font-size: 30px;
    color: #000;
`;
const HeaderContainer = S.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    margin-bottom: 50px;
    border-bottom: 1px solid #333;
    padding-bottom: 20px;
`;

const StyledImageContainer = S.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    margin: 50px 0;
`;
const StyledImage = S.div`
    background-color: green;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const StyledName = S.h2`
    font-size: 50px;
    color: #000;
    font-weight: 500;
`;
const StyledSection = S.section`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    flex-flow: row wrap;
`;
const CardContainer = S.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    padding-left: 50px;
    box-sizing: border-box;
    width: 60%;
`;
const StyledEditButton = S.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;