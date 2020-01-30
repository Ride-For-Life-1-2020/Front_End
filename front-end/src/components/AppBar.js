import React from 'react';
import styled from 'styled-components';
import { Container, Logo } from './styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../style';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    background: ${theme.color.lightGreen};
    z-index: 1000;
    box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.5)
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
        color: #000000;
        padding: 20px 20px;
        transition: ease-in .3s;

        :hover {
            background-color: ${theme.color.white};
            color: ${theme.color.lightGreen};
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
    }
}

const AppBar = ({isLogged}) => {
    const classes = styles;
    return(
        <Wrapper>
            <Container style={classes.container}>
                <Logo>
                    ride4Life
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
                                <NavLink to="/sign-up">
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