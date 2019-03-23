import axios from "axios";
import {
  FETCH_CONTACT_SUCCESS,
  POST_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS
} from "./actions";
import { BASE_URL } from "../config/config";

function fetchContactsSuccess(contacts) {
  return {
    type: FETCH_CONTACT_SUCCESS,
    payload: [...contacts]
  };
}

function saveContactSuccess(contact) {
  return {
    type: POST_CONTACT_SUCCESS,
    payload: contact
  };
}

function deleteContactSuccess(contact) {
  return {
    type: DELETE_CONTACT_SUCCESS,
    payload: contact
  };
}

export function fetchContacts() {
  return dispatch => {
    axios.get(`${BASE_URL}/contacts`).then(response => {
      dispatch(fetchContactsSuccess(response.data));
    });
  };
}

export function saveContact(contact) {
  return dispatch => {
    axios.post(`${BASE_URL}/contacts`, contact).then(response => {
      dispatch(saveContactSuccess(response));
    });
  };
}

export function deleteContact(id) {
  return dispatch => {
    axios.delete(`${BASE_URL}/contacts/${id}`).then(response => {
      dispatch(deleteContactSuccess(response));
    });
  };
}
