import React from 'react';
import styled from 'styled-components';
import { Container, Button, IllustrationContainer } from './styled-components';

const illustrationURL = `${process.env.PUBLIC_URL}'/assets/undraw_order_a_car_3tww.svg'`;

const HomeGrid = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 50px;

    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        align-content: center;
        justify-content: center;
        padding-top: 100px;
    }

    button.btn-get-started {
        position: absolute;
        left: 0;
        bottom: -70px;

        @media (min-width: 1024px) {
            position: relative;
            bottom: -10px;
        }
    }
`;

const AboutSection = styled.div`
    p {
      margin-bottom: 25px;
    }

    @media (min-width: 1024px) {
        width: 55%;

    }
`;

const H1 = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    padding: 30px 0;
`;

const about = `
We provides transportation to facility for people in need like pregnant mothers who live a distance greater 
than 5km from hospital facility and need help getting an ambulance to take to facility to deliver safely. 
`

const HomePage = ({history}) => {

    const handleClick = e => {
        history.push('/signup/whoami')
    }
    return(
        <Container>
            <HomeGrid>
                <AboutSection>
                    <H1>Go to delivery safely</H1>
                    <p>{about}</p>
                    <Button onClick={handleClick} className="btn-get-started">
                        Get Started
                    </Button>
                </AboutSection>
                <IllustrationContainer style={{marginBottom: '25px'}} backgroundURL={illustrationURL} />
            </HomeGrid>
        </Container>
    )
}

export default HomePage;