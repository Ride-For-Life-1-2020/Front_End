import React from 'react';
import styled from 'styled-components';
import { Container, Button, Header } from './styled-components'

const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 250px;
    margin: 0 auto;
    
`

const WhoAmI = (props) => {

    const onClick = event => {
        props.onUserType(event)
        props.history.push('/signup')
    }
    return(
        <Container>
            <BtnWrapper>
                <Header>I'm a</Header>
                <Button onClick={onClick}>Mother</Button>
                <Button onClick={onClick}>Driver</Button>
            </BtnWrapper>
        </Container>
    )
}

export default WhoAmI;