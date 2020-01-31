import React from 'react';
import styled from 'styled-components';
import { Container, Logo } from './styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../style';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    background: ${theme.color.white};
    z-index: 1000;
    box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.5)
`

const MenuItemIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const MenuText = styled.div`
    font-size: 0.7rem;
    text-transform: uppercase;
    
    a {
        display: block;
        text-decoration: none;
        color: ${theme.color.lightGreen};
        padding: 20px 20px;
        transition: ease-in .3s;

        &.sign-up {
            background-color: ${theme.color.lightGreen};
            color: ${theme.color.white};
        }

        :hover {
            text-decoration: underline;
        }
    }
`

const RightMenuItems = styled.div`
    display: flex;
    flex-direction: row;
`

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

const AppBar = ({isLogged}) => {
    const classes = styles;
    return(
        <Wrapper>
            <Container style={classes.container}>
                <Logo style={classes.logo}>
                    ride<span style={classes.logoSpan}>4</span>Life
                </Logo>
                {isLogged &&  
                    <MenuItemIcon>
                    <MenuText>
                        <NavLink exact to="/logout">
                            Logout
                        </NavLink>
                    </MenuText>
                </MenuItemIcon> 
                }
                {!isLogged &&  
                    <RightMenuItems>
                        <MenuItemIcon>
                            <MenuText>
                                <NavLink exact to="/sign-in">
                                    Sign in
                                </NavLink>
                            </MenuText>
                        </MenuItemIcon> 
                        <MenuItemIcon>
                            <MenuText>
                                <NavLink className="sign-up" to="/sign-up">
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

export default AppBar;