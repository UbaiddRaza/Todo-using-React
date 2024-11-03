import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  return (
    <>
      <h2>Register</h2>
      <Form>

        
        <input type="email" placeholder="Enter email" required  />




        <input type="password" placeholder="Password" required  />


       <button>Register</button>
      </Form>
    </>
  );
};

export default Register;

