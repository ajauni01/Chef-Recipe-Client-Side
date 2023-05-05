import React from 'react';
import './ShowEachChef.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const ShowEachChef = ({ everyChef }) => {
  const { id, chefPicture, chefName, yearsOfExperience, likes, numberOfRecipes } = everyChef;

  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={chefPicture} />
      <Card.Body>
        <Card.Title><h2 className='text-success'>{chefName}</h2></Card.Title>
        <Card.Text>
          <h5>Experience: {yearsOfExperience}</h5>
          <h5>Number of Recipes: {numberOfRecipes}</h5>
          <h5>Likes: {likes}</h5>

        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button className='btn-recipe' variant="success">View Recipes</Button>{' '}

      </Card.Body>
    </Card>
  );
};

export default ShowEachChef;