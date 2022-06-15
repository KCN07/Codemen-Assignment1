import React from 'react';
import { Card } from 'react-bootstrap';
import './CardFooter.css';
const CardFooter = (props) => {
    return (
        <>
            <Card.Footer className="text-muted ftr" style={{backgroundColor: "#f7f9fe"}}>Last Updated: {props.update}</Card.Footer>
        </>
    );
};

export default CardFooter;