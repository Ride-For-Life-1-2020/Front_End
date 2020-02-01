import React from 'react';
import styled from 'styled-components';
import { Container, Button, IllustrationContainer, H1, H2 } from './styled-components'

const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    @media (min-width: 1024px) {
        width: 30%;
        text-align: left;
        justify-content: center;
    }
`;

const illustrationURL = `${process.env.PUBLIC_URL}'/assets/undraw_city_driver_jh2h.svg'`;

const Grid = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    @media (min-width: 1024px) {
        flex-direction: row;
        height: fit-content;
        padding: 0px 0 0px 0px;
        justify-content: center;
        align-content: center;
        width: 100%;
    }
`;

const IllustrationWrapper = styled.div`
    display: block;

    .illustration {
        width: 100%;

        @media (min-width: 1024px) {
            background-position-x: 0px;
            background-size: 400px;
            height: 400px;
        }
    }
    
    @media (min-width: 1024px) {
        width: 50%;
    }
`

const WhoAmI = (props) => {

    const onClick = event => {
        props.onUserType(event)
        props.history.push('/signup')
    }
    return(
        <Container>
            <Grid>
                <IllustrationWrapper>
                    <H1>Tell us who are you ?</H1>
                    <IllustrationContainer className="illustration" backgroundURL={illustrationURL} />
                </IllustrationWrapper>
                <BtnWrapper>
                    <H2>I'm a</H2>
                    <Button onClick={onClick}>Mother</Button>
                    <Button onClick={onClick}>Driver</Button>
                </BtnWrapper>
            </Grid>
        </Container>
    )
}

export default WhoAmI;