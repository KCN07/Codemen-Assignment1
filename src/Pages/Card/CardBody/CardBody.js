import React from 'react';
import { Card } from 'react-bootstrap';
import ButtonGroup from '../../Shared/ButtonGroup/ButtonGroup';
import './CardBody.css';
const CardBody = (props) => {
  
  
    return (
        <>
            <Card.Body className="pt-1">
      <Card.Title className="title mb-1" >{props.title}</Card.Title>
      <Card.Text className="sub-title" >
        {props.subtitle} Intets
      </Card.Text>

      <ButtonGroup></ButtonGroup>
    </Card.Body>
        </>
    );
};

export default CardBody;