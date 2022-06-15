import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import './CardHeader.css';

const CardHeader = (props) => {
    
    return (
        <>
            
    <Card.Header className="header" style={{color: props.color}}>{props.header}</Card.Header>
    

        </>
    );
};

export default CardHeader;