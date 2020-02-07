import React from 'react';
import styled from 'styled-components';
import {theme} from './../../style';

const Wrapper = styled.div`
    
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
    }
`

const DropZone = props => {

    const handleDragAndDrop = e => {
        e.preventDefault();
    }

    return(
        <Wrapper>
            <div onDragEnter={handleDragAndDrop}className="drop-region">
                <div className="drop-message">
                    Drag & Drop images or click to upload
                </div>
                <div className="drop-image-preview">

                </div>
            </div>
        </Wrapper>
    )
}

export default DropZone;

