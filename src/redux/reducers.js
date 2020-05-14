import { createReducer } from '@reduxjs/toolkit';
import typeActions from './typeActions';
import contactsDefault from '../services/contacts.json';
import errorMessageObj from '../services/errorMessage';

const INITIAL_STATE = {
  contacts: contactsDefault,
  filter: '',
  errorMessage: '',
};

const reducer = createReducer(
  { ...INITIAL_STATE },
  {
    [typeActions.ADD_CONTACT]: (state, action) => {
      if (
        state.contacts.find(contact => contact.name === action.payload.name)
      ) {
        return {
          ...state,
          errorMessage: errorMessageObj.ALREADY_EXISTS_MESSAGE,
        };
      }
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    [typeActions.DELETE_CONTACT]: (state, { payload }) => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== payload),
    }),
    [typeActions.UPDATE_FILTER]: (state, { payload }) => ({
      ...state,
      filter: payload,
    }),
    [typeActions.UPDATE_ERROR_MESSAGE]: (state, { payload }) => ({
      ...state,
      errorMessage: payload,
    }),
  },
);

export default reducer;
