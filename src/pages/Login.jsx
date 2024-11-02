import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <Form>


        <input type="email" placeholder="Enter email" required className="form-control" />




        <input type="password" placeholder="Password" required className="form-control" />

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};

export default Login;
