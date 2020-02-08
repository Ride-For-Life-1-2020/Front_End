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

    return <Img src={image} alt={username} />

}

const Img = styled.img`
    display: block;
    margin: 0 auto;
    width: 160px;
    border-radius: 50%;
    transition: all .3s;
`

export default ProfilePicture;