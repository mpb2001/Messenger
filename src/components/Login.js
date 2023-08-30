import { Button, Container, Form } from 'react-bootstrap';
import React, { useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';

export default function Login({ onIdSubmit }) {
    const idRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }

    function createNewId() {
        onIdSubmit(uuidV4());
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group className="mb-3">
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="me-2">
                    Login
                </Button>
                <Button onClick={createNewId} variant="secondary" className="m-2">
                    Create a New ID
                </Button>
            </Form>
        </Container>
    );
}
