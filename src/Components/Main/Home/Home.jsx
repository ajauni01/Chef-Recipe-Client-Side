import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShowEachChef from '../ShowEachChef/ShowEachChef';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';

const Home = () => {
  const allChefs = useLoaderData();
  console.log('all chefs data', allChefs)
  return (
    <div className='text-center'>
      <Banner></Banner>
      <h2 className='text-success mb-5 mt-5 text-decoration-underline'>Our World Famous Chefs</h2>
      <div className='card-properties text-center'>
        {
          allChefs.map(eachChef => <ShowEachChef key={eachChef.id} everyChef={eachChef}></ShowEachChef>)
        }
      </div>

    </div>
  );
};

export default Home;