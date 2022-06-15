import React from 'react';
import './ButtonGroup.css';
import { Button } from 'react-bootstrap';
const ButtonGroup = () => {
    return (
        <div>
  <Button variant="outline-primary" className="btn" >View</Button>
  <Button variant="outline-danger" className="btn" >Remove</Button>
            
        </div>
    );
};

export default ButtonGroup;