import React from 'react';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container className='text-center bg-primary text-white p-5 mt-5'>

      <h3 >Tell us the differences between uncontrolled and controlled components.</h3>
      <p className='text-dark fw-bold'>Uncontrolled components are managed by the DOM, while controlled components are managed by React.
      </p>

      <h3> How to validate React props using PropTypes?</h3>
      <p className='text-dark fw-bold'>PropTypes is a type-checking library that can be used to validate React props. You can define the expected type of each prop and receive warnings if the prop received is of a different type.</p>

      <h3>Tell us the difference between nodejs and express js.</h3>
      <p className='text-dark fw-bold'>Node.js is a runtime environment for JavaScript outside of the browser, while Express.js is a web application framework built on top of Node.js.</p>

      <h3> What is a custom hook, and why will you create a custom hook?</h3>
      <p className='text-dark fw-bold'>A custom hook is a reusable function that encapsulates stateful logic and can be used across multiple components. Custom hooks are created to avoid code duplication and keep components clean and readable.
      </p>
    </Container>
  );
};

export default Blog;