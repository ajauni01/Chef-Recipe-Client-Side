import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShowEachChef from '../ShowEachChef/ShowEachChef';

const Home = () => {
  const allChefs = useLoaderData();
  console.log('all chefs data', allChefs)
  return (
    <div>
      {
        allChefs.map(eachChef => <ShowEachChef key={eachChef.id} everyChef={eachChef}></ShowEachChef>)
      }


    </div>
  );
};

export default Home;