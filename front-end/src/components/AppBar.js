import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import { Container, Logo } from './styled-components';
import { NavLink, Link } from 'react-router-dom';
import { theme } from '../style';
import {withRouter} from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    background: ${theme.color.white};
    z-index: 1000;
    box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.2);
`

const MenuItemIcon = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const MenuText = styled.div`
    font-size: 0.7rem;
    text-transform: uppercase;
    
    a {
        display: block;
        text-decoration: none;
        color: ${theme.color.lightGreen};
        padding: 1.3rem;
        transition: ease-in .3s;

        &.sign-up {
            background-color: ${theme.color.lightGreen};
            color: ${theme.color.white};
        }

        :hover {
            background-color: ${theme.color.darkerGreen};
            color: ${theme.color.white};
        }
    }
`;

const RightMenuItems = styled.div`
    display: flex;
    flex-direction: row;
`;

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        fontSize: '1.7rem'
    },

    me: {
        padding: "10px 0"
    },
    logo: {
        textDecoration: 'none',
        color: theme.color.lightGreen,
    },

    logoSpan: {
        color: theme.color.black,
    },
    signUp: {
        backgroundColor: theme.color.lightGreen,
        color: theme.color.white,
    }
}

const AppBar = ({history,match,location, isLogged}) => {
    const classes = styles;
    const PROFILE_URL = localStorage.getItem('profile-url');
    // Grab dispatch function
    const dispatch = useDispatch();
    // Handle Log user out.
    const handleLogOut = (event) => {
        event.preventDefault();
        localStorage.removeItem('auth-token');
        localStorage.removeItem('profile-url');
        dispatch({type: 'SET_LOGGEDIN', payload: false});
        history.push("/sign-in");
    }
    return(
        <Wrapper>
            <Container style={classes.container}>
                <Logo >
                    <Link style={classes.logo} to="/">
                        ride<span style={classes.logoSpan}>4</span>Life
                    </Link>
                </Logo>
                {isLogged &&  
                <MenuItemIcon>
                    <MenuText>
                        <NavLink exact to={PROFILE_URL ? PROFILE_URL : ""}>
                            Profile
                        </NavLink>
                    </MenuText>
                    <MenuText>
                        <NavLink exact to="/search">
                            Search
                        </NavLink>
                    </MenuText>
                    <MenuText>
                        <NavLink exact to="/logout" onClick={handleLogOut}>
                            Logout
                        </NavLink>
                    </MenuText>
                </MenuItemIcon> 
                }
                {!isLogged &&  
                    <RightMenuItems>
                        <MenuItemIcon>
                        <MenuText>
                            <NavLink exact to="/">
                                Home
                            </NavLink>
                        </MenuText>
                            <MenuText>
                                <NavLink exact to="/sign-in">
                                    Sign in
                                </NavLink>
                            </MenuText>
                        </MenuItemIcon> 
                        <MenuItemIcon>
                            <MenuText>
                                <NavLink className="sign-up" to="/signup/whoami">
                                    Sign up
                                </NavLink>
                            </MenuText>
                        </MenuItemIcon> 
                    </RightMenuItems>
                }
            </Container>
        </Wrapper>
    )
}

export default withRouter(AppBar);