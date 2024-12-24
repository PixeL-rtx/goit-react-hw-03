import { useState, useEffect } from "react";
import css from "./App.module.css";

import ContactForm from "../ContackForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { nanoid } from "nanoid";

import contactJson from "../../list.json";

const initialContacts = [contactJson];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState("");

  const filterContacts = contacts.filter(
    (contact) =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
    // contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };
  return (
    <div className={css.Form}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <div className={css.ContactList}>
        <ContactList contacts={filterContacts} onDelete={deleteContact} />
      </div>
    </div>
  );
};

export default App;
