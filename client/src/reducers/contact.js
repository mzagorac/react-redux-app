import * as types from "../actions/types";

const initialState = {
  contacts: []
};

export function contacts(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...action.payload]
      };
    case types.POST_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload.data]
      };
    case types.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts].filter(contact => {
          return contact._id !== action.payload.data._id;
        })
      };

    case types.EDIT_CONTACT_SUCCESS:
      const newContacts = [...state.contacts].filter(contact => {
        return contact._id !== action.payload.data._id;
      });
      return {
        ...state,
        contacts: [...newContacts, action.payload.data]
      };

    default:
      return state;
  }
}
