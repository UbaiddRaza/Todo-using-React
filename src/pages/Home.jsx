import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <Form>
                <Form.Group controlId="todoInput">
                    <Form.Label>Todo</Form.Label>
                    <Form.Control type="text" placeholder="Enter todo" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Todo
                </Button>
            </Form>
        </div>
    );
};

export default Home;
