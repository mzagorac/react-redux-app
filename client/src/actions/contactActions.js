import axios from "axios";
import * as actions from "./types";
import { BASE_URL } from "../config/config";

function fetchContactsSuccess(contacts) {
  return {
    type: actions.FETCH_CONTACT_SUCCESS,
    payload: [...contacts]
  };
}

function saveContactSuccess(contact) {
  return {
    type: actions.POST_CONTACT_SUCCESS,
    payload: contact
  };
}

function deleteContactSuccess(contact) {
  return {
    type: actions.DELETE_CONTACT_SUCCESS,
    payload: contact
  };
}

function editContactSuccess(contact) {
  return {
    type: actions.EDIT_CONTACT_SUCCESS,
    payload: contact
  };
}

export function deleteConfirm(val, id) {
  return {
    type: actions.DELETE_CONFIRM,
    payload: { val, id }
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

export function editContact(id, data) {
  return dispatch => {
    axios.put(`${BASE_URL}/contacts/${id}`, data).then(response => {
      dispatch(editContactSuccess(response));
    });
  };
}
