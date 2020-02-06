import React, { useRef } from 'react';
import ProfilePicture from 'profile-picture';
import styled from 'styled-components';
import {Label} from './../styled-components';
import { theme } from './../../style';

const PPWrapper = styled.div`
    position: relative;
    width: 165px;
    height: 180px;
    overflow: hidden;
    margin-top: -9px;
`;

const Div = styled.div`
    display: block;
    margin-top: 20px;
    width: 165px;

    .btn-upload {
        border: 1px solid ${theme.color.lightGreen};
        padding: 5px 10px;
        color: ${theme.color.lightGreen};
        margin-top: 15px;
        width: 100%;
        border-radius: 25px;
        transition: all .3s;

        :hover {
            background-color: ${theme.color.lightGreen};
            color: #fff;
        }
    }
`

const ProfilePictureEditor = (props) => {

    const profilePictureRef = useRef();

    const handleUpload = event => {
        event.preventDefault();

        const PP = profilePictureRef.current;
        const imageData = PP.getImageAsDataUrl();
        props.handleUpload(imageData);
    }

    return (
        <Div>
            <Label>Add Profile Picture</Label>
            <PPWrapper>
                <ProfilePicture 
                    ref={profilePictureRef}
                    useHelper={false}
                    debug={false}
                />
            </PPWrapper>
            <button className="btn-upload"  onClick={handleUpload}>Upload</button>
        </Div>
    )
}

export default ProfilePictureEditor;