import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {firestore} from './../../../libs/firebase';

const DEFAULT_AVATAR = `${process.env.PUBLIC_URL}/assets/driver_avatar.png`;

const ProfilePicture = ({username}) => {
    const [image, setImage] = useState(DEFAULT_AVATAR);

    useEffect(() => {
        firestore.collection('userImages').where('username', '==', username).get()
            .then(snapshot => {
                if(snapshot.empty) {
                    console.log('No mathcing documents');
                    return;
                }
                snapshot.forEach(doc => {
                    setImage(doc.data().imageData);
                })
            });
    }, [])

    return (
        <CircularWrapper>
            <Img src={image} alt={username} />
        </CircularWrapper>
    );
}

const CircularWrapper = styled.div`
    display: block;
    position: relative;
    width: 160px;
    height: 160px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
    transition: all .3s;
`

const Img = styled.img`
    width: 100%;
`

export default ProfilePicture;