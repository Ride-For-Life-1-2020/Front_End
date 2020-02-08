import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

const Header = ({fullName, city}) => {
    return(
        <Wrapper>
            <h1 className="user-info--name">{fullName}</h1>
                <p className="user-info--city">
                <i className="fas fa-map-marker-alt user-info--marker"></i>
                {city}
            </p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .user-info--name {
        font-weight: bold;
        font-size: 1.5rem;
        padding: 15px 0;
        width: 100%;
    }

    .user-info--address, &--city {
        width: 25%;
    }
    .user-info--marker {
        padding: 0 15px;
    }
`

export default Header;