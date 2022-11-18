import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filteredContacts: [],
    search: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push({
        id: nanoid(),
        number: action.payload.number,
        name: action.payload.name,
      });
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    searchByName(state, action) {
      const filteredContacts = state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredContacts:
          action.payload.length > 0 ? filteredContacts : [...state.contacts],
      };
    },
  },
});

export const { addContact, deleteContact, searchByName } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
