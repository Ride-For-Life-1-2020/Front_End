import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {Label} from '../styled-components';
import { theme } from '../../style';
import {firestore} from './../../libs/firebase';

const ProfilePictureEditor = (props) => {

    const [image, setImage] = useState("");

    const profilePictureRef = useRef();

    const handleUpload = event => {
        event.preventDefault();
        const userData = {
            username: props.username,
            imageData: image
        };

        const userImagesRef = firestore.collection('userImages')
        userImagesRef.add(userData).then(ref => {
            console.log(ref);
        })
    }

    const openFileSelector = () => {
        profilePictureRef.current.click();
    }

    const handleChange = e => {
        handleFile(e.target.files);
    }

    const handleFile = file => {
        const reader = new FileReader();
        reader.onload = e => {
            setImage(e.target.result);
        }
        reader.readAsDataURL(file[0])
    }

    const handleDragAndDrop = e => {
        e.preventDefault();
        if (e.dataTransfer.files.length ) handleFile(e.dataTransfer.files);
    }

    return (
        <Div>
            <Label>Add Profile Picture</Label>
            <div onDragEnter={handleDragAndDrop} onDragLeave={handleDragAndDrop} onDragOver={handleDragAndDrop} onDrop={handleDragAndDrop} onClick={openFileSelector} className={image ? "drop-region has-image" : "drop-region"}>
                <div className={image ? "display-none" : "drop-message"}>
                    Drag & Drop images or click to upload
                    <input onChange={handleChange} ref={profilePictureRef} type="file" accept="image/*" multiple={false} />
                </div>
                <div className="drop-image-preview">
                    <img className={image ? "show-image": "display-none"} src={image} alt="profile" />
                </div>
            </div>
            <button className="btn-upload"  onClick={handleUpload}>Upload</button>
        </Div>
    )
}

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
    .drop-region {
        position: relative;
        display: table-cell;
        width: 160px;
        height: 160px;
        border: 3px dashed ${theme.color.lightGreen};
        font-size: 0.8rem;
        vertical-align: middle;
        padding: 0 10px;
        text-align: center;
        cursor: pointer;

        input[type="file"] {
            display: none;
        }
        &.has-image {
            border: none;
            padding: 0;
        }
    }
    .display-none {
        display: none;
    }
    .show-image {
        display: block;
        width: 100%;
    }
`

export default ProfilePictureEditor;