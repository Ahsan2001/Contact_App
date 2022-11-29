import React, { useEffect } from "react"
import List from "./List";
import {useState} from "react";
import * as ContactsAPI  from "./utils/ContactsAPI";

function App() {
  
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    }
    getContacts();
  } , []);


  const removeContact = (contact) => {
    ContactsAPI.remove(contact);
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };



  return (
    <List contacts={contacts} onDeleteContact={removeContact} />
  );
}

export default App;
