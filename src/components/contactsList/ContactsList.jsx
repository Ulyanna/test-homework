import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {deleteContact} from "../../redux/contactSlice"
import { ListItem, Name, Number, DeleteButton } from './ContactsList.styled';

const ContactItem = ({ contact}) => {
  	const dispatch = useDispatch();
  const { name, number, id } = contact;
  return (
    <ListItem>
      <Name>{name}</Name>
      <Number>{number}</Number>

      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </ListItem>
  );
};
export const ContactsList = ({ visibleContacts }) => {
  return (
    <ul>
      
      {visibleContacts && visibleContacts.map(contact => (
        <ContactItem
          contact={contact}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func,
};
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func,
};
