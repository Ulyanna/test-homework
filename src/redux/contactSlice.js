import { nanoid } from "nanoid";

import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
	name: 'contacts',
	initialState: {
		items: [],
		filterWord: '',
	},
	reducers: {
		addContact(state, action) {
			state.items = [action.payload, ...state.items];
		},
		deleteContact(state, action) {
			state.items = state.items.filter(
				contact => contact.id !== action.payload
			);
		},
		filterContact(state, action) {
			state.filterWord = action.payload;
		},
	},
});

const persistConfig = {
	key: 'contacts',
	storage,
	whitelist: ['items'],
};

export const contactReducer = persistReducer(
	persistConfig,
	contactSlice.reducer
);

export const { addContact, deleteContact, filterContact } = contactSlice.actions;