import React from 'react';
import './RecipeDetails.css'
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RecipeDetails = () => {
  const recipeDetails = useLoaderData();

  // destructure the values
  const { chefPicture, chefName, description, likes, numberOfRecipes, recipes, yearsOfExperience } = recipeDetails;

  return (
    <div className='text-center'>
      <img src={chefPicture} width="800px" alt="" />

      <Card className='recipe-card'>
        <Card.Body>
          <Card.Title className='text-warning fs-1'>{chefName}</Card.Title>
          <Card.Text>
            <p> {description}</p>
            <p>Total Likes: {likes}</p>
            <p>Number of Recipes:  {numberOfRecipes} </p>
            <p>Experience: {yearsOfExperience} years</p>
          </Card.Text>
          <h2 className='mt-5 text-decoration-underline text-danger'>Recipe Info</h2>
          <h4><span className='text-warning'>Recipe Name:</span> {recipes[0]?.recipeName}</h4>
          <h4><span className='text-warning'>Ingredients:</span> {recipes[0]?.ingredients}</h4>
          <p><span className='text-warning'>Cooking Method: </span> {recipes[0]?.cookingMethod}</p>
          <h4><span className='text-warning'>Rating:</span> {recipes[0]?.rating}</h4>
          <Button variant="dark">Favourite?</Button>{' '}
        </Card.Body>
      </Card>


    </div>
  );
};

export default RecipeDetails;