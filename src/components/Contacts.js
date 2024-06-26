import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactsProvider';

export default function Contacts() {
  const { contacts } = useContacts();
  
  return (
    <ListGroup variant='flush'>
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id} className="border-0">
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
