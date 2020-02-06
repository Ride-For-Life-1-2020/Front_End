import React, {useState, useEffect} from 'react';
import axios from 'axios';
import S from 'styled-components';

const SearchForm = (props) => {
    return(
        <StyledForm>
            <StyledLabel> Price: 
                <StyledSelectList onChange={props.handlePriceFilter}>
                    <StyledOption value="25">$25.00</StyledOption>
                    <StyledOption value="50">$50.00</StyledOption>
                    <StyledOption value="75">$75.00</StyledOption>
                    <StyledOption value="100">$100.00</StyledOption>
                </StyledSelectList>
            </StyledLabel>
            <StyledLabel> Cities
                <StyledSelectList>
                    <StyledOption option="1">Kampala</StyledOption>
                    <StyledOption option="2">Gulu</StyledOption>
                    <StyledOption option="3">Lira</StyledOption>
                    <StyledOption option="4">Mbarara</StyledOption>
                    <StyledOption option="5">Jinja</StyledOption>
                    <StyledOption option="6">Bwizibwera</StyledOption>
                    <StyledOption option="7">Mbale</StyledOption>
                    <StyledOption option="8">Mukono</StyledOption>
                    <StyledOption option="9">Kasese</StyledOption>
                    <StyledOption option="10">Masaka</StyledOption>
                </StyledSelectList> 
            </StyledLabel>
            <StyledButton onClick={props.handleClear} >Clear Search</StyledButton>
        </StyledForm>
    );
}

export default SearchForm;

const StyledForm = S.form`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0;
`;
const StyledLabel = S.label`
    font-size: 2rem;
    color: #000;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    width: 100%;
    align-items: center;
    flex-direction: column;
`;
const StyledSelectList = S.select`
    width: auto;
    border: none;
    font-size: 24px;
    background-color: #333;
    color: #fff;
    border-radius: 5px;
    padding: 10px
`;

const StyledOption = S.option`
    font-size: 24px;
    color: #fff;
`;
const StyledButton = S.div`
    width: 100px;
    height: 50px;
    color: #000;
    font-size: 20px;
    background-color: pink;
    padding: 20px;

    &: hover {
        cursor: pointer;
    }
`;