import React from 'react';
import styled from 'styled-components';
import { Logo } from './styled-components';
import { theme } from '../style';

const Wrapper = styled.div`
    display: block;
    background: #1d1e1e;
    text-align: center;
    padding: 50px 0;
    margin-top: 50px;
    width: 100%;
`

const Footer = () => {
    return(
        <Wrapper>
            <Logo style={{color: theme.color.lightGreen}}>
                ride4Life
            </Logo>
        </Wrapper>
    )
}

export default Footer;