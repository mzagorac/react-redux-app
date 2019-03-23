import {
  FETCH_CONTACT_SUCCESS,
  POST_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS
} from "../actions/actions";

const initialState = {
  contacts: []
};

export function contacts(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...action.payload]
      };
    case POST_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload.data]
      };
    case DELETE_CONTACT_SUCCESS:
      const newContacts = [...state.contacts].filter(contact => {
        return contact._id !== action.payload.data._id;
      });
      return {
        ...state,
        contacts: newContacts
      };

    default:
      return state;
  }
}
