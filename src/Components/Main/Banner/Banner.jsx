import React from 'react';
import './Banner.css'
import coverImg from '../../../assets/cover.jpg'

const Banner = () => {
  return (
    <div className='cover-image'>
      <img className='cover-image mx-auto' src={coverImg} alt="" />
      <h1 className='headline'>Welcome to the GOURMAND Chef House</h1>
    </div>
  );
};

export default Banner;