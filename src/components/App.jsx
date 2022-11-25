import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from "../redux/contactSlice"
import {getContact,getFilterWord} from "../redux/selector"

import { Filter } from './filter/Filter';
import {ContactForm} from './contactForm/ContactForm';
import { ContactsList } from './contactsList/ContactsList';
import { nanoid } from 'nanoid';

const contactsTest = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]

export const App = () => {
  	const dispatch = useDispatch();

	const contacts = useSelector(getContact);
	const filterWord = useSelector(getFilterWord);
	const addItem = contactObj => {
		const findContact = contacts.find(contact =>
			contact.name.toLowerCase().includes(contactObj.name.toLowerCase())
		);
		findContact
			? alert(`${contactObj.name} is already in contact`)
			: dispatch(addContact(contactObj));
	};

	const isVisibleContacts = () => {
		if (filterWord) {
			const normalizeFilter = filterWord.toLowerCase();

			if (contacts.length !== 0) {
				return contacts.filter(contact =>
					contact.name.toLowerCase().includes(normalizeFilter)
				);
			}
		}
		return contacts;
	};

 


  return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addItem} />

        <h2>Contacts</h2>
        <Filter />
        <ContactsList
visibleContacts={isVisibleContacts()}
        />
      </>
    );
  
}
