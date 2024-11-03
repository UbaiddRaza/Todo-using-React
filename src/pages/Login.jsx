import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <Form>


        <input type="email" placeholder="Enter email" required />




        <input type="password" placeholder="Password" required  />

        <button>Login</button>
      </Form>
    </>
  );
};

export default Login;
