import React from 'react';
import styled from 'styled-components';

const DashboardBody = props => {
    return(
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: 25px;
    text-align: left;
`;

export default DashboardBody;