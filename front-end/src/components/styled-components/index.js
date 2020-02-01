import styled from 'styled-components';
import {theme} from '../../style';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    color: #212121;
    ${props => (props.___class === 'app' ? 
        `
            padding-top: 90px;
            @media (min-width: 875px) {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            @media (min-width: 1024px) {
                width: 80%;
            }
        `
        : null
    )}
`;

export const Grid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Logo  = styled.h1`
    margin: 0;
    font-size: 1.8rem;
    letter-spacing: -2px;
    font-weight:  bold;
    color: #000;
`;

export const FormWrapper = styled.form`
    @media (min-width: 875px) {
        width: 46%;
        margin: 0 auto;
    }
    -webkit-box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.2);
    box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.2);
    padding: 25px 25px;
    border-radius: 7px;
`

// Inputs
export const TextField = styled.input`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    :focus {
        border: 2px solid ${theme.color.lightGreen};
    }
`; 

export const Label = styled.label`
    display: block;
    padding: 0px 0px 3px 5px;
    text-transform: uppercase;
    font-size: 0.65rem;

`;

export const TextFieldWrapper = styled.div`
    position: relative;
    margin-bottom: 15px;
    width: 95%;
    ${props => (props.width ?
        `
        width: ${props.width};
        `
        : null
    )}
`;

// Buttons
export const Button = styled.button`
    padding: 15px 25px;
    width: 100%;
    background-color: ${theme.color.lightGreen};
    margin-bottom: 15px;
    text-transform: uppercase;
    transition: ease-in .2s;
    color: white;

    :hover {
        background-color: ${theme.color.darkerGreen};
    }

    @media (min-width: 600px) {
        width: 150px;
    }

`

// Heading
export const Header = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 25px;
`

export const H1 = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    padding: 30px 0;
`;

export const H2 = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    padding: 25px 0;
`;

// Helpers
export const ClearFix = styled.div`
    
    ${props => (props.px ?
        `
        padding: ${props.px}
        `
        : `padding: 5px 0;`
    )}
`;

// Illustration container 
export const IllustrationContainer = styled.div`
    display: block;
    width: 100%;
    height: 250px;
    ${props =>  `background-image: url(${props.backgroundURL});`}
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    @media (min-width: 1024px) {
        width: 40%;
    }
`;