import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
  // useState to handle error
  const [error, setError] = useState('');
  // useState to show success
  const [success, setSuccess] = useState('');
  // destructure the createAccount function
  const { createAccount } = useContext(AuthContext);

  // handle submit function
  const handleSubmit = event => {
    // prevent the form from going back to the default setting
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    // call the createUser function, and pass the email, and password parameter to successfully execute new user registration
    createAccount(email, password)
      .then(result => {
        console.log(result.user);
        // set the success message
        setSuccess('Hurrah! You have made it through..')
        // reset the form after a successful execution
        form.reset()
      })
      .catch(error => {
        console.error(error.message)
        setError(error.message)
      })
  }


  return (
    <Form onSubmit={handleSubmit} className='text-center mt-4'>
      <div className="mb-3">
        {/* user name */}
        <label htmlFor="exampleInputName" className="form-label">Name</label>
        <input type="text" className="form-control text-center fw-bold fs-5" id="exampleInputName1" aria-describedby="emailHelp" name='name' required />

        {/* user email address */}
        <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
        <input type="email" className="form-control text-center fw-bold fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required />
        <div id="emailHelp" className="form-text ">We'll never share your email with anyone else.</div>
        {/* photo URL */}
        <label htmlFor="photoURL" className="form-label">Photo URL</label>
        <input type="text" className="form-control text-center fw-bold fs-5" id="exampleInputPhoto1" aria-describedby="emailHelp" name='photoURL' required />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control text-center fw-bold fs-5" id="exampleInputPassword1" name='password' required />
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input text-center" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <Button type="submit" className="btn btn-primary">Register</Button>
      <p className='text-success'>{success}</p>
      <p className='text-danger'>{error}</p>
    </Form>
  );
};

export default Register;