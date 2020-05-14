import { createAction } from '@reduxjs/toolkit';
import typeActions from './typeActions';

export const addContact = createAction(typeActions.ADD_CONTACT);
export const deleteContact = createAction(typeActions.DELETE_CONTACT);
export const updateFilter = createAction(typeActions.UPDATE_FILTER);
export const updateErrorMessage = createAction(
  typeActions.UPDATE_ERROR_MESSAGE,
);
