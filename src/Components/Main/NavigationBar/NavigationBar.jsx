import React, { useContext } from 'react';
import './NavigationBar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  // get the user status through context API
  const { user } = useContext(AuthContext)

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className='' href="/">GOURMAND</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <ActiveLink to="/home" >HOME</ActiveLink>
            <ActiveLink to="/blog">BLOG</ActiveLink>
          </Nav>

          {
            user ?
              <Link to="/register" ><button className="btn btn-active btn-link">Sign Out</button>
              </Link> :

              <Link to="/login"><button className='btn btn-primary'>Login</button></Link>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;