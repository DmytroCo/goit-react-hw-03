import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import contactsData from "./contacts.json";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return contactsData;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts), [
      contacts,
    ]);
  });

  const searchContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={searchContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
