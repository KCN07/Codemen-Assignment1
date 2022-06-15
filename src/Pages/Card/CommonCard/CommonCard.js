import React from 'react';
import { Card } from 'react-bootstrap';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';
import CardHeader from '../CardHeader/CardHeader';
import './CommonCard.css';
const CommonCard = (props) => {
    const {id, header, title, subtitle, update, color}= props.cards;
    return (
        <>
            <Card border="light" className="card col-2 ms-4 mt-4 px-0" >
            <CardHeader
            header={header}
            color={color}
            ></CardHeader>
            <CardBody
            title = {title}
            subtitle = {subtitle}
            ></CardBody>
            <CardFooter
            update = {update}
            ></CardFooter>
            </Card>
        </>
    );
};

export default CommonCard;