import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <Form>
               
                   <h1>TODO APP</h1>
                    <input type="text" placeholder='enter todo' /> 
              <button>Add todo</button>
            </Form>
        </div>
    );
};

export default Home;
