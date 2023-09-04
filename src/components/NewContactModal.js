import React, { useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactsProvider';

export default function NewContactModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  function handleSubmit(e) {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Create Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="id">Id</Form.Label>
            <Form.Control type="text" id="id" ref={idRef} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control type="text" id="name" ref={nameRef} required />
          </Form.Group>
          <Button type="submit" variant="primary">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
