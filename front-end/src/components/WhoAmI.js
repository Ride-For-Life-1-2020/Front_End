import React from 'react';
import styled from 'styled-components';
import { Container, Button, Header } from './styled-components'

const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 55.9vh;
    width: 250px;
    margin: 0 auto;
    @media (min-width: 1024px) {
        height: 57.2vh;
    }
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