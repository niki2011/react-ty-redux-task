import axios from 'axios'

const url = 'http://localhost:3004/contacts'




export const contactApi = {
  fetchContacts: () => axios.get(url),
  removeContact: (id) =>
    axios.delete(`${url}/${id}/`),
  updateContact: (contact) =>
    axios.put(`${url}/${contact.id}/`, contact),
  addContact: (contact) =>
    axios.post(url, contact)
}