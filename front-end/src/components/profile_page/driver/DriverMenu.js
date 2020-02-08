import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const DriverMenu = ({username}) => {
    return (
        <Nav className="driver-menu">
            <NavLink exact to={`/profile/drivers/${username}`} activeClassName="active" className="driver-menu--item">Home</NavLink>
            <NavLink to={`/profile/drivers/${username}/manage-account`} activeClassName="active" className="driver-menu--item">Manage Account</NavLink>
            <NavLink to={`/profile/drivers/${username}/ride-history`} activeClassName="active" className="driver-menu--item">Ride History</NavLink>
        </Nav>
    )
}

const Nav = styled.nav`
    width: 100%;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        margin-top: 15px;
        text-align: left;
        display: flex;
        a {
            text-decoration: none;
            color: inherit;
        }

        .driver-menu--item {
            padding: 15px 20px;
            transition: ease-in .3s;

            :hover {
                background-color: #ccc;
            }

            &.active {
                background-color: #ccc;
            }
        }
`

export default DriverMenu;