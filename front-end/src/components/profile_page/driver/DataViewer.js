import React, {useState} from 'react';
import styled from 'styled-components';
import { H2, Button } from './../../styled-components';
import { toWords } from './../../../libs/utils';

const DataViewer = props => {
    const [isEdit, setIsEdit] = useState(false);

    return(
        <Wrapper>    
            <div className="header">
                <H2>{props.title}</H2>
                <Button className="btn-edit">Edit</Button>
            </div>
            {!isEdit ?
                <ul className="list">
                    {Object.keys(props.data).map((key, index) => <DataViewerItem key={index} name={key} value={props.data[key]} />)}
                </ul>
            : null}
        </Wrapper>
    )


};

const DataViewerItem = ({name, value}) => {
    return(
        <li className="list-item">
            <span className="label">{toWords(name).join(' ')}</span>
            <span className="column-separator">:</span>
            {value}
        </li> 
    )
};

const Wrapper = styled.div`
    border-bottom: 1px solid #ccc;
    .header {
        display: flex;
        h2 {
            width: 73%;
        }
    }

    .column-separator {
        padding: 0 10px;
    }

    .list-item {
        display: flex;
        padding: 5px 0;
        .label {
            display: bloc;
            width: 155px;
        }
    }

    .list {
        margin-bottom: 15px;
    }
`;

export default DataViewer;