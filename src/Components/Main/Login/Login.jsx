import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from "firebase/auth";





const Login = () => {
  // navigate the user to the home page after a successful login
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  // useState to handle error
  const [error, setError] = useState('');
  // destructure the createAccount function
  const { user, currentUser, loading } = useContext(AuthContext);
  // show the spinner until data is properly fetched
  if (user === loading) {
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  }

  // handle submit function
  const handleSubmit = event => {
    // prevent the form from going back to the default setting
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    // call the createUser function, and pass the email, and password parameter to successfully execute new user registration
    currentUser(email, password)
      .then(result => {
        // reset the form after a successful execution
        form.reset()
        navigate("/home")
      })
      .catch(error => {
        console.error(error.message)
        setError(error.message)
      })
  }

  return (

    <div>
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
      {/* google sign in option */}
      <div className='text-center'>
        <button className='me-2 btn btn-primary'><FaGoogle></FaGoogle> Login with Google</button>
        <button className='btn btn-primary'>Login with GitHub</button>
      </div>
    </div>

  );
};

export default Login;