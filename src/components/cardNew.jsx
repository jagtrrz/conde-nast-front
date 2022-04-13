import React from 'react';
import PropTypes from "prop-types";

import { Card, Button } from 'react-bootstrap';

export const NewsCard = (props) =>{

    return (
        <Card className='m-3' bg="dark" text='light'>
          <Card.Img variant="top" src={props.item.urlToImage} />
          <Card.Body>
            <Card.Title>{props.item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.item.author}</Card.Subtitle>
            <Card.Text>
              {props.item.description}
            </Card.Text>
            <div className="d-flex justify-content-end">
              <Button variant="info" href={props.item.url} target="_blank" >Go to new</Button>
            </div>
          </Card.Body>
        </Card>
    )
}

NewsCard.propTypes = {
	item: PropTypes.object,
};