import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
  const navigate = useNavigate();

  // useState to handle error
  const [error, setError] = useState('');
  // destructure the createAccount function
  const { user, currentUser } = useContext(AuthContext);

  // handle submit function
  const handleSubmit = event => {
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    // call the createUser function, and pass the email, and password parameter to successfully execute new user registration
    currentUser(email, password)
      .then(result => {
        // reset the form after a successful execution
        form.reset()
        navigate(to = "/home")
      })
      .catch(error => {
        console.error(error.message)
        setError(error.message)
      })
  }

  return (

    <Form onSubmit={handleSubmit} className='text-center mt-4'>
      <div className="mb-3">

        {/* user email address */}
        <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
        <input type="email" className="form-control text-center fw-bold fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required />
        <div id="emailHelp" className="form-text ">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control text-center fw-bold fs-5" id="exampleInputPassword1" name='password' required />
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input text-center" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <Button type="submit" className="btn btn-primary">Login</Button>
      <p className='text-danger'>{error}</p>
      <p>Don't have an account yet? <Link to="/register">Register</Link></p>
    </Form>


  );
};

export default Login;