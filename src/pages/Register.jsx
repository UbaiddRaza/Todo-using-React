import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  return (
    <>
      <h2>Register</h2>
      <Form>

        <Form.Label>Email address</Form.Label>
        <input type="email" placeholder="Enter email" required className="form-control" />




        <input type="password" placeholder="Password" required className="form-control" />


        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;

